import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionLabel } from '../ui/SectionLabel'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface TemplateGalleryProps {
  images: string[]
  templateName: string
}

export function TemplateGallery({ images, templateName }: TemplateGalleryProps) {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev! - 1))
    }
  }, [selectedIndex, images.length])

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev! + 1))
    }
  }, [selectedIndex, images.length])

  useEffect(() => {
    if (selectedIndex === null) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowLeft') {
        if (isRtl) handleNext(); else handlePrevious()
      }
      if (e.key === 'ArrowRight') {
        if (isRtl) handlePrevious(); else handleNext()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll
    document.body.style.overflow = 'hidden'
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, handleNext, handlePrevious, isRtl])

  if (!images || images.length === 0) return null

  return (
    <section className="mt-16 md:mt-20">
      <SectionLabel className="mb-6">{t('templates.detail.gallery')}</SectionLabel>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 xl:gap-8">
        {images.map((src, i) => (
          <motion.button
            key={src}
            aria-label={isRtl ? 'فتح الصورة' : 'Open image'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: (i % 3) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative block w-full overflow-hidden rounded-none bg-surface-container-highest border border-white/10 group cursor-zoom-in shadow-sm hover:shadow-md transition-shadow text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={() => setSelectedIndex(i)}
          >
            <div className="aspect-square md:aspect-[4/5] w-full relative overflow-hidden">
              <img
                src={src}
                alt={`${templateName} — preview ${i + 1}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full h-full object-cover object-top block select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay background on hover for desktop */}
              <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/15 transition-colors duration-300 pointer-events-none" />
              
              {/* Indicator: Always visible on mobile, hover on desktop */}
              <div className={`absolute bottom-3 ${isRtl ? 'left-3' : 'right-3'} md:bottom-4 md:${isRtl ? 'left-4' : 'right-4'} bg-black/85 backdrop-blur-sm text-white text-[11px] md:text-xs font-medium px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-md rounded-sm`}>
                <Maximize2 size={14} className="opacity-90" />
                <span className="tracking-wide">{isRtl ? 'فتح' : 'Open'}</span>
              </div>
            </div>
            
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-none pointer-events-none z-10" />
            <div className="absolute inset-0 z-20" onContextMenu={e => e.preventDefault()} />
          </motion.button>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
            onContextMenu={e => e.preventDefault()}
          >
            {/* Close */}
            <button
              aria-label="Close"
              className="absolute top-6 right-6 md:top-8 md:right-8 z-[110] text-on-surface-variant hover:text-primary transition-all bg-surface border border-outline/20 shadow-lg p-3 rounded-full hover:bg-surface-variant"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            >
              <X size={24} />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                aria-label="Previous"
                className={`absolute top-1/2 -translate-y-1/2 z-[110] text-on-surface-variant hover:text-primary transition-all bg-surface border border-outline/20 shadow-lg p-3 md:p-4 rounded-full hover:bg-surface-variant ${isRtl ? 'right-4 md:right-8' : 'left-4 md:left-8'}`}
                onClick={(e) => {
                  e.stopPropagation()
                  if (isRtl) handleNext(); else handlePrevious()
                }}
              >
                {isRtl ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                aria-label="Next"
                className={`absolute top-1/2 -translate-y-1/2 z-[110] text-on-surface-variant hover:text-primary transition-all bg-surface border border-outline/20 shadow-lg p-3 md:p-4 rounded-full hover:bg-surface-variant ${isRtl ? 'left-4 md:left-8' : 'right-4 md:right-8'}`}
                onClick={(e) => {
                  e.stopPropagation()
                  if (isRtl) handlePrevious(); else handleNext()
                }}
              >
                {isRtl ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
              </button>
            )}

            {/* Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-7xl max-h-screen p-4 md:p-12 flex items-center justify-center outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex]}
                alt={`${templateName} — fullscreen`}
                draggable={false}
                className="max-w-full max-h-[85vh] object-contain select-none pointer-events-none rounded-none shadow-2xl ring-1 ring-white/10"
              />
              <div className="absolute inset-0 z-10" onContextMenu={e => e.preventDefault()} />
            </motion.div>
            
            {/* Image Count Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] text-on-surface font-mono-label text-xs tracking-widest bg-surface border border-outline/20 px-4 py-2 rounded-full shadow-lg">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
