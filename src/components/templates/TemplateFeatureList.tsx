import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'

interface TemplateFeatureListProps {
  features: string[]
}

/**
 * Animated checklist of included features on the template detail page.
 */
export function TemplateFeatureList({ features }: TemplateFeatureListProps) {
  const { t } = useTranslation()

  if (!features || features.length === 0) return null

  return (
    <section className="mt-12 md:mt-14">
      <SectionLabel className="mb-5">{t('templates.detail.features')}</SectionLabel>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.45,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-start gap-3 py-2.5 border-b border-white/5 last:border-0"
          >
            <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Check size={11} className="text-primary" />
            </span>
            <span className="font-sans text-[14px] text-on-surface-variant leading-snug">
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
