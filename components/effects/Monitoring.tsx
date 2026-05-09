'use client';

import { useEffect } from 'react';

type MonitorPayload = {
  type: 'client_error' | 'unhandled_rejection' | 'performance';
  message?: string;
  stack?: string;
  url: string;
  userAgent: string;
  data?: Record<string, unknown>;
};

const sendPayload = (payload: MonitorPayload) => {
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/monitor', body);
    return;
  }

  fetch('/api/monitor', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => undefined);
};

const getNavigationTiming = () => {
  const entry = performance.getEntriesByType('navigation')[0];

  if (!entry || !(entry instanceof PerformanceNavigationTiming)) {
    return null;
  }

  return {
    responseStart: entry.responseStart,
    responseEnd: entry.responseEnd,
    domContentLoaded: entry.domContentLoadedEventEnd,
    load: entry.loadEventEnd,
    ttfb: entry.responseStart - entry.requestStart,
  };
};

export default function Monitoring() {
  useEffect(() => {
    const basePayload = {
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    const onError = (event: ErrorEvent) => {
      sendPayload({
        type: 'client_error',
        message: event.message,
        stack: event.error?.stack,
        ...basePayload,
      });
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason as Error | string | undefined;
      sendPayload({
        type: 'unhandled_rejection',
        message: typeof reason === 'string' ? reason : reason?.message,
        stack: typeof reason === 'string' ? undefined : reason?.stack,
        ...basePayload,
      });
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);

    const timing = getNavigationTiming();
    if (timing) {
      sendPayload({
        type: 'performance',
        data: timing,
        ...basePayload,
      });
    }

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, []);

  return null;
}
