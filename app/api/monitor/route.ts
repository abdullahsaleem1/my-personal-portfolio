type MonitorPayload = {
  type: 'client_error' | 'unhandled_rejection' | 'performance';
  message?: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  data?: Record<string, unknown>;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as MonitorPayload;
    console.log('[monitor]', payload);
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Monitor API error:', error);
    return Response.json({ ok: false }, { status: 400 });
  }
}
