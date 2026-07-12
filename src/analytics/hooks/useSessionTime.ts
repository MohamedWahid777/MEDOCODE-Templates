/* ══════════════════════════════════════════════════════════════
   Hook — useSessionTime
   
   Tracks engagement time milestones (30s, 60s, 120s, 300s)
   during the current session. Each milestone fires once per
   session using sessionStorage to prevent duplicates.
   ══════════════════════════════════════════════════════════════ */

import { useEffect, useRef } from 'react'
import { trackSessionTime } from '../events'

const STORAGE_KEY = 'analytics_session_time_milestones'
const MILESTONES = [30, 60, 120, 300] // seconds

/**
 * Call once in the root component. Starts an interval timer
 * and fires GA4 events at each time milestone.
 */
export function useSessionTime(): void {
  const elapsedRef = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Retrieve already-fired milestones from this session
    function getFired(): Set<number> {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY)
        return stored ? new Set(JSON.parse(stored) as number[]) : new Set()
      } catch {
        return new Set()
      }
    }

    function saveFired(milestones: Set<number>): void {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...milestones]))
      } catch {
        // sessionStorage may be unavailable
      }
    }

    const fired = getFired()

    // All milestones already fired — nothing to do
    if (fired.size >= MILESTONES.length) return

    const intervalId = setInterval(() => {
      elapsedRef.current += 1

      for (const milestone of MILESTONES) {
        if (!fired.has(milestone) && elapsedRef.current >= milestone) {
          fired.add(milestone)
          trackSessionTime(milestone)
          saveFired(fired)
        }
      }

      // Cleanup if all milestones reached
      if (fired.size >= MILESTONES.length) {
        clearInterval(intervalId)
      }
    }, 1000) // Check every second

    return () => {
      clearInterval(intervalId)
    }
  }, [])
}
