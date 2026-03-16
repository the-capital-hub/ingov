import Link from 'next/link'
import { type ReactNode, type MouseEventHandler } from 'react'

type Variant = 'light' | 'primary' | 'outline'

interface CtaButtonProps {
  /** Button label */
  children: ReactNode
  /** Optional icon rendered after the label */
  icon?: ReactNode
  /** Visual variant */
  variant?: Variant
  /** Navigate to a URL — renders an <a> / Next <Link> */
  href?: string
  /** Click handler — renders a <button> */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** Extra Tailwind classes */
  className?: string
  /** HTML type (only relevant when onClick is used) */
  type?: 'button' | 'submit' | 'reset'
}

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-bold text-base px-8 py-3.5 transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-highlight active:scale-[0.97]'

const variants: Record<Variant, string> = {
  /** White background — for use on dark / hero sections */
  light:
    'bg-white text-dark hover:bg-white/85 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-white',

  /** Hero-blue solid — primary action on light sections */
  primary:
    'bg-highlight text-white hover:bg-[#0369a1] shadow-[0_4px_20px_-4px_rgba(2,132,199,0.45)] hover:shadow-[0_6px_24px_-4px_rgba(2,132,199,0.55)] hover:-translate-y-0.5 focus-visible:ring-highlight',

  /** Transparent with border — secondary action on any section */
  outline:
    'bg-transparent text-highlight border border-highlight/40 hover:border-highlight hover:bg-highlight/8 hover:-translate-y-0.5 focus-visible:ring-highlight',
}

export default function CtaButton({
  children,
  icon,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: CtaButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  )
}
