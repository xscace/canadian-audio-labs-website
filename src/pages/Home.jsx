import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const IMG = {
  nano:   'https://static.wixstatic.com/media/d5fbc8_81e215a01c564585903da3b90825475c~mv2.png',
  aero:   'https://static.wixstatic.com/media/d5fbc8_84df6f885c034d87acf110989783689c~mv2.png',
  power:  'https://static.wixstatic.com/media/d5fbc8_d8a5847df52447cf89f9c2e4b3801546~mv2.png',
  xover:  'https://static.wixstatic.com/media/d5fbc8_620261a4ba3f4cc5a3eeb7dbb86b06ea~mv2.png',
  airamp: 'https://static.wixstatic.com/media/d5fbc8_acd8eb717ffa4ce8858204c9728eadcb~mv2.png',
  cane:   'https://static.wixstatic.com/media/d5fbc8_92ef7163e57341e2ba723be405ff379e~mv2.png',
  quad:   'https://static.wixstatic.com/media/d5fbc8_7033367dd6434ea9bd7c7c6aa720dd84~mv2.png',
}

const GH = ({ children }) => (
  <span style={{ background:'linear-gradient(135deg,#f5f5f7 0%,#2997ff 55%,#7b2ff7 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
    {children}
  </span>
)

/* ─── oscilloscope canvas ─── */
function Scope({ height = 220, color = '#2997ff' }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d'); let ph = 0, raf
    const draw = () => {
      c.width = c.offsetWidth * devicePixelRatio
      c.height = c.offsetHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      const W = c.offsetWidth, H = c.offsetHeight
      ctx.clearRect(0, 0, W, H)
      ctx.strokeStyle = 'rgba(255,255,255,.04)'; ctx.lineWidth = 1
      for (let x = 0; x <= W; x += W / 10) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke() }
      for (let y = 0; y <= H; y += H / 4)  { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke() }
      ctx.strokeStyle = color; ctx.lineWidth = 1.8
      ctx.shadowColor = color; ctx.shadowBlur = 8
      ctx.beginPath()
      for (let x = 0; x <= W; x++) {
        const t = (x / W) * Math.PI * 4 + ph
        const y = H / 2 + (Math.sin(t) * .38 + Math.sin(t * 2.1 + .7) * .16 + Math.sin(t * .6 - 1) * .1) * H * .35
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke(); ctx.shadowBlur = 0; ph += .015; raf = requestAnimationFrame(draw)
    }
    draw(); return () => cancelAnimationFrame(raf)
  }, [color])
  return <canvas ref={ref} style={{ display:'block', width:'100%', height }} />
}

/* ─── scrolling ticker ─── */
const TERMS = ['THD+N < 0.003%','Bl(x) linearity ±3%','Xmax ±7 mm','Fs optimisation','BL = 7.8 T·m','LR-24 crossover','SINAD 112 dBa','FEM/BEM simulation','GaN H-bridge 400kHz PWM','IIR shelving filter','COMSOL MULTIPHYSICS','Kapton former','Underhung motor','Thiele-Small parameters','AKM AK4493EQ 32-bit/192kHz','SHARC DSP','back-EMF sensing','SPC ±3σ','Bl product','damping factor >200','class-D GaN MOSFET','6061-T6 aluminium','ferrofluid VC cooling','PSRR > 80 dB','Qts optimisation']

function Ticker() {
  const items = [...TERMS, ...TERMS]
  return (
    <div style={{ overflow:'hidden', borderTop:'1px solid rgba(255,255,255,.06)', borderBottom:'1px solid rgba(255,255,255,.06)', background:'#0a0a0a', padding:'14px 0' }}>
      <div style={{ display:'flex', gap:48, animation:'ticker 40s linear infinite', whiteSpace:'nowrap' }}>
        {items.map((t, i) => (
          <span key={i} style={{ fontSize:12, fontWeight:500, color:'#48484a', fontFamily:'ui-monospace,monospace', flexShrink:0 }}>
            {t} <span style={{ color:'#2a2a2a', marginLeft:24 }}>·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  )
}

const css = `
/* hero */
.h-hero { min-height:100vh; display:flex; align-items:center; justify-content:center; background:#000; position:relative; overflow:hidden; text-align:center; }
.h-hero-glow { position:absolute;inset:0;background:radial-gradient(ellipse 80% 55% at 50% -5%,rgba(0,113,227,.22),transparent),radial-gradient(ellipse 50% 40% at 80% 30%,rgba(123,47,247,.10),transparent),radial-gradient(ellipse 40% 35% at 10% 60%,rgba(0,113,227,.07),transparent);pointer-events:none; }
.h-hero-inner { position:relative;z-index:2;max-width:900px;padding:120px 24px 80px; }
.h-tag { display:inline-block;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:5px 14px;border-radius:980px;background:rgba(0,113,227,.1);color:#2997ff;border:1px solid rgba(0,113,227,.25);margin-bottom:32px; }
.h-hero h1 { font-size:clamp(52px,8vw,100px);font-weight:700;letter-spacing:-4px;line-height:1;color:#f5f5f7;margin-bottom:24px; }
.h-hero p { font-size:clamp(17px,2.2vw,21px);font-weight:300;color:#636366;line-height:1.6;max-width:640px;margin:0 auto 48px; }
.h-ctas { display:flex;gap:14px;justify-content:center;flex-wrap:wrap; }
.h-cta-primary { font-size:17px;padding:14px 30px;border-radius:980px;background:#0071e3;color:#fff;font-weight:400; }
.h-cta-ghost { font-size:17px;padding:14px 30px;border-radius:980px;background:rgba(255,255,255,.08);color:#f5f5f7;border:1px solid rgba(255,255,255,.1); }

/* scope strip */
.h-scope { background:#000;padding:0 0 0;border-top:1px solid rgba(255,255,255,.06); }
.h-scope-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.h-scope-labels { display:flex;justify-content:space-between;padding:16px 0 8px;font-size:11px;font-weight:600;letter-spacing:.08em;color:#3a3a3c;text-transform:uppercase;font-family:ui-monospace,monospace; }

/* capability sections */
.cap-sect { padding:110px 0; border-top:1px solid rgba(255,255,255,.06); }
.cap-sect.black { background:#000; }
.cap-sect.dark  { background:#0a0a0a; }
.cap-inner { max-width:1080px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center; }
.cap-inner.rev .cap-vis { order:2; } .cap-inner.rev .cap-text { order:1; }
.cap-eyebrow { font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#48484a;margin-bottom:12px; }
.cap-title { font-size:clamp(38px,5vw,62px);font-weight:700;letter-spacing:-2.5px;line-height:1.04;color:#f5f5f7;margin-bottom:10px; }
.cap-sub { font-size:18px;color:#636366;line-height:1.45;margin-bottom:18px; }
.cap-body { font-size:15px;color:#48484a;line-height:1.78;margin-bottom:14px; }
.cap-pills { display:flex;flex-wrap:wrap;gap:8px;margin:22px 0; }
.cap-pill { padding:5px 13px;border-radius:980px;border:1px solid rgba(0,113,227,.25);font-size:11px;color:#2997ff;font-family:ui-monospace,monospace;background:rgba(0,113,227,.05); }
.cap-vis img { width:100%;max-width:460px;filter:drop-shadow(0 30px 60px rgba(0,100,255,.18)); }
.cap-vis { display:flex;align-items:center;justify-content:center; }

/* stats */
.h-stats { padding:80px 0;background:#000;border-top:1px solid rgba(255,255,255,.06); }
.h-stats-inner { max-width:1080px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:repeat(4,1fr);gap:32px;text-align:center; }
.h-stat-num { font-size:clamp(36px,5vw,58px);font-weight:700;letter-spacing:-2.5px;background:linear-gradient(135deg,#0071e3,#2997ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
.h-stat-lbl { font-size:13px;color:#48484a;margin-top:8px;line-height:1.5; }

/* process strip */
.h-proc { padding:110px 0;background:#0a0a0a;border-top:1px solid rgba(255,255,255,.06); }
.h-proc-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.h-proc-head { text-align:center;max-width:680px;margin:0 auto 64px; }
.h-proc-head h2 { font-size:clamp(32px,4.5vw,56px);font-weight:700;letter-spacing:-2px;color:#f5f5f7;margin-bottom:16px;line-height:1.06; }
.h-proc-head p { font-size:17px;color:#636366;line-height:1.6; }
.h-proc-steps { display:grid;grid-template-columns:repeat(4,1fr);gap:24px; }
.h-proc-step { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:18px;padding:28px; }
.h-proc-step-num { font-size:11px;font-weight:700;letter-spacing:.1em;color:#2997ff;font-family:ui-monospace,monospace;margin-bottom:14px; }
.h-proc-step h4 { font-size:16px;font-weight:600;color:#f5f5f7;margin-bottom:8px; }
.h-proc-step p { font-size:13px;color:#48484a;line-height:1.65; }

/* case study */
.h-cs { padding:110px 0;background:#000;border-top:1px solid rgba(255,255,255,.06); }
.h-cs-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.h-cs-head { max-width:600px;margin-bottom:56px; }
.h-cs-label { display:inline-block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:4px 12px;border-radius:980px;background:rgba(201,168,76,.08);color:#c9a84c;border:1px solid rgba(201,168,76,.2);margin-bottom:14px; }
.h-cs-head h2 { font-size:clamp(30px,4vw,50px);font-weight:700;letter-spacing:-1.8px;color:#f5f5f7;margin-bottom:12px;line-height:1.06; }
.h-cs-head p { font-size:17px;color:#636366;line-height:1.6; }
.h-cs-grid { display:grid;grid-template-columns:1fr 1fr;gap:20px; }
.h-cs-card { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:32px;display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center; }
.h-cs-card img { width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 10px 20px rgba(0,80,200,.15)); }
.h-cs-tag { font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#48484a;margin-bottom:8px; }
.h-cs-card h3 { font-size:20px;font-weight:600;color:#f5f5f7;margin-bottom:6px; }
.h-cs-card p { font-size:13px;color:#48484a;line-height:1.6; }
.h-cs-specs { display:flex;flex-direction:column;gap:6px;margin-top:14px; }
.h-cs-spec { display:flex;justify-content:space-between;font-size:12px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04); }
.h-cs-spec:last-child{border-bottom:none}
.h-cs-spec span:first-child{color:#48484a;}
.h-cs-spec span:last-child{color:#2997ff;font-family:ui-monospace,monospace;}

/* disciplines */
.h-disc { padding:110px 0;background:#0a0a0a;border-top:1px solid rgba(255,255,255,.06); }
.h-disc-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.h-disc-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px; }
.h-disc-card { padding:32px;border-radius:20px;border:1px solid rgba(255,255,255,.07);background:#111; }
.h-disc-card h3 { font-size:18px;font-weight:600;color:#f5f5f7;margin-bottom:10px; }
.h-disc-card p { font-size:14px;color:#48484a;line-height:1.7; }
.h-disc-pills { display:flex;flex-wrap:wrap;gap:6px;margin-top:16px; }
.h-disc-pill { padding:3px 10px;border-radius:980px;border:1px solid rgba(255,255,255,.08);font-size:11px;color:#48484a;font-family:ui-monospace,monospace; }

@media(max-width:760px){
  .cap-inner{grid-template-columns:1fr;gap:48px;}
  .cap-inner.rev .cap-vis,.cap-inner.rev .cap-text{order:0;}
  .h-stats-inner{grid-template-columns:repeat(2,1fr);}
  .h-proc-steps{grid-template-columns:1fr 1fr;}
  .h-cs-grid{grid-template-columns:1fr;}
  .h-disc-grid{grid-template-columns:1fr;}
  .h-cs-card{grid-template-columns:1fr;}
}
@media(max-width:480px){ .h-proc-steps{grid-template-columns:1fr;} }
`

export default function Home() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <section className="h-hero">
        <div className="h-hero-glow" />
        <div className="h-hero-inner">
          <Reveal>
            <span className="h-tag">Acoustic Engineering & Manufacturing</span>
            <h1>The science<br /><GH>behind the sound.</GH></h1>
            <p>Canadian Audio Labs designs and manufactures speaker drivers, power amplifiers, and acoustic enclosures from first principles — Thiele-Small simulation to production-floor SPC.</p>
            <div className="h-ctas">
              <Link to="/technology" className="h-cta-primary">Our technology</Link>
              <Link to="/contact" className="h-cta-ghost">Partner with CAL →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCOPE STRIP */}
      <div className="h-scope">
        <div className="h-scope-inner">
          <div className="h-scope-labels">
            <span>VCEM™ back-EMF trace</span>
            <span>96 kHz sampling · 1 ms window</span>
            <span>Xmax = ±7.0 mm</span>
          </div>
          <Scope height={160} color="#2997ff" />
        </div>
      </div>

      <Ticker />

      {/* CAPABILITY: Transducer Engineering */}
      <section className="cap-sect black">
        <div className="cap-inner">
          <Reveal>
            <div className="cap-text">
              <p className="cap-eyebrow">Transducer Engineering</p>
              <div className="cap-title"><GH>Motor topology</GH><br />from physics up.</div>
              <p className="cap-sub">Every CAL driver begins as a Thiele-Small target, not a cost constraint.</p>
              <p className="cap-body">CAL's transducer division designs electrodynamic drivers across the 15 mm – 200 mm cone diameter range. The design workflow starts in COMSOL Multiphysics for FEM structural analysis and BEM radiated-pressure computation. Motor geometry — pole-piece profile, gap geometry, winding topology — is co-optimised with the target Bl(x) linearity specification before a single physical part is machined.</p>
              <p className="cap-body">The underhung motor architecture used across CAL's micro-driver family keeps the voice-coil former fully within the magnetic gap at all drive levels, holding L(x) variation below 3% and eliminating the primary mechanism of inductance-driven harmonic distortion. Published Bl(x) linearity: ±3% across full one-way Xmax.</p>
              <div className="cap-pills">
                {['Underhung Motor','COMSOL FEM/BEM','Bl(x) ±3%','BL = 7.8 T·m','Thiele-Small','SPC production'].map(p => <span key={p} className="cap-pill">{p}</span>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} scale>
            <div className="cap-vis"><img src={IMG.nano} alt="CAL transducer engineering" /></div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY: Amplifier */}
      <section className="cap-sect dark">
        <div className="cap-inner rev">
          <Reveal delay={150} scale>
            <div className="cap-vis"><img src={IMG.airamp} alt="CAL Class-D amplifier platform" /></div>
          </Reveal>
          <Reveal>
            <div className="cap-text">
              <p className="cap-eyebrow">Amplifier Engineering</p>
              <div className="cap-title"><GH>Class-D GaN</GH><br />amplifier platforms.</div>
              <p className="cap-sub">400 kHz PWM. 0.003% THD+N. Damping factor &gt;200.</p>
              <p className="cap-body">CAL's amplifier division develops GaN MOSFET H-bridge Class-D output stages operating at 400 kHz switching frequency — a regime that pushes EMI harmonics well above the audio band and allows output filter inductors small enough for mobile and in-wall applications. The PSRR of the supply rail rejection network exceeds 80 dB at 1 kHz, enabling operation from unregulated switch-mode supplies without audible artefacts.</p>
              <p className="cap-body">Every amplifier platform integrates an AKM 32-bit/192 kHz DAC front-end, a SHARC ADSP-21573 DSP for 4th-order FIR/IIR crossover filtering, and the VCEM™ back-EMF sensing loop running at 96 kHz for real-time excursion protection — all on a single four-layer PCB.</p>
              <div className="cap-pills">
                {['GaN MOSFET H-bridge','400kHz PWM','AKM AK4493EQ','SHARC DSP','THD+N 0.003%','PSRR > 80 dB'].map(p => <span key={p} className="cap-pill">{p}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITY: Enclosure */}
      <section className="cap-sect black">
        <div className="cap-inner">
          <Reveal>
            <div className="cap-text">
              <p className="cap-eyebrow">Enclosure & Acoustic Systems</p>
              <div className="cap-title"><GH>Simulation-verified</GH><br />enclosure geometry.</div>
              <p className="cap-sub">BEM-computed radiated pressure. ±0.05 mm CNC baffle tolerance.</p>
              <p className="cap-body">CAL's enclosure engineering team works from BEM-computed radiated pressure maps exported from the same COMSOL simulation environment as the driver model. Port geometry, transmission-line lengths, and constrained-layer damping placement are all defined before a single extrusion is cut.</p>
              <p className="cap-body">The AeroFrame™ chassis system — die-extruded from 6061-T6 aerospace aluminium and finish-milled on a 5-axis CNC centre — holds baffle planarity to ±0.05 mm, preventing inter-driver time-of-arrival errors that would otherwise produce comb-filter artefacts above 5 kHz in multi-driver array configurations.</p>
              <div className="cap-pills">
                {['6061-T6 Al','±0.05 mm planarity','BEM-verified','CLD panels','TL loading','5-axis CNC'].map(p => <span key={p} className="cap-pill">{p}</span>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} scale>
            <div className="cap-vis"><img src={IMG.aero} alt="AeroFrame enclosure engineering" /></div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="h-stats">
        <div className="h-stats-inner">
          {[
            ['0.003%','THD+N @ 1 kHz rated power (AES17)'],
            ['±3%','Bl(x) linearity across full Xmax'],
            ['112 dBa','SNR A-weighted, amplifier platform'],
            ['±0.05 mm','AeroFrame™ baffle planarity tolerance'],
          ].map(([n, l]) => (
            <Reveal key={l}>
              <div>
                <div className="h-stat-num">{n}</div>
                <div className="h-stat-lbl">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="h-proc">
        <div className="h-proc-inner">
          <Reveal>
            <div className="h-proc-head">
              <p style={{ fontSize:12, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>Design Methodology</p>
              <h2>From <GH>target specification</GH><br />to production SPC.</h2>
              <p>CAL eliminates empirical iteration. Measurement-to-simulation correlation ≤ 0.5 dB RMS is required before any design reaches a physical prototype.</p>
            </div>
          </Reveal>
          <div className="h-proc-steps">
            {[
              ['01','T/S Specification','Acoustic targets — bandwidth, SPL, Xmax, distortion budget — are expressed as parametric Thiele-Small specs before any geometry is selected.'],
              ['02','FEM / BEM Simulation','COMSOL structural FEM and BEM acoustic simulation compute cone breakup modes and radiated pressure. Target: ≤ 0.5 dB RMS vs. measurement.'],
              ['03','Motor & Crossover Design','Gap flux density, Bl(x) linearity, and LR-24 crossover alignment are co-optimised against the enclosure model before fabrication.'],
              ['04','SPC Production Release','Laser vibrometry validates the physical prototype. Production runs are monitored with ±3σ SPC charts on Fs, Re, Bl, and Cms.'],
            ].map(([n, t, b]) => (
              <Reveal key={n}>
                <div className="h-proc-step">
                  <div className="h-proc-step-num">{n}</div>
                  <h4>{t}</h4>
                  <p>{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="h-cs">
        <div className="h-cs-inner">
          <Reveal>
            <div className="h-cs-head">
              <span className="h-cs-label">Case Study</span>
              <h2>XSCACE — CAL technology<br /><GH>in consumer products.</GH></h2>
              <p>XSCACE is CAL's own consumer audio brand — a vertically-integrated case study demonstrating what the CAL engineering stack produces when driver, amplifier, enclosure, and crossover are co-designed as a single physical system rather than assembled from separate supply chains.</p>
            </div>
          </Reveal>
          <div className="h-cs-grid">
            {[
              {
                img: IMG.cane, tag:'Nano Resonance™ · AeroFrame™ · PrecisionXover™',
                name:'Ultra-slim soundbar platform', body:'21 mm profile constraint driven entirely by AeroFrame™ extrusion geometry. Nano Resonance™ micro-drivers achieve 80 Hz – 20 kHz bandwidth within that constraint.',
                specs:[['Profile','21 mm'],['Bandwidth','80 Hz – 20 kHz'],['THD+N','< 0.01%'],['Sensitivity','88 dB / 2.83V / 1m']],
              },
              {
                img: IMG.quad, tag:'16-driver series-parallel array · PrecisionXover™',
                name:'Multi-driver array platform', body:'Series-parallel 2S8P wiring topology across 16 Nano Resonance™ drivers. Array-level IMD SMPTE measured at −92 dB — enabled by Bl(x) matching within ±1.5% across the array.',
                specs:[['Drivers','16 × Nano Resonance™'],['Array SPL','106 dB'],['IMD SMPTE','−92 dB'],['Crossover','LR-24 @ 2.8 kHz']],
              },
            ].map(c => (
              <Reveal key={c.name}>
                <div className="h-cs-card">
                  <div>
                    <p className="h-cs-tag">{c.tag}</p>
                    <h3>{c.name}</h3>
                    <p>{c.body}</p>
                    <div className="h-cs-specs">
                      {c.specs.map(([k, v]) => (
                        <div key={k} className="h-cs-spec"><span>{k}</span><span>{v}</span></div>
                      ))}
                    </div>
                  </div>
                  <img src={c.img} alt={c.name} />
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop:32, textAlign:'center' }}>
            <Link to="/products" style={{ fontSize:15, color:'#2997ff' }}>View full XSCACE case study →</Link>
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="h-disc">
        <div className="h-disc-inner">
          <Reveal>
            <div style={{ maxWidth:640, marginBottom:0 }}>
              <p style={{ fontSize:12, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>Engineering Disciplines</p>
              <h2 style={{ fontSize:'clamp(30px,4vw,50px)', fontWeight:700, letterSpacing:'-1.8px', color:'#f5f5f7', marginBottom:14, lineHeight:1.06 }}>
                <GH>Vertical integration</GH><br />across every layer.
              </h2>
              <p style={{ fontSize:17, color:'#636366', lineHeight:1.6, marginBottom:56 }}>CAL operates six engineering disciplines in-house. No acoustic system component is sourced from a catalogue when it can be designed to the exact specification the application demands.</p>
            </div>
          </Reveal>
          <div className="h-disc-grid">
            {[
              { title:'Electrodynamic transducer design', body:'Thiele-Small parameter targeting, underhung motor topology, FEM/BEM co-simulation, Polytec laser vibrometry validation.', pills:['Fs/Qts/Vas','Bl(x) FEM','Kapton former','BEM acoustic'] },
              { title:'Class-D amplifier engineering', body:'GaN MOSFET H-bridge design, gate-driver timing, EMI filter topology, SMPS PSRR optimisation, AES17 bench validation.', pills:['GaN H-bridge','PWM 400kHz','EMC/EMI','PSRR > 80 dB'] },
              { title:'DSP & signal-chain firmware', body:'SHARC ADSP-21573 firmware in C/C++, FIR/IIR filter design, parametric EQ, AES67 / I²S / SPDIF interfaces, LDAC / AirPlay 2.', pills:['SHARC DSP','FIR/IIR','AES67','LDAC'] },
              { title:'Acoustic enclosure engineering', body:'BEM-optimised enclosure geometry, constrained-layer damping, 6061-T6 CNC extrusion, transmission-line loading, port tuning.', pills:['BEM enclosure','CLD panels','6061-T6 Al','TL loading'] },
              { title:'Crossover network design', body:'LEAP 5 LR-24 alignment, in-house CNC-wound air-core inductors, Mundorf capacitor selection, group delay ≤ 0.3 ms target.', pills:['LR-24','Air-core L','GD ≤ 0.3 ms','LEAP 5'] },
              { title:'Manufacturing & quality engineering', body:'ISO 9001:2015 production, ±3σ SPC monitoring on all Thiele-Small parameters, Klippel production testing, IEC 60268-5 audit batches.', pills:['ISO 9001','SPC ±3σ','Klippel','IEC 60268-5'] },
            ].map(d => (
              <Reveal key={d.title}>
                <div className="h-disc-card">
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <div className="h-disc-pills">{d.pills.map(p => <span key={p} className="h-disc-pill">{p}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:'#000', padding:'120px 0', textAlign:'center', borderTop:'1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth:620, margin:'0 auto', padding:'0 24px' }}>
          <Reveal>
            <p style={{ fontSize:12, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'#48484a', marginBottom:20 }}>OEM & Partnership Enquiries</p>
            <h2 style={{ fontSize:'clamp(32px,4.5vw,58px)', fontWeight:700, letterSpacing:'-2px', color:'#f5f5f7', marginBottom:18, lineHeight:1.05 }}>
              Need a <GH>physics-first</GH><br />acoustic system?
            </h2>
            <p style={{ fontSize:19, color:'#636366', marginBottom:44, lineHeight:1.55 }}>CAL takes OEM engagements for custom transducer specifications, amplifier platforms, and complete vertically-integrated acoustic systems under NDA.</p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <Link to="/contact" className="h-cta-primary">Start a conversation</Link>
              <Link to="/technology" className="h-cta-ghost">Read the engineering →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
