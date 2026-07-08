import { useState, useDeferredValue, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { searchTemplates } from '../../lib/templates'
import { TemplateHero } from './TemplateHero'
import { TemplateSearchBar } from './TemplateSearchBar'
import { TemplateGrid } from './TemplateGrid'
import { TemplateSortDropdown, type SortOption } from './TemplateSortDropdown'

/**
 * /templates — main template listing page.
 * Handles search state and renders the hero, search bar, and grid.
 */
export function TemplatesPage() {
  const { t, i18n } = useTranslation()
  const [rawQuery, setRawQuery] = useState('')
  const [sortOption, setSortOption] = useState<SortOption>('oldest')

  // useDeferredValue keeps the grid responsive while typing
  const query = useDeferredValue(rawQuery)

  const filtered = searchTemplates(query)

  const sortedTemplates = useMemo(() => {
    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'price-asc': {
          const priceA = parseFloat(a.price.replace(/[^\d.-]/g, '')) || 0
          const priceB = parseFloat(b.price.replace(/[^\d.-]/g, '')) || 0
          return priceA - priceB
        }
        case 'price-desc': {
          const priceA = parseFloat(a.price.replace(/[^\d.-]/g, '')) || 0
          const priceB = parseFloat(b.price.replace(/[^\d.-]/g, '')) || 0
          return priceB - priceA
        }
        case 'name-asc': {
          const nameA = i18n.language === 'ar' && a.nameAr ? a.nameAr : a.name
          const nameB = i18n.language === 'ar' && b.nameAr ? b.nameAr : b.name
          return nameA.localeCompare(nameB, i18n.language)
        }
        case 'name-desc': {
          const nameA = i18n.language === 'ar' && a.nameAr ? a.nameAr : a.name
          const nameB = i18n.language === 'ar' && b.nameAr ? b.nameAr : b.name
          return nameB.localeCompare(nameA, i18n.language)
        }
        default:
          return 0
      }
    })
  }, [filtered, sortOption, i18n.language])

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

            {/* Controls */}
            <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
              <div className="w-full flex-1">
                <TemplateSearchBar value={rawQuery} onChange={setRawQuery} />
              </div>
              <TemplateSortDropdown value={sortOption} onChange={setSortOption} />
            </div>

            {/* Template Grid */}
            <TemplateGrid
              templates={sortedTemplates}
              searchQuery={query}
              onClearSearch={() => setRawQuery('')}
            />
          </div>
        </section>
      </div>
    </>
  )
}
