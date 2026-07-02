export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <svg
        aria-hidden="true"
        className="brand-mark"
        fill="none"
        height="48"
        viewBox="0 0 96 96"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brand-mark-gradient" x1="8" x2="88" y1="12" y2="88">
            <stop stopColor="#17284A" />
            <stop offset="0.65" stopColor="#20365F" />
            <stop offset="1" stopColor="#F28C22" />
          </linearGradient>
        </defs>
        <rect fill="url(#brand-mark-gradient)" height="80" rx="24" width="80" x="8" y="8" />
        <rect
          fill="rgba(255,255,255,0.08)"
          height="48"
          rx="15"
          stroke="rgba(255,255,255,0.18)"
          width="48"
          x="24"
          y="24"
        />
        <path
          d="M35 54L48 39L61 54"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        />
        <path d="M39 60H57" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="6" />
        <circle cx="63" cy="37" fill="#FFFFFF" r="5" />
      </svg>
      <span className="brand-wordmark">Ignitz</span>
    </span>
  );
}
