import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/about',      label: 'About' },
  { to: '/products',   label: 'Products' },
  { to: '/technology', label: 'Technology' },
  { to: '/software',   label: 'Software' },
  { to: '/contact',    label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <style>{`
        #cal-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9000;
          height: 48px; display: flex; align-items: center;
          transition: background 0.4s, border-color 0.4s;
          border-bottom: 1px solid transparent;
        }
        #cal-nav.solid {
          background: rgba(0,0,0,0.82);
          backdrop-filter: saturate(180%) blur(24px);
          -webkit-backdrop-filter: saturate(180%) blur(24px);
          border-color: rgba(255,255,255,0.08);
        }
        .n-inner {
          max-width: 1080px; margin: 0 auto; padding: 0 24px;
          width: 100%; display: flex; align-items: center; justify-content: space-between;
        }
        .n-logo {
          font-size: 15px; font-weight: 600; letter-spacing: -0.3px; color: #f5f5f7;
          display: flex; align-items: center; gap: 10px;
        }
        .n-logo-mark {
          width: 28px; height: 28px; border-radius: 6px;
          background: linear-gradient(135deg,#0071e3,#7b2ff7);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800; color: #fff; letter-spacing: -0.5px;
        }
        .n-links { display: flex; align-items: center; gap: 24px; }
        .n-links a {
          font-size: 13px; color: rgba(245,245,247,0.72);
          transition: color 0.2s; white-space: nowrap;
        }
        .n-links a:hover { color: #f5f5f7; }
        .n-cta {
          font-size: 13px; padding: 6px 16px; border-radius: 980px;
          background: #0071e3; color: #fff !important;
          opacity: 1 !important; transition: background 0.2s !important;
        }
        .n-cta:hover { background: #0077ed !important; }
        .n-ham { display: none; flex-direction: column; gap: 5px; padding: 4px; color: #f5f5f7; }
        .n-ham span { display: block; width: 18px; height: 1.5px; background: currentColor; transition: all 0.3s; border-radius: 1px; }
        .n-mobile {
          display: none; position: fixed; inset: 0; top: 48px; z-index: 8999;
          background: rgba(0,0,0,0.94);
          backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);
          flex-direction: column; align-items: center; justify-content: center; gap: 40px;
        }
        .n-mobile.open { display: flex; }
        .n-mobile a { font-size: 28px; font-weight: 300; color: #f5f5f7; }
        .n-mobile .n-cta { font-size: 17px; padding: 12px 32px; }
        @media(max-width:700px){ .n-links { display:none; } .n-ham { display:flex; } }
      `}</style>

      <nav id="cal-nav" className={scrolled ? 'solid' : ''}>
        <div className="n-inner">
          <Link to="/" className="n-logo">
            <div className="n-logo-mark">CAL</div>
            Canadian Audio Labs
          </Link>
          <div className="n-links">
            {LINKS.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            <Link to="/contact" className="n-cta">Get in touch</Link>
          </div>
          <button className="n-ham" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span style={{ transform: open ? 'rotate(45deg) translate(4px,4px)' : '' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'rotate(-45deg) translate(4px,-4px)' : '' }} />
          </button>
        </div>
      </nav>

      <div className={`n-mobile${open ? ' open' : ''}`}>
        {LINKS.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        <Link to="/contact" className="n-cta">Get in touch</Link>
      </div>
    </>
  )
}
