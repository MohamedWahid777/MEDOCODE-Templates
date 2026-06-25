import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react'
import { getTemplateBySlug } from '../../lib/templates'
import { SectionLabel } from '../ui/SectionLabel'
import { TemplateGallery } from './TemplateGallery'
import { TemplateFeatureList } from './TemplateFeatureList'
import { TemplateDeliverables } from './TemplateDeliverables'
import { TemplateCTA } from './TemplateCTA'

export function TemplateDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === 'ar'

  const template = getTemplateBySlug(slug ?? '')

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  // If not found, show a simple 404-like state
  if (!template) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-display text-primary">Template Not Found</h1>
        <Link to="/templates" className="text-on-surface-variant hover:text-primary underline">
          {t('templates.detail.backToTemplates')}
        </Link>
      </div>
    )
  }

  // Get localized content based on current language
  const name = isRtl && template.nameAr ? template.nameAr : template.name
  const tagline = isRtl && template.taglineAr ? template.taglineAr : template.tagline
  const description = isRtl && template.descriptionAr ? template.descriptionAr : template.description
  const metaDescription = isRtl && template.metaDescriptionAr ? template.metaDescriptionAr : template.metaDescription
  const features = isRtl && template.featuresAr ? template.featuresAr : template.features

  return (
    <>
      <Helmet>
        <title>{template.metaTitle || `${name} — MEDOCODE`}</title>
        <meta name="description" content={metaDescription || tagline} />
        <meta property="og:title" content={template.metaTitle || name} />
        <meta property="og:description" content={metaDescription || tagline} />
        <meta property="og:image" content={template.coverImage} />
        <meta property="og:type" content="product" />
        {isRtl && <html lang="ar" dir="rtl" />}
      </Helmet>

      <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          
          {/* Back button */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <button
              onClick={() => navigate('/templates')}
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-mono-label text-[11px] tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={14} className={isRtl ? 'rotate-180' : ''} />
              {t('templates.detail.backToTemplates')}
            </button>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {template.category && (
                <span className="font-mono-label text-[10px] px-3 py-1 rounded-full border border-white/10 bg-surface-variant/30 text-on-surface-variant">
                  {template.category}
                </span>
              )}
              {template.status && (
                <span className="font-mono-label text-[10px] px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
                  {t(`templates.detail.status.${template.status}`)}
                </span>
              )}
            </div>

            <h1 className="font-display font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight text-primary mb-6">
              {name}
            </h1>
            
            <p className="font-sans text-[16px] sm:text-[18px] text-on-surface-variant leading-relaxed max-w-2xl">
              {description}
            </p>
            
            {template.liveDemo && (
              <div className="mt-8">
                <a
                  href={template.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-transparent text-primary hover:bg-white/5 hover:border-white/40 transition-all duration-300 font-mono-label text-xs tracking-widest hover-effect"
                >
                  <ExternalLink size={16} />
                  {t('templates.detail.liveDemo')}
                </a>
              </div>
            )}
          </motion.header>

          <hr className="border-white/10 my-12" />

          {/* Main Layout: Details + CTA Sidebar (On large screens) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            
            {/* Left Column: Content */}
            <div>
              {/* Technologies */}
              {template.technologies && template.technologies.length > 0 && (
                <section className="mb-12">
                  <SectionLabel className="mb-5">{t('templates.detail.technologies')}</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {template.technologies.map(tech => (
                      <div key={tech} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-surface-variant/20">
                        <Code2 size={14} className="text-primary/60" />
                        <span className="font-sans text-sm text-primary">{tech}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Features List */}
              <TemplateFeatureList features={features} />

              {/* Deliverables Checklist */}
              <TemplateDeliverables />

              {/* Gallery */}
              <TemplateGallery images={template.galleryImages} templateName={name} />
            </div>

            {/* Right Column: CTA / Purchasing */}
            <div className="lg:mt-0 mt-8">
              <div className="sticky top-32">
                <TemplateCTA template={template} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
