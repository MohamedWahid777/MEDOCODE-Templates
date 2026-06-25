import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionLabel } from '../ui/SectionLabel'

/**
 * Hero section at the top of /templates page.
 * Large heading, subtitle, and a decorative label.
 */
export function TemplateHero() {
  const { t } = useTranslation()

  return (
    <section className="pt-36 pb-16 md:pt-44 md:pb-20 text-center">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel className="mb-6">
            MEDOCODE / {new Date().getFullYear()}
          </SectionLabel>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[42px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[1] tracking-tighter text-primary mb-6"
        >
          {t('templates.pageTitle')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[15px] sm:text-[17px] text-on-surface-variant leading-relaxed max-w-xl"
        >
          {t('templates.pageSubtitle')}
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center"
        />
      </div>
    </section>
  )
}
