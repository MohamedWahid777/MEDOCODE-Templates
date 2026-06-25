import { useTranslation } from 'react-i18next'
import { type Template } from '../../lib/templates'
import { TemplateCard } from './TemplateCard'
import { EmptyState } from '../ui/EmptyState'

interface TemplateGridProps {
  templates: Template[]
  searchQuery: string
  onClearSearch: () => void
}

/**
 * Renders templates in a premium 2-column grid (Framer/Vercel-inspired).
 * On mobile: single column. On sm+: 2 columns.
 */
export function TemplateGrid({ templates, searchQuery, onClearSearch }: TemplateGridProps) {
  const { t } = useTranslation()

  if (templates.length === 0) {
    return <EmptyState query={searchQuery} onClear={onClearSearch} />
  }

  return (
    <div className="w-full">
      {/* Count label */}
      <p className="font-mono-label text-[11px] text-on-surface-variant tracking-widest mb-8">
        {t('templates.templateCount', { count: templates.length })}
      </p>

      {/* 2-column grid — large premium cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {templates.map((template, index) => (
          <TemplateCard key={template.id} template={template} index={index} />
        ))}
      </div>
    </div>
  )
}
