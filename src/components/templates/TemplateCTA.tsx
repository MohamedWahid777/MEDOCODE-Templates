import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MessageCircle, Wand2 } from 'lucide-react'
import { type Template, buildBuyTemplateUrl, buildCustomizeTemplateUrl } from '../../lib/templates'

interface TemplateCTAProps {
  template: Template
}

/**
 * WhatsApp purchase CTA block on the template detail page.
 * Two actions:
 *   1. "Buy Template"          → pre-filled purchase message
 *   2. "Customize This Template" → pre-filled customization message
 */
export function TemplateCTA({ template }: TemplateCTAProps) {
  const { t } = useTranslation()

  const buyUrl = buildBuyTemplateUrl(template)
  const customizeUrl = buildCustomizeTemplateUrl(template)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mt-12 md:mt-16 rounded-2xl border border-white/10 bg-surface-container-low p-7 md:p-8 flex flex-col gap-6"
    >
      {/* Price badge */}
      <div className="flex flex-col gap-1">
        <span className="font-mono-label text-[10px] text-on-surface-variant tracking-widest uppercase">
          {t('templates.detail.startingFrom')}
        </span>
        <span className="font-display font-bold text-[40px] md:text-[48px] text-primary leading-none tracking-tighter">
          {template.price}
        </span>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/8" />

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        {/* Primary: Buy Template */}
        <a
          href={buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`buy-template-${template.slug}`}
          className="hero-cta-button w-full py-4 rounded-xl font-mono-label text-[12px] tracking-widest flex items-center justify-center gap-2.5"
        >
          <MessageCircle size={16} />
          {t('templates.detail.buyTemplate')}
        </a>

        {/* Secondary: Customize */}
        <a
          href={customizeUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`customize-template-${template.slug}`}
          className="w-full py-4 rounded-xl font-mono-label text-[12px] tracking-widest flex items-center justify-center gap-2.5 border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
        >
          <Wand2 size={16} />
          {t('templates.detail.customizeTemplate')}
        </a>
      </div>

      {/* Author attribution */}
      <div className="flex items-center gap-3 pt-1">
        <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-display font-bold text-sm">
          {template.author.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-mono-label text-[9px] text-on-surface-variant tracking-widest uppercase">
            {t('templates.detail.author')}
          </span>
          <span className="font-sans text-xs text-primary">{template.author.handle}</span>
        </div>
      </div>
    </motion.div>
  )
}
