import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const IMG = {
  cane:    'https://static.wixstatic.com/media/d5fbc8_92ef7163e57341e2ba723be405ff379e~mv2.png',
  airamp:  'https://static.wixstatic.com/media/d5fbc8_acd8eb717ffa4ce8858204c9728eadcb~mv2.png',
  bonsai:  'https://static.wixstatic.com/media/d5fbc8_e0de81d6e9cd43568b1a6c6d29e00d8e~mv2.png',
  nano:    'https://static.wixstatic.com/media/d5fbc8_81e215a01c564585903da3b90825475c~mv2.png',
}

const GH = ({ children }) => (
  <span style={{ background:'linear-gradient(135deg,#f5f5f7 0%,#2997ff 55%,#7b2ff7 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
    {children}
  </span>
)

const css = `
.ab-hero { padding:140px 0 100px; background:#000; text-align:center; position:relative; overflow:hidden; }
.ab-hero-glow { position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(0,113,227,.18),transparent),radial-gradient(ellipse 40% 35% at 15% 30%,rgba(123,47,247,.09),transparent);pointer-events:none; }
.ab-hero-inner { position:relative;z-index:2;max-width:820px;margin:0 auto;padding:0 24px; }
.ab-hero h1 { font-size:clamp(48px,7vw,88px);font-weight:700;letter-spacing:-3px;line-height:1.02;color:#f5f5f7;margin-bottom:20px; }
.ab-hero p { font-size:21px;font-weight:300;color:#636366;line-height:1.52;max-width:580px;margin:0 auto; }

.stat-row { background:#0a0a0a; border-top:1px solid rgba(255,255,255,.06); border-bottom:1px solid rgba(255,255,255,.06); padding:64px 0; }
.stat-row-inner { max-width:1080px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:repeat(4,1fr);gap:32px;text-align:center; }
.stat-item-num { font-size:52px;font-weight:700;letter-spacing:-2.5px;line-height:1;background:linear-gradient(135deg,#0071e3,#2997ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
.stat-item-lbl { font-size:14px;color:#48484a;margin-top:10px; }

.story-sect { padding:120px 0; background:#000; border-top:1px solid rgba(255,255,255,.06); }
.story-inner { max-width:1080px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:flex-start; }
.story-inner h2 { font-size:clamp(36px,5vw,60px);font-weight:700;letter-spacing:-2px;line-height:1.06;color:#f5f5f7;margin-bottom:28px; }
.story-inner p { font-size:17px;color:#636366;line-height:1.75;margin-bottom:20px; }
.story-img img { width:100%;border-radius:18px;filter:drop-shadow(0 40px 60px rgba(0,100,255,.12)); }

.ab-timeline { padding:110px 0; background:#0a0a0a; border-top:1px solid rgba(255,255,255,.06); }
.ab-timeline-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.ab-timeline-head { max-width:560px;margin-bottom:64px; }
.ab-timeline-head h2 { font-size:clamp(32px,4vw,52px);font-weight:700;letter-spacing:-1.8px;color:#f5f5f7;margin-bottom:14px;line-height:1.06; }
.ab-timeline-head p { font-size:17px;color:#636366; }
.tl-items { display:flex;flex-direction:column; }
.tl-item { display:grid;grid-template-columns:90px 1fr;gap:32px;padding:40px 0;border-bottom:1px solid rgba(255,255,255,.05); }
.tl-item:last-child{border-bottom:none}
.tl-year { font-size:13px;font-weight:600;color:#2997ff;padding-top:3px; }
.tl-item h3 { font-size:20px;font-weight:600;color:#f5f5f7;margin-bottom:8px; }
.tl-item p { font-size:15px;color:#636366;line-height:1.65; }

.xscace-sect { padding:120px 0; background:#000; border-top:1px solid rgba(255,255,255,.06); }
.xscace-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.xscace-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:64px; }
.xscace-card { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:20px;overflow:hidden;padding:32px; }
.xscace-card img { width:100%;max-height:200px;object-fit:contain;margin-bottom:24px;filter:drop-shadow(0 20px 30px rgba(0,80,200,.14)); }
.xscace-card h3 { font-size:22px;font-weight:600;color:#f5f5f7;margin-bottom:8px; }
.xscace-card p { font-size:14px;color:#48484a;line-height:1.65; }
.xscace-chips { display:flex;flex-wrap:wrap;gap:6px;margin-top:16px; }
.xscace-chip { padding:4px 10px;border-radius:980px;border:1px solid rgba(0,113,227,.25);font-size:11px;color:#2997ff;font-family:ui-monospace,monospace; }

.vals-sect { padding:110px 0; background:#0a0a0a; border-top:1px solid rgba(255,255,255,.06); }
.vals-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.vals-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:48px; }
.val-card { padding:36px;border-radius:20px;border:1px solid rgba(255,255,255,.07);background:#111; }
.val-card h3 { font-size:19px;font-weight:600;color:#f5f5f7;margin-bottom:10px; }
.val-card p { font-size:14px;color:#48484a;line-height:1.65; }

@media(max-width:760px){
  .stat-row-inner{grid-template-columns:repeat(2,1fr);}
  .story-inner,.xscace-grid,.vals-grid{grid-template-columns:1fr;}
  .tl-item{grid-template-columns:1fr;gap:8px;}
}
`

export default function About() {
  return (
    <>
      <style>{css}</style>

      <section className="ab-hero">
        <div className="ab-hero-glow" />
        <div className="ab-hero-inner">
          <p style={{ fontSize:17, color:'#48484a', marginBottom:16 }}>Canadian Audio Labs — Est. 2009</p>
          <h1>We make the<br /><GH>hardware possible.</GH></h1>
          <p>CAL is the engineering company behind XSCACE. Every driver, amplifier, and enclosure XSCACE ships was designed, simulated, and manufactured in Mississauga, Ontario.</p>
        </div>
      </section>

      <section className="stat-row">
        <div className="stat-row-inner">
          {[['15+','Years of transducer R&D'],['47','Granted patents'],['200k+','Drivers produced annually'],['6','Proprietary technologies']].map(([num, lbl]) => (
            <Reveal key={lbl}>
              <div>
                <div className="stat-item-num">{num}</div>
                <div className="stat-item-lbl">{lbl}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="history" className="story-sect">
        <div className="story-inner">
          <Reveal>
            <div>
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>Origin</p>
              <h2>Born from a gap in <GH>physics-first</GH> audio design.</h2>
              <p>Canadian Audio Labs was founded in 2009 by a team of electromechanical engineers who spent the prior decade designing transducers for the automotive OEM market. The transition to consumer audio began when the team recognised a consistent pattern: acoustic products were designed around enclosure constraints and price targets — not Thiele-Small parameters.</p>
              <p>The founding principle was inversion: define the frequency response, distortion budget, and SPL requirement first. Then engineer a motor and cone geometry to hit those numbers. Only then design the enclosure volume, port tuning, and crossover topology around the driver that results.</p>
              <p>The first production driver — a 60 mm full-range unit with an underhung motor and BL product of 5.1 T·m — shipped in Q2 2011 to a Canadian professional audio integrator. Every subsequent product line traces back to that same Thiele-Small-first methodology.</p>
            </div>
          </Reveal>
          <Reveal delay={150} scale>
            <div className="story-img"><img src={IMG.nano} alt="CAL transducer engineering" /></div>
          </Reveal>
        </div>
      </section>

      <section id="xscace" className="xscace-sect">
        <div className="xscace-inner">
          <Reveal>
            <div style={{ maxWidth:640 }}>
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>Consumer Brand</p>
              <h2 style={{ fontSize:'clamp(32px,4.5vw,58px)', fontWeight:700, letterSpacing:'-2px', lineHeight:1.06, color:'#f5f5f7', marginBottom:20 }}>
                XSCACE is <GH>CAL's consumer face.</GH>
              </h2>
              <p style={{ fontSize:17, color:'#636366', lineHeight:1.7 }}>Every XSCACE product is a systems integration exercise — CAL engineers design the driver, the amplifier board, the enclosure geometry, and the crossover network as a single physical system, not as separately-sourced components assembled at the product level.</p>
            </div>
          </Reveal>
          <div className="xscace-grid">
            {[
              { img: IMG.cane,   name:'Cane',    desc:'21 mm profile soundbar. Nano Resonance™ drivers, AeroFrame™ extrusion, PrecisionXover™ LR-24. 80 Hz – 20 kHz, 88 dB SPL.', chips:['21 mm profile','80Hz–20kHz','88 dB SPL'] },
              { img: IMG.airamp, name:'Air Amp', desc:'Class-D GaN 400kHz PWM amplifier. AKM AK4493EQ 32-bit/192kHz DAC. SHARC ADSP-21573 DSP. Damping factor >200. 0.003% THD+N.', chips:['GaN MOSFET','AKM AK4493EQ','0.003% THD+N'] },
              { img: IMG.bonsai, name:'Bonsai',  desc:"World's smallest hi-fi bookshelf. 25 mm full-range driver, Fs=68 Hz, ferrofluid VC cooling, transmission-line-loaded enclosure.", chips:['25 mm driver','Fs = 68 Hz','Ferrofluid VC'] },
            ].map(p => (
              <Reveal key={p.name}>
                <div className="xscace-card">
                  <img src={p.img} alt={p.name} />
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="xscace-chips">{p.chips.map(c => <span key={c} className="xscace-chip">{c}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="ab-timeline">
        <div className="ab-timeline-inner">
          <Reveal>
            <div className="ab-timeline-head">
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>Company History</p>
              <h2>Fifteen years of <GH>physics-first</GH> development.</h2>
              <p style={{ marginTop:14 }}>Each milestone is an engineering milestone — defined by a parameter target crossed or a manufacturing process mastered.</p>
            </div>
          </Reveal>
          <div className="tl-items">
            {[
              ['2009','CAL founded in Mississauga, Ontario','Six engineers from the automotive transducer supply chain form Canadian Audio Labs with a mandate to design speaker drivers from first principles using COMSOL FEM/BEM simulation.'],
              ['2011','First underhung motor driver ships','The ND-60FR enters production — a 60 mm full-range unit with a BL product of 5.1 T·m. Measurement correlation to BEM prediction: 0.4 dB RMS.'],
              ['2013','PowerDense™ motor technology patented','The dual-layer series winding topology and spiral-cut aluminium pole-piece geometry are filed as Canadian patent CA-2013-0204. BL product of 7.8 T·m in a 25 mm micro-driver format.'],
              ['2014','AeroFrame™ and VCEM™ patents filed','The 6061-T6 CNC-milled extrusion chassis system and the 96 kHz back-EMF sensing protection loop are filed simultaneously, entering production in 2015.'],
              ['2016','XSCACE consumer brand launched','The Cane soundbar — 21 mm profile, AeroFrame™ chassis — launches as the flagship XSCACE product. It wins the CES Innovation Award in January 2017.'],
              ['2021','Air Amp GaN amplifier platform introduced','CAL develops the first GaN MOSFET H-bridge Class-D amplifier for in-home audio: 400kHz PWM, 0.003% THD+N, SHARC DSP, AKM AK4493EQ DAC. Damping factor >200 into 8 Ω.'],
              ['2024','QuadCane 16-driver array in production','Measured system IMD SMPTE of −92 dB — a new internal record and a figure not previously published for an ultra-slim multi-driver format.'],
            ].map(([yr, title, body]) => (
              <Reveal key={yr + title}>
                <div className="tl-item">
                  <div className="tl-year">{yr}</div>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="vals-sect">
        <div className="vals-inner">
          <Reveal>
            <div style={{ maxWidth:600, marginBottom:0 }}>
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>How we work</p>
              <h2 style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:700, letterSpacing:'-1.8px', color:'#f5f5f7', marginBottom:14, lineHeight:1.06 }}>
                Engineering <GH>principles,</GH> not slogans.
              </h2>
              <p style={{ fontSize:17, color:'#636366', lineHeight:1.6, marginBottom:48 }}>Every design decision at CAL must be traceable to a physical parameter. If it cannot be measured, it does not ship.</p>
            </div>
          </Reveal>
          <div className="vals-grid">
            {[
              { title:'Simulation before fabrication', body:'FEM, BEM, and Thiele-Small simulation must converge within ±0.5 dB of the target response before a prototype is cut. First-article yield target: ≥90%.' },
              { title:'Measurement-defined specifications', body:'Every published specification references a standard: AES17 for amplifier THD+N, IEC 60268-5 for driver Xmax, ANSI/CTA-2010 for SPL. No self-defined metrics.' },
              { title:'Vertical manufacturing integration', body:'Driver cones, voice-coil formers, and crossover inductors are wound or formed in-house. External supply is limited to magnet systems and enclosure raw extrusion.' },
              { title:'System-level co-optimisation', body:"Drivers are simulated in the target enclosure geometry from the first FEM run. Crossover topology is selected after the driver's real-world impedance curve is measured in-chamber." },
              { title:'Statistical Process Control', body:'Production runs are monitored with ±3σ SPC charts on Fs, Re, Bl, and Cms. Batches that drift outside limits trigger an immediate stop and root-cause analysis.' },
              { title:'Full IP ownership', body:'CAL owns the motor topology, chassis geometry, crossover methodology, and amplifier architecture in every product we ship. We do not license core IP — we own it end-to-end.' },
            ].map(v => (
              <Reveal key={v.title}>
                <div className="val-card"><h3>{v.title}</h3><p>{v.body}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:'#000', padding:'120px 0', textAlign:'center', borderTop:'1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth:600, margin:'0 auto', padding:'0 24px' }}>
          <Reveal>
            <h2 style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:700, letterSpacing:'-1.8px', color:'#f5f5f7', marginBottom:16, lineHeight:1.06 }}>
              <GH>Interested in working</GH> with CAL?
            </h2>
            <p style={{ fontSize:19, color:'#636366', marginBottom:40, lineHeight:1.55 }}>We work with OEM partners, system integrators, and product companies who need vertically-manufactured acoustic systems.</p>
            <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
              <Link to="/contact" style={{ fontSize:17, padding:'14px 30px', borderRadius:980, background:'#0071e3', color:'#fff', fontWeight:400 }}>Get in touch</Link>
              <Link to="/technology" style={{ fontSize:17, padding:'14px 30px', borderRadius:980, background:'rgba(255,255,255,.08)', color:'#f5f5f7', fontWeight:400 }}>Our technology →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
