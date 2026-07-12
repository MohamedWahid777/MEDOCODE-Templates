/* ══════════════════════════════════════════════════════════════
   Hook — useScrollDepth
   
   Tracks scroll depth milestones (25%, 50%, 75%, 100%) once
   per session. Uses sessionStorage to prevent duplicate
   events within the same browser session.
   ══════════════════════════════════════════════════════════════ */

import { useEffect } from 'react'
import { trackScrollDepth } from '../events'

const STORAGE_KEY = 'analytics_scroll_milestones'
const MILESTONES = [25, 50, 75, 100]

/**
 * Call once in the root component. Listens to scroll events
 * (throttled) and fires GA4 events at each milestone.
 */
export function useScrollDepth(): void {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Retrieve already-fired milestones from this session
    function getFiredMilestones(): Set<number> {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY)
        return stored ? new Set(JSON.parse(stored) as number[]) : new Set()
      } catch {
        return new Set()
      }
    }

    function saveFiredMilestones(milestones: Set<number>): void {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...milestones]))
      } catch {
        // sessionStorage may be unavailable in some environments
      }
    }

    const fired = getFiredMilestones()

    // All milestones already fired — nothing to do
    if (fired.size >= MILESTONES.length) return

    let ticking = false

    function handleScroll(): void {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        if (scrollHeight <= 0) {
          ticking = false
          return
        }

        const scrollPercent = (window.scrollY / scrollHeight) * 100

        for (const milestone of MILESTONES) {
          if (!fired.has(milestone) && scrollPercent >= milestone) {
            fired.add(milestone)
            trackScrollDepth(milestone)
          }
        }

        saveFiredMilestones(fired)

        // Cleanup if all milestones reached
        if (fired.size >= MILESTONES.length) {
          window.removeEventListener('scroll', handleScroll)
        }

        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
