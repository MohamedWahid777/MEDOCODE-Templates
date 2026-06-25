import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { type Template } from '../../lib/templates'

interface TemplateCardProps {
  template: Template
  index: number
}

export function TemplateCard({ template, index }: TemplateCardProps) {
  const { t } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col bg-surface border border-white/[0.07] rounded-none overflow-hidden hover:border-white/20 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Cover Image ─────────────────────────────────────── */}
      <div className="relative overflow-hidden aspect-[16/10] bg-surface-container-highest">
        <img
          src={template.coverImage}
          alt={template.name}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`w-full h-full object-cover select-none pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isHovered ? 'scale-[1.04] blur-[3px] brightness-[0.45]' : 'scale-100 blur-0 brightness-100'
          }`}
        />
        
        {/* Transparent overlay for image protection */}
        <div 
          className="absolute inset-0 z-10" 
          onContextMenu={(e) => e.preventDefault()} 
        />

        {/* Hover overlay with CTA button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-20 flex items-center justify-center"
          aria-hidden={!isHovered}
        >
          <Link
            to={`/templates/${template.slug}`}
            tabIndex={isHovered ? 0 : -1}
            className="hero-cta-button px-7 py-3 rounded-full font-mono-label text-[12px] tracking-widest flex items-center gap-2.5 shadow-2xl"
          >
            {t('templates.previewTemplate')}
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>

      {/* ── Card Footer ────────────────────────────────────── */}
      <Link
        to={`/templates/${template.slug}`}
        className="flex items-center justify-between p-5 gap-4 group-hover:bg-surface-variant/20 transition-colors duration-300"
        aria-label={`${template.name} — ${t('templates.viewDetails')}`}
      >
        <div className="flex flex-col min-w-0">
          <span className="font-display text-[16px] sm:text-[18px] text-primary leading-tight truncate">
            {template.name}
          </span>
        </div>

        {/* Arrow icon */}
        <div className="shrink-0 w-9 h-9 rounded-none border border-white/10 flex items-center justify-center text-on-surface-variant group-hover:border-primary/40 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300">
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </Link>
    </motion.article>
  )
}
