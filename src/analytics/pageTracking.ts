/* ══════════════════════════════════════════════════════════════
   Analytics — Page Tracking
   
   Sends page_view events to GA4 and PageView events to Meta
   Pixel on every client-side route change.
   ══════════════════════════════════════════════════════════════ */

/**
 * Tracks a page view across all analytics platforms.
 *
 * @param path  - The pathname being viewed (e.g. "/templates")
 * @param title - The document title at the time of navigation
 */
export function trackPageView(path: string, title?: string): void {
  if (import.meta.env.DEV) {
    console.log('page views', { path, title: title || document.title })
  }
  try {
    // ── GA4 ──
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title || document.title,
      })
    }

    // ── Meta Pixel ──
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  } catch {
    // Silently fail — never crash the app for analytics
  }
}
