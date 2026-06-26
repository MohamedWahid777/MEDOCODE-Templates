import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Defer Lenis + GSAP ticker setup to after first paint to keep TBT low.
    const rafId = requestAnimationFrame(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })

      lenis.on('scroll', ScrollTrigger.update)

      ;(window as any).lenis = lenis

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)

      ;(window as any).__lenisCleanup = () => {
        lenis.destroy()
        gsap.ticker.remove(lenis.raf)
      }
    })

    return () => {
      cancelAnimationFrame(rafId)
      if ((window as any).__lenisCleanup) {
        ;(window as any).__lenisCleanup()
        delete (window as any).__lenisCleanup
      }
    }
  }, [])

  return <>{children}</>
}
