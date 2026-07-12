/* ══════════════════════════════════════════════════════════════
   Analytics — Barrel Export
   
   Re-exports everything from the analytics module for clean
   imports throughout the app.
   
   Usage:
     import { initAllAnalytics, trackWhatsAppClick } from '@/analytics'
   ══════════════════════════════════════════════════════════════ */

export { initAllAnalytics, initGA4, initMetaPixel, initClarity } from './analytics'
export { trackPageView } from './pageTracking'
export {
  trackWhatsAppClick,
  trackEmailClick,
  trackGitHubClick,
  trackLinkedInClick,
  trackFacebookClick,
  trackPhoneClick,
  trackLiveDemoClick,
  trackGitHubRepoClick,
  trackProjectOpen,
  trackTemplatePreview,
  trackTemplateOpen,
  trackContactFormSubmit,
  trackCVDownload,
  trackOutboundLink,
  trackScrollDepth,
  trackSessionTime,
} from './events'
export { usePageTracking } from './hooks/usePageTracking'
export { useScrollDepth } from './hooks/useScrollDepth'
export { useSessionTime } from './hooks/useSessionTime'
export { useOutboundLinks } from './hooks/useOutboundLinks'
