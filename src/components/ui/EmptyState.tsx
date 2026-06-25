import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Search, X } from 'lucide-react'

interface EmptyStateProps {
  query: string
  onClear: () => void
}

/**
 * Empty state shown when template search returns no results.
 */
export function EmptyState({ query, onClear }: EmptyStateProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center py-24 px-4 text-center"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-surface-variant/50 border border-white/10 flex items-center justify-center mb-6">
        <Search size={28} className="text-on-surface-variant opacity-60" />
      </div>

      <h3 className="font-display text-xl text-primary mb-2">
        {t('templates.noResults')}
      </h3>
      <p className="font-sans text-sm text-on-surface-variant max-w-xs mb-6">
        {t('templates.noResultsHint')}
      </p>

      {query && (
        <button
          onClick={onClear}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/30 font-mono-label text-[11px] transition-all duration-300"
        >
          <X size={14} />
          {t('templates.browseAll')}
        </button>
      )}
    </motion.div>
  )
}
