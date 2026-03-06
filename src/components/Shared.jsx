// StarIcon SVG reutilizável
export function StarIcon({ size = 72, className = '' }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            className={`star-icon${className ? ' ' + className : ''}`}
        >
            <defs>
                <linearGradient id="gold-grad-shared" x1="0" y1="0" x2="100" y2="100">
                    <stop offset="0%" stopColor="#F5D97A" />
                    <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
            </defs>
            <path d="M50 5 L53 45 L95 50 L53 55 L50 95 L47 55 L5 50 L47 45 Z" fill="url(#gold-grad-shared)" />
        </svg>
    )
}

// Divisor dourado
export function GoldDivider() {
    return (
        <div className="gold-divider">
            <span>✦</span>
        </div>
    )
}

// Botão CTA
export function CtaButton({ href, gold = false, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-cta${gold ? ' btn-cta--gold' : ''}`}
        >
            {children}
        </a>
    )
}
