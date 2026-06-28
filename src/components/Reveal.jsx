import { useEffect, useRef } from 'react'

export default function Reveal({ children, delay = 0, scale = false, threshold = 0.1 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const cls = scale ? 'rv-scale' : 'rv'
    el.classList.add(cls)
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in'); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [scale, threshold])
  return (
    <div ref={ref} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}
