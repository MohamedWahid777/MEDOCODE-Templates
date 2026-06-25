import { type ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

/**
 * Reusable mono-label tag used as a section eyebrow —
 * e.g. "Templates / 2026" or "What's Included"
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={clsx(
        'font-mono-label text-[11px] text-primary/60 uppercase tracking-[0.2em] block',
        className
      )}
    >
      {children}
    </span>
  )
}
