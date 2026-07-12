/* ══════════════════════════════════════════════════════════════
   Analytics — Core Initialization
   
   Single entry point to initialize GA4, Meta Pixel, and
   Microsoft Clarity. Each initializer is idempotent (safe to
   call multiple times) and guarded against SSR / ad-blockers.
   ══════════════════════════════════════════════════════════════ */

// ─── Configuration ──────────────────────────────────────────
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_ID || ''
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || ''
const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_ID || ''

// ─── Idempotency flags ─────────────────────────────────────
let ga4Initialized = false
let metaPixelInitialized = false
let clarityInitialized = false

// ─── Type augmentation for window globals ───────────────────
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    fbq: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue: unknown[]; loaded: boolean; version: string; push: (...args: unknown[]) => void }
    _fbq: Window['fbq']
    clarity: (...args: unknown[]) => void
  }
}

/**
 * Safely check if we're running in a browser environment.
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

// ─── Google Analytics 4 ─────────────────────────────────────

/**
 * Initializes GA4 by injecting the gtag.js script and configuring
 * the measurement ID. No-op if already initialized or not in browser.
 */
export function initGA4(): void {
  if (!isBrowser() || ga4Initialized) return

  if (!GA4_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      console.warn('Missing GA4 ID')
    }
    return
  }

  try {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // Must push the arguments object itself so GA4 recognizes it
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }

    // Inject script asynchronously
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
    script.async = true
    
    script.onload = () => {
      window.gtag('js', new Date())
      window.gtag('config', GA4_MEASUREMENT_ID, {
        send_page_view: false, // We handle page views manually via React Router
      })
      
      ga4Initialized = true
      if (import.meta.env.DEV) {
        console.log('GA initialized')
      }
    }
    
    document.head.appendChild(script)
  } catch {
    // Silently fail — analytics should never crash the app
  }
}

// ─── Meta Pixel ─────────────────────────────────────────────

/**
 * Initializes Meta (Facebook) Pixel by injecting fbevents.js
 * and calling fbq('init'). No-op if already initialized.
 */
export function initMetaPixel(): void {
  if (!isBrowser() || metaPixelInitialized) return

  if (!META_PIXEL_ID) {
    if (import.meta.env.DEV) {
      console.warn('Missing Meta Pixel ID')
    }
    return
  }

  try {
    // Standard Meta Pixel initialization snippet
    const f = window
    const n: Window['fbq'] = (f.fbq as Window['fbq']) || function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod(...args)
      } else {
        n.queue.push(args)
      }
    }

    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = n.queue || []
    f.fbq = n

    // Inject script asynchronously
    const script = document.createElement('script')
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    script.async = true
    document.head.appendChild(script)

    // Initialize with Pixel ID
    window.fbq('init', META_PIXEL_ID)

    metaPixelInitialized = true
    if (import.meta.env.DEV) {
      console.log('Pixel initialized')
    }
  } catch {
    // Silently fail
  }
}

// ─── Microsoft Clarity ──────────────────────────────────────

/**
 * Initializes Microsoft Clarity by injecting the Clarity
 * tracking script. No-op if already initialized.
 */
export function initClarity(): void {
  if (!isBrowser() || clarityInitialized) return

  if (!CLARITY_PROJECT_ID) {
    if (import.meta.env.DEV) {
      console.warn('Missing Clarity ID')
    }
    return
  }

  try {
    // Standard Clarity initialization snippet
    window.clarity = window.clarity || function (...args: unknown[]) {
      (window.clarity as unknown as { q: unknown[] }).q = (window.clarity as unknown as { q: unknown[] }).q || []
      ;(window.clarity as unknown as { q: unknown[] }).q.push(args)
    }

    const script = document.createElement('script')
    script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`
    script.async = true
    document.head.appendChild(script)

    clarityInitialized = true
    if (import.meta.env.DEV) {
      console.log('Clarity initialized')
    }
  } catch {
    // Silently fail
  }
}

// ─── Master Initializer ─────────────────────────────────────

/**
 * Initializes all analytics services. Call once from the
 * root App component's useEffect. Safe to call multiple times.
 */
export function initAllAnalytics(): void {
  initGA4()
  initMetaPixel()
  initClarity()
}

// ─── Exported IDs (for use in other modules) ────────────────
export { GA4_MEASUREMENT_ID, META_PIXEL_ID }
