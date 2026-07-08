import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Check } from 'lucide-react'

export type SortOption = 'oldest' | 'newest' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'

interface TemplateSortDropdownProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

export function TemplateSortDropdown({ value, onChange }: TemplateSortDropdownProps) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const options: { value: SortOption; label: string }[] = [
    { value: 'oldest', label: t('templates.sortOldest') },
    { value: 'newest', label: t('templates.sortNewest') },
    { value: 'price-asc', label: t('templates.sortPriceAsc') },
    { value: 'price-desc', label: t('templates.sortPriceDesc') },
    { value: 'name-asc', label: t('templates.sortNameAsc') },
    { value: 'name-desc', label: t('templates.sortNameDesc') },
  ]

  const currentOption = options.find((opt) => opt.value === value) || options[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full md:w-64 flex-shrink-0"
      dir={isRtl ? 'rtl' : 'ltr'}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-surface border border-white/10 rounded-full font-sans text-sm text-primary py-3.5 px-5 flex items-center justify-between hover:bg-white/5 transition-colors duration-300 focus:outline-none focus:border-primary/30"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="truncate">{currentOption.label}</span>
        <ChevronDown
          size={16}
          className={`text-on-surface-variant transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-2 w-full bg-surface border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50 py-2`}
            role="listbox"
          >
            {options.map((option) => (
              <li key={option.value}>
                <button
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`w-full px-5 py-2.5 text-sm flex items-center justify-between transition-colors ${
                    isRtl ? 'text-right' : 'text-left'
                  } ${
                    value === option.value
                      ? 'bg-primary/10 text-primary'
                      : 'text-on-surface hover:bg-white/5'
                  }`}
                  role="option"
                  aria-selected={value === option.value}
                >
                  <span className="truncate">{option.label}</span>
                  {value === option.value && <Check size={14} className="text-primary flex-shrink-0 mx-3" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
