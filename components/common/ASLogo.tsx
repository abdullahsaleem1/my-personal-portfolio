export default function ASLogo({ size = 'md', variant = 'color', className }: { size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; variant?: 'color' | 'white'; className?: string }) {
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
    '2xl': 'w-28 h-28',
  };

  const gradientId = `as-grad-${variant}-text`;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || dimensions[size]} shrink-0`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={variant === 'white' ? 'transparent' : '#6C3CE1'} />
          <stop offset="100%" stopColor={variant === 'white' ? 'transparent' : '#4F2DA8'} />
        </linearGradient>
      </defs>

      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        rx="24"
        fill={`url(#${gradientId})`}
        stroke={variant === 'white' ? 'white' : 'none'}
        strokeWidth="4"
      />
      
      <text
        x="50%"
        y="54%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="48"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, 'Inter', sans-serif"
        letterSpacing="-1"
      >
        <tspan fill="white">A</tspan>
        <tspan fill={variant === 'white' ? '#E2E8F0' : '#E8DEFF'}>S</tspan>
      </text>
    </svg>
  );
}
