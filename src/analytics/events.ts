/* ══════════════════════════════════════════════════════════════
   Analytics — Custom Event Helpers
   
   Reusable functions for tracking user interactions. Each event
   is sent to GA4 (via gtag) and Meta Pixel (via fbq) where
   applicable. All functions are error-safe and SSR-compatible.
   
   Usage:
     import { trackWhatsAppClick } from '@/analytics/events'
     <button onClick={trackWhatsAppClick}>WhatsApp</button>
   ══════════════════════════════════════════════════════════════ */

// ─── Internal Helpers ───────────────────────────────────────

/**
 * Sends a custom event to GA4.
 */
function sendGA4Event(eventName: string, params?: Record<string, unknown>): void {
  if (import.meta.env.DEV) {
    console.log('custom events', eventName, params)
  }
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params)
    }
  } catch {
    // Silently fail
  }
}

/**
 * Sends a custom event to Meta Pixel.
 */
function sendMetaPixelEvent(eventName: string, params?: Record<string, unknown>): void {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, params)
    }
  } catch {
    // Silently fail
  }
}

/**
 * Sends an event to both GA4 and Meta Pixel.
 */
function sendEvent(eventName: string, params?: Record<string, unknown>): void {
  sendGA4Event(eventName, params)
  sendMetaPixelEvent(eventName, params)
}

// ─── Social Link Clicks ────────────────────────────────────

export function trackWhatsAppClick(): void {
  sendEvent('whatsapp_click', { link_type: 'social' })
}

export function trackEmailClick(): void {
  sendEvent('email_click', { link_type: 'social' })
}

export function trackGitHubClick(): void {
  sendEvent('github_click', { link_type: 'social' })
}

export function trackLinkedInClick(): void {
  sendEvent('linkedin_click', { link_type: 'social' })
}

export function trackFacebookClick(): void {
  sendEvent('facebook_click', { link_type: 'social' })
}

// ─── Project Events ─────────────────────────────────────────

export function trackLiveDemoClick(projectName?: string): void {
  sendEvent('live_demo_click', { project_name: projectName })
}

export function trackGitHubRepoClick(projectName?: string): void {
  sendEvent('github_repo_click', { project_name: projectName })
}

export function trackProjectOpen(projectName: string): void {
  sendEvent('project_open', { project_name: projectName })
}

// ─── Template Events ────────────────────────────────────────

export function trackTemplatePreview(templateName: string): void {
  sendEvent('template_preview', { template_name: templateName })
}

export function trackTemplateOpen(templateName: string): void {
  sendEvent('template_open', { template_name: templateName })
}

// ─── Contact ────────────────────────────────────────────────

export function trackContactFormSubmit(): void {
  sendEvent('contact_form_submit')
  // Also send as a standard Meta Pixel "Lead" event
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead')
    }
  } catch {
    // Silently fail
  }
}

// ─── Outbound Links ─────────────────────────────────────────

export function trackOutboundLink(url: string): void {
  sendGA4Event('outbound_link_click', {
    link_url: url,
    outbound: true,
  })
}

// ─── Scroll Depth ───────────────────────────────────────────

export function trackScrollDepth(percentage: number): void {
  sendGA4Event('scroll_depth', {
    depth_percentage: percentage,
    depth_threshold: `${percentage}%`,
  })
}

// ─── Session / Engagement Time ──────────────────────────────

export function trackSessionTime(seconds: number): void {
  sendGA4Event('session_engagement', {
    engagement_time_seconds: seconds,
    engagement_milestone: `${seconds}s`,
  })
}
