/* ══════════════════════════════════════════════════════════════
   Hook — useOutboundLinks
   
   Automatically detects clicks on external links and tracks
   them as outbound_link_click events in GA4. Uses event
   delegation on the document for efficiency.
   ══════════════════════════════════════════════════════════════ */

import { useEffect } from 'react'
import { trackOutboundLink } from '../events'

/**
 * Call once in the root component. Listens for clicks on
 * anchor elements pointing to external domains and fires
 * GA4 outbound link events automatically.
 */
export function useOutboundLinks(): void {
  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleClick(e: MouseEvent): void {
      // Walk up the DOM to find the nearest <a> element
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      try {
        const url = new URL(href, window.location.origin)

        // Only track external links (different hostname)
        if (url.hostname && url.hostname !== window.location.hostname) {
          trackOutboundLink(href)
        }
      } catch {
        // Invalid URL — skip tracking
      }
    }

    document.addEventListener('click', handleClick, { passive: true })

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
}
