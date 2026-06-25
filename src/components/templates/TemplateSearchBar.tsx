import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Search, X } from 'lucide-react'

interface TemplateSearchBarProps {
  value: string
  onChange: (value: string) => void
}

/**
 * Controlled search bar for filtering templates.
 * Uses a 300ms debounce handled by the parent via useDeferredValue / setTimeout.
 */
export function TemplateSearchBar({ value, onChange }: TemplateSearchBarProps) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'

  const handleClear = useCallback(() => {
    onChange('')
  }, [onChange])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-xl mx-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Search icon */}
      <Search
        size={16}
        className={`absolute top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none ${
          isRtl ? 'right-4' : 'left-4'
        }`}
      />

      <input
        id="template-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('templates.searchPlaceholder')}
        autoComplete="off"
        className={`w-full bg-surface border border-white/10 rounded-full font-sans text-sm text-primary placeholder:text-on-surface-variant focus:outline-none focus:border-primary/30 focus:ring-0 transition-colors duration-300 py-3.5 ${
          isRtl ? 'pr-11 pl-10' : 'pl-11 pr-10'
        }`}
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={handleClear}
          aria-label={t('templates.searchClear')}
          className={`absolute top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors duration-200 ${
            isRtl ? 'left-4' : 'right-4'
          }`}
        >
          <X size={15} />
        </button>
      )}
    </motion.div>
  )
}
