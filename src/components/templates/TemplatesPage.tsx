import { useState, useDeferredValue } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { searchTemplates } from '../../lib/templates'
import { TemplateHero } from './TemplateHero'
import { TemplateSearchBar } from './TemplateSearchBar'
import { TemplateGrid } from './TemplateGrid'

/**
 * /templates — main template listing page.
 * Handles search state and renders the hero, search bar, and grid.
 */
export function TemplatesPage() {
  const { t, i18n } = useTranslation()
  const [rawQuery, setRawQuery] = useState('')

  // useDeferredValue keeps the grid responsive while typing
  const query = useDeferredValue(rawQuery)

  const filtered = searchTemplates(query)

  const metaTitle = t('templates.metaTitle')
  const metaDesc = t('templates.metaDescription')

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        {i18n.language === 'ar' && <html lang="ar" dir="rtl" />}
      </Helmet>

      <div
        className="min-h-screen bg-background text-on-background"
        style={{ isolation: 'isolate' }}
      >
        {/* Page Hero */}
        <TemplateHero />

        {/* Content Area */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

            {/* Search Bar */}
            <div className="mb-12 md:mb-16">
              <TemplateSearchBar value={rawQuery} onChange={setRawQuery} />
            </div>

            {/* Template Grid */}
            <TemplateGrid
              templates={filtered}
              searchQuery={query}
              onClearSearch={() => setRawQuery('')}
            />
          </div>
        </section>
      </div>
    </>
  )
}
