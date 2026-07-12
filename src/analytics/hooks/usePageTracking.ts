/* ══════════════════════════════════════════════════════════════
   Hook — usePageTracking
   
   Automatically tracks page views on every React Router
   route change. Sends events to GA4 and Meta Pixel without
   requiring a full page refresh.
   ══════════════════════════════════════════════════════════════ */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../pageTracking'

/**
 * Call once in the root component (inside BrowserRouter context).
 * Tracks every route change as a page_view automatically.
 */
export function usePageTracking(): void {
  const location = useLocation()

  useEffect(() => {
    // Small delay to let the new route's <Helmet> update document.title
    const timeoutId = setTimeout(() => {
      trackPageView(location.pathname, document.title)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [location.pathname])
}
