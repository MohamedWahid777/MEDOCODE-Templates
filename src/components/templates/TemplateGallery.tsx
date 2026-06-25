import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionLabel } from '../ui/SectionLabel'

interface TemplateGalleryProps {
  images: string[]
  templateName: string
}

/**
 * Simple responsive image grid gallery — no lightbox, no modals.
 * First image is displayed large (full width), rest in a 2-column grid.
 */
export function TemplateGallery({ images, templateName }: TemplateGalleryProps) {
  const { t } = useTranslation()

  if (!images || images.length === 0) return null

  const [primary, ...rest] = images

  return (
    <section className="mt-16 md:mt-20">
      <SectionLabel className="mb-6">{t('templates.detail.gallery')}</SectionLabel>

      <div className="flex flex-col gap-4">
        {/* Primary image — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden rounded-2xl bg-surface-container-highest border border-white/10"
        >
          <img
            src={primary}
            alt={`${templateName} — screenshot 1`}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
        </motion.div>

        {/* Remaining images — 2-column grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative overflow-hidden rounded-xl bg-surface-container-highest border border-white/10"
              >
                <img
                  src={src}
                  alt={`${templateName} — screenshot ${i + 2}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
