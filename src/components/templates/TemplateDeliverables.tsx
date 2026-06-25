import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'

/**
 * Animated checklist of what the user receives after purchasing.
 */
export function TemplateDeliverables() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'

  // The keys match the ones we added in the i18n files
  const items = ['1', '2', '3', '4', '5', '6']

  return (
    <section className="mt-12 md:mt-14 p-6 md:p-8 rounded-none border border-white/10 bg-surface-variant/10">
      <SectionLabel className="mb-6">{t('templates.detail.deliverables')}</SectionLabel>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {items.map((key, i) => (
          <motion.li
            key={key}
            initial={{ opacity: 0, x: isRtl ? 12 : -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.45,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-3"
          >
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
            <span className="font-sans text-[15px] text-on-surface-variant font-medium">
              {t(`templates.detail.deliverableItems.${key}`)}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
