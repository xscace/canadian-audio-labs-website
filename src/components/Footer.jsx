import { Link } from 'react-router-dom'

const COLS = [
  { h: 'Company',    links: [['About CAL','/about'],['XSCACE Brand','/about#xscace'],['Our History','/about#history'],['Leadership','/about#team'],['Careers','/contact#careers']] },
  { h: 'Products',   links: [['Cane','/products#cane'],['QuadCane','/products#quadcane'],['Bonsai','/products#bonsai'],['Acacia Sub','/products#acacia'],['Air Amp','/products#airamp']] },
  { h: 'Technology', links: [['Nano Resonance™','/technology#nano'],['AeroFrame™','/technology#aero'],['PowerDense™','/technology#power'],['PrecisionXover™','/technology#xover'],['Benchmarks','/technology#specs']] },
  { h: 'Software',   links: [['Simulation Engine','/software'],['DSP & Room Correction','/software'],['AI Configurator','/software'],['Multiroom Control','/software'],['OEM Licensing','/software']] },
  { h: 'Support',    links: [['Contact Sales','/contact'],['Technical Support','/contact'],['Press & Media','/contact'],['Dealer Applications','/contact'],['Warranty','/contact']] },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <style>{`
        .ft-main { max-width: 1080px; margin: 0 auto; padding: 56px 24px 0; }
        .ft-top {
          display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 40px; padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ft-brand p { font-size: 13px; color: #636366; line-height: 1.6; margin-top: 14px; max-width: 260px; }
        .ft-brand-logo { display: flex; align-items: center; gap: 10px; }
        .ft-brand-mark {
          width: 32px; height: 32px; border-radius: 7px;
          background: linear-gradient(135deg,#0071e3,#7b2ff7);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; color: #fff;
        }
        .ft-brand-name { font-size: 14px; font-weight: 600; color: #f5f5f7; }
        .ft-xscace {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 18px; padding: 5px 12px;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 6px;
          font-size: 12px; color: #636366;
        }
        .ft-xscace strong { color: #2997ff; font-weight: 500; }
        .ft-col h6 { font-size: 12px; font-weight: 600; color: #f5f5f7; margin-bottom: 14px; letter-spacing: 0.01em; }
        .ft-col a { display: block; font-size: 12px; color: #636366; margin-bottom: 9px; transition: color 0.2s; }
        .ft-col a:hover { color: #98989d; }
        .ft-bottom {
          max-width: 1080px; margin: 0 auto; padding: 18px 24px 36px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 8px;
        }
        .ft-bottom span, .ft-bottom a { font-size: 12px; color: #48484a; }
        .ft-bottom a:hover { color: #636366; }
        .ft-legal { display: flex; gap: 20px; }
        @media(max-width:760px){ .ft-top{grid-template-columns:1fr 1fr;} }
        @media(max-width:480px){ .ft-top{grid-template-columns:1fr;} .ft-bottom{flex-direction:column;align-items:flex-start;} }
      `}</style>
      <div className="ft-main">
        <div className="ft-top">
          <div className="ft-brand">
            <div className="ft-brand-logo">
              <div className="ft-brand-mark">CAL</div>
              <span className="ft-brand-name">Canadian Audio Labs</span>
            </div>
            <p>The engineering company behind XSCACE. Designing and manufacturing speaker drivers, power amplifiers, and acoustic enclosures in Mississauga, Ontario since 2009.</p>
            <div className="ft-xscace">Consumer brand: <strong>XSCACE™</strong></div>
          </div>
          {COLS.map(c => (
            <div key={c.h} className="ft-col">
              <h6>{c.h}</h6>
              {c.links.map(([l, to]) => <Link key={l} to={to}>{l}</Link>)}
            </div>
          ))}
        </div>
      </div>
      <div className="ft-bottom">
        <span>Copyright © 2024 Canadian Audio Labs Inc. All rights reserved. ISO 9001:2015 Certified.</span>
        <div className="ft-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}
