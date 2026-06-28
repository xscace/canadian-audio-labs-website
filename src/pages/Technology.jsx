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
}

const GH = ({ children }) => (
  <span style={{ background:'linear-gradient(135deg,#f5f5f7 0%,#2997ff 55%,#7b2ff7 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
    {children}
  </span>
)

function ScopeViz() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d'); let ph = 0, raf
    const draw = () => {
      c.width = c.offsetWidth * devicePixelRatio; c.height = c.offsetHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      const W = c.offsetWidth, H = c.offsetHeight
      ctx.clearRect(0,0,W,H)
      ctx.strokeStyle='rgba(0,200,80,.07)'; ctx.lineWidth=1
      for(let x=0;x<=W;x+=W/8){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}
      for(let y=0;y<=H;y+=H/4){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
      ctx.strokeStyle='#00e64d'; ctx.lineWidth=2; ctx.shadowColor='#00e64d'; ctx.shadowBlur=10
      ctx.beginPath()
      for(let x=0;x<=W;x++){
        const t=(x/W)*Math.PI*4+ph
        const y=H/2+(Math.sin(t)*.38+Math.sin(t*2.3+.9)*.15+Math.sin(t*.5-1.1)*.12)*H*.36
        x===0?ctx.moveTo(x,y):ctx.lineTo(x,y)
      }
      ctx.stroke(); ctx.shadowBlur=0; ph+=.018; raf=requestAnimationFrame(draw)
    }
    draw(); return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <div style={{ background:'#000', borderRadius:18, overflow:'hidden', border:'1px solid rgba(0,230,77,.12)', position:'relative', height:280 }}>
      <div style={{ position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 40% at 50% 100%,rgba(0,100,255,.06),transparent)' }} />
      <canvas ref={ref} style={{ display:'block',width:'100%',height:'100%' }} />
    </div>
  )
}

const css = `
.ty-hero { padding:140px 0 100px; background:#000; text-align:center; position:relative; overflow:hidden; }
.ty-hero-glow { position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(0,113,227,.2),transparent),radial-gradient(ellipse 40% 35% at 80% 20%,rgba(123,47,247,.12),transparent);pointer-events:none; }
.ty-hero-inner { position:relative;z-index:2;max-width:760px;margin:0 auto;padding:0 24px; }
.ty-hero h1 { font-size:clamp(48px,7vw,88px);font-weight:700;letter-spacing:-3px;line-height:1.02;color:#f5f5f7;margin-bottom:20px; }
.ty-hero p { font-size:21px;font-weight:300;color:#636366;line-height:1.52;max-width:560px;margin:0 auto; }

/* tech feature */
.tf-sect { padding:110px 0; border-top:1px solid rgba(255,255,255,.06); }
.tf-sect.black{background:#000}
.tf-sect.dark{background:#0a0a0a}
.tf-inner { max-width:1080px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center; }
.tf-inner.rev .tf-vis{order:2}.tf-inner.rev .tf-text{order:1}
.tf-patent { display:inline-block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:4px 12px;border-radius:980px;background:rgba(201,168,76,.1);color:#c9a84c;border:1px solid rgba(201,168,76,.25);margin-bottom:16px; }
.tf-eyebrow { font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#48484a;margin-bottom:10px; }
.tf-title { font-size:clamp(40px,5vw,68px);font-weight:700;letter-spacing:-2.5px;line-height:1.03;color:#f5f5f7;margin-bottom:8px; }
.tf-subtitle { font-size:19px;font-weight:400;color:#636366;margin-bottom:20px;line-height:1.4; }
.tf-body { font-size:16px;color:#48484a;line-height:1.75;margin-bottom:16px; }
.tf-checks { display:flex;flex-direction:column;gap:13px;margin:24px 0 32px; }
.tf-check { display:flex;gap:12px;align-items:flex-start; }
.tf-check-dot { width:20px;height:20px;border-radius:50%;background:#0071e3;flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center; }
.tf-check p { font-size:15px;color:#98989d;line-height:1.5; }
.tf-pills { display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px; }
.tf-pill { padding:5px 13px;border-radius:980px;border:1px solid rgba(0,113,227,.3);font-size:12px;color:#2997ff;font-family:ui-monospace,monospace;background:rgba(0,113,227,.06); }
.tf-vis { display:flex;align-items:center;justify-content:center; }
.tf-vis img { width:100%;max-width:460px;filter:drop-shadow(0 30px 60px rgba(0,100,255,.2)); }
.tf-link { display:inline-flex;align-items:center;gap:5px;font-size:17px;color:#2997ff; }

/* process */
.proc-sect { padding:110px 0;background:#000;border-top:1px solid rgba(255,255,255,.06); }
.proc-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.proc-head { max-width:600px;margin-bottom:64px; }
.proc-head h2 { font-size:clamp(32px,4vw,52px);font-weight:700;letter-spacing:-1.8px;color:#f5f5f7;margin-bottom:14px;line-height:1.06; }
.proc-head p { font-size:17px;color:#636366;line-height:1.6; }
.proc-steps { display:flex;flex-direction:column; }
.proc-step { display:grid;grid-template-columns:56px 1fr;gap:28px;padding:36px 0;border-bottom:1px solid rgba(255,255,255,.06);align-items:flex-start; }
.proc-step:last-child{border-bottom:none}
.proc-num { font-size:13px;font-weight:600;color:#2997ff;font-variant-numeric:tabular-nums;padding-top:3px; }
.proc-step h3 { font-size:21px;font-weight:600;color:#f5f5f7;margin-bottom:8px; }
.proc-step p { font-size:15px;color:#636366;line-height:1.65; }

/* benchmarks */
.bench-sect { padding:110px 0;background:#0a0a0a;border-top:1px solid rgba(255,255,255,.06); }
.bench-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.bench-head { max-width:600px;margin-bottom:48px; }
.bench-head h2 { font-size:clamp(32px,4vw,52px);font-weight:700;letter-spacing:-1.8px;color:#f5f5f7;margin-bottom:14px;line-height:1.06; }
.bench-head p { font-size:17px;color:#636366; }
.bench-wrap { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:20px;overflow:hidden; }
.bench-table { width:100%;border-collapse:collapse;font-size:14px; }
.bench-table th { text-align:left;padding:14px 20px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#48484a;background:#0a0a0a;border-bottom:1px solid rgba(255,255,255,.06); }
.bench-table td { padding:14px 20px;border-bottom:1px solid rgba(255,255,255,.04);color:#48484a; }
.bench-table tr:last-child td{border-bottom:none}
.bench-table td:first-child{color:#636366;font-weight:500}
.bench-table td.cal{color:#2997ff;font-family:ui-monospace,monospace;font-weight:600}
.bench-table tr:hover td{background:rgba(255,255,255,.02)}

/* scope + VCEM */
.vcem-sect { padding:110px 0;background:#000;border-top:1px solid rgba(255,255,255,.06); }
.vcem-inner { max-width:1080px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center; }

@media(max-width:760px){
  .tf-inner,.vcem-inner{grid-template-columns:1fr;gap:48px;}
  .tf-inner.rev .tf-vis,.tf-inner.rev .tf-text{order:0;}
  .proc-step{grid-template-columns:1fr;gap:8px;}
}
`

const TECHS = [
  {
    id:'nano', bg:'black', patent:true,
    eyebrow:'Transducer Technology',
    title:'Nano Resonance™',
    subtitle:'Micro-driver array engineering at the Thiele-Small level.',
    desc1:'Every Nano Resonance™ driver begins as a finite-element simulation in COMSOL Multiphysics. The cone geometry — including radial rib count, surround curvature, and dust-cap dome height — is co-optimised with the magnetic circuit to achieve a Bl(x) product linear within ±5% across the full one-way Xmax excursion, minimising 2nd and 3rd harmonic distortion components.',
    desc2:'The underhung motor topology keeps the voice-coil former fully within the magnetic gap at all drive levels. This eliminates the primary mechanism of inductance variation L(x), which would otherwise introduce significant intermodulation distortion (IMD SMPTE < −92 dB) in multi-driver arrays.',
    checks:['Bl(x) linearity ±5% across full Xmax', 'Underhung motor · L(x) variation < 3%', 'IMD SMPTE: < −92 dB in 16-driver arrays', 'Thiele-Small optimised per-enclosure via BEM'],
    pills:['Underhung Motor','COMSOL FEM/BEM','Bl(x) < ±5%','IMD < −92 dB','Fs optimised'],
    img: IMG.nano,
  },
  {
    id:'aero', bg:'dark', rev:true,
    eyebrow:'Mechanical Engineering',
    title:'AeroFrame™',
    subtitle:'Extruded-aluminium chassis. ±0.05 mm baffle tolerance.',
    desc1:'The AeroFrame™ chassis is die-extruded from 6061-T6 aerospace aluminium alloy with a wall thickness of 2.4 mm, then CNC-milled to final dimensional tolerance on a 5-axis machining centre. The resulting baffle planarity of ±0.05 mm prevents driver-to-driver time-of-arrival errors in multi-driver arrays that would otherwise produce comb-filter artefacts above 5 kHz.',
    desc2:'Internal constrained-layer damping (CLD) panels adhesively bonded to the inner extrusion wall suppress panel resonances — the first structural mode of the 21 mm AeroFrame™ extrusion occurs above 2.1 kHz, well above the operating bandwidth of the woofer section in the QuadCane crossover topology.',
    checks:['6061-T6 aerospace aluminium extrusion', 'CNC-milled to ±0.05 mm baffle planarity', '1st structural mode > 2.1 kHz (21 mm chassis)', 'CLD panels bonded to inner extrusion wall'],
    pills:['6061-T6 Al','±0.05 mm CNC','5-Axis Machining','CLD Damping','Mode > 2.1 kHz'],
    img: IMG.aero,
  },
  {
    id:'power', bg:'black',
    eyebrow:'Motor Design',
    title:'PowerDense™',
    subtitle:'Dual voice-coil topology. Maximum BL product in minimum volume.',
    desc1:'PowerDense™ motors use a dual-layer winding on a common aluminium former — layers wound in series with a 15° inter-layer phase offset to minimise inductance variation Le(x) while maximising the BL product within the constraint of the AeroFrame™ enclosure depth. The neodymium motor assembly achieves a flux density of 1.92 T in the 6 mm magnetic gap without the use of a copper Faraday ring, instead relying on the CAL-developed spiral-cut aluminium pole-piece geometry to reduce eddy-current losses above 1 kHz.',
    desc2:'The result: a BL product of 7.8 T·m in a 25 mm micro-driver — a figure typically achievable only in drivers with 3× the cone diameter.',
    checks:['BL product: 7.8 T·m (25 mm driver)', 'Gap flux density: 1.92 T', 'Dual-layer series winding · 15° phase offset', 'Spiral-cut Al pole-piece reduces eddy loss > 1 kHz'],
    pills:['BL = 7.8 T·m','B-gap 1.92 T','Dual-Layer VC','Eddy-Loss Optimised','Al Former'],
    img: IMG.power,
  },
  {
    id:'xover', bg:'dark', rev:true,
    eyebrow:'Signal Processing',
    title:'PrecisionXover™',
    subtitle:'Linkwitz-Riley 4th-order passive networks. Group delay ≤ 0.3 ms at XO.',
    desc1:'PrecisionXover™ crossover networks are designed using LEAP 5 optimisation software, targeting Linkwitz-Riley −24 dB/oct alignment at the specified crossover frequency. Component selection uses 1% tolerance air-core inductors (wound in-house on a CNC coil winder to maintain ±2% inductance across −20°C to +70°C) and Mundorf M-Cap Supreme polypropylene capacitors rated at 630 V — avoiding the dielectric absorption artefacts seen in metallised polyester types.',
    desc2:'The resulting phase response at the system acoustic sum point shows a group delay deviation of ≤ 0.3 ms across the ±1 octave band centred on the crossover frequency, equivalent to a spatial offset of <10 cm — below the threshold of audible localisation error.',
    checks:['LR-24 alignment · −24 dB/oct', 'Air-core inductors · 1% tolerance · wound in-house', 'Mundorf M-Cap Supreme PP capacitors · 630 V', 'Group delay deviation ≤ 0.3 ms at crossover'],
    pills:['LR-24 Alignment','1% Air-Core L','Mundorf M-Cap PP','GD ≤ 0.3 ms','LEAP 5 Optimised'],
    img: IMG.xover,
  },
]

export default function Technology() {
  return (
    <>
      <style>{css}</style>

      <section className="ty-hero">
        <div className="ty-hero-glow" />
        <div className="ty-hero-inner">
          <p style={{ fontSize:17, color:'#48484a', marginBottom:16 }}>Proprietary technology</p>
          <h1><GH>Where physics</GH><br />becomes product.</h1>
          <p>CAL's IP portfolio spans motor topology, amplifier architecture, acoustic simulation, and materials formulation. Everything that makes XSCACE possible.</p>
        </div>
      </section>

      {TECHS.map(t => (
        <section key={t.id} id={t.id} className={`tf-sect ${t.bg}`}>
          <div className={`tf-inner${t.rev ? ' rev' : ''}`}>
            <Reveal>
              <div className="tf-text">
                {t.patent && <span className="tf-patent">Patented · CA-2014-0388</span>}
                <p className="tf-eyebrow">{t.eyebrow}</p>
                <div className="tf-title"><GH>{t.title}</GH></div>
                <p className="tf-subtitle">{t.subtitle}</p>
                <p className="tf-body">{t.desc1}</p>
                <p className="tf-body">{t.desc2}</p>
                <div className="tf-checks">
                  {t.checks.map(c => (
                    <div key={c} className="tf-check">
                      <div className="tf-check-dot">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <p>{c}</p>
                    </div>
                  ))}
                </div>
                <div className="tf-pills">{t.pills.map(p => <span key={p} className="tf-pill">{p}</span>)}</div>
              </div>
            </Reveal>
            <Reveal delay={150} scale>
              <div className="tf-vis"><img src={t.img} alt={t.title} /></div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* VCEM */}
      <section id="vcem" className="vcem-sect">
        <div className="vcem-inner">
          <Reveal>
            <div>
              <span style={{ display:'inline-block', fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', padding:'4px 12px', borderRadius:980, background:'rgba(201,168,76,.1)', color:'#c9a84c', border:'1px solid rgba(201,168,76,.25)', marginBottom:16 }}>Patented · CA-2014-0388</span>
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:10 }}>Protection &amp; Linearisation</p>
              <div style={{ fontSize:'clamp(40px,5vw,64px)', fontWeight:700, letterSpacing:'-2.5px', lineHeight:1.03, marginBottom:8 }}><GH>VCEM™</GH></div>
              <p style={{ fontSize:19, color:'#636366', marginBottom:20 }}>Voice-Coil Excursion Management. Real-time protection invisible to the listener.</p>
              <p style={{ fontSize:16, color:'#48484a', lineHeight:1.75, marginBottom:16 }}>VCEM™ operates a 96 kHz back-EMF sensing loop on each driven channel. By solving the differential equation relating coil velocity to measured electrical impedance, the DSP computes instantaneous cone displacement and compares it to the driver-specific Xmax model stored in on-board EEPROM. When displacement reaches 85% of Xmax, a 6th-order IIR shelving filter is activated below the driver's free-air resonance frequency (Fs), reducing sub-bass drive until displacement falls below the threshold.</p>
              <p style={{ fontSize:16, color:'#48484a', lineHeight:1.75, marginBottom:24 }}>The result is a form of soft limiting that a listener cannot detect — there is no gain-reduction artefact, only a reduction in subsonic content that contributes nothing to perceived loudness. Over a 10,000-hour accelerated-aging cycle, VCEM™-protected drivers showed 3× lower voice-coil temperature excursion and zero cases of spider fatigue fracture versus unprotected control units.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:32 }}>
                {['96 kHz back-EMF sensing loop per channel','6th-order IIR shelving filter — no gain-artefact','Per-driver Xmax model stored on 32-kbit EEPROM','AMP-Link™ 400 kbps 2-wire serial bus to driver','Correction latency: < 0.6 ms (sub-auditory threshold)'].map(pt => (
                  <div key={pt} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                    <div style={{ width:20, height:20, borderRadius:'50%', background:'#0071e3', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize:15, color:'#98989d', lineHeight:1.5 }}>{pt}</span>
                  </div>
                ))}
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:32 }}>
                {['96 kHz sensing','6th-order IIR','EEPROM model','AMP-Link™ bus','< 0.6 ms latency'].map(p => (
                  <span key={p} style={{ padding:'5px 13px', borderRadius:980, border:'1px solid rgba(0,113,227,.3)', fontSize:12, color:'#2997ff', fontFamily:'ui-monospace,monospace', background:'rgba(0,113,227,.06)' }}>{p}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ScopeViz />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="proc-sect">
        <div className="proc-inner">
          <Reveal>
            <div className="proc-head">
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>Design Process</p>
              <h2>From simulation<br /><GH>to production.</GH></h2>
              <p style={{ marginTop:14 }}>CAL's acoustic design workflow combines FEM, BEM, and Thiele-Small optimisation to eliminate empirical iteration and reach a correct physical prototype on the first build.</p>
            </div>
          </Reveal>
          <div className="proc-steps">
            {[
              ['01','Thiele-Small Target Specification','Acoustic requirements — bandwidth, SPL, distortion budget, Xmax, power handling — are expressed as a parameterised T/S target. CAL-Sim, our in-house Python solver, iterates motor geometry and spider compliance across 10,000 design candidates.'],
              ['02','FEM/BEM Acoustic Simulation','Candidate geometries are imported into COMSOL Multiphysics. Structural FEM maps cone breakup modes; BEM computes the radiated pressure field over the full 20 Hz – 40 kHz bandwidth. Simulation-to-measurement correlation target: ≤ 0.5 dB RMS.'],
              ['03','Magnetic Circuit Design','The neodymium motor assembly is simulated in FEMM 4.2 to optimise gap flux density and Bl(x) linearity. A spiral-cut aluminium pole-piece geometry is used to suppress eddy-current losses above 1 kHz without a copper shorting ring.'],
              ['04','Physical Prototype & Laser Vibrometry','The first physical prototype is measured in our IEC 60268-5 full-anechoic chamber. Polytec PSV-500 laser vibrometry maps cone velocity across 1,024 scan points, validating predicted breakup modes against FEM output.'],
              ['05','Production Release & SPC','Once measured on-axis response is within ±0.5 dB of the BEM prediction across the full bandwidth, a Production Release Package is issued. Statistical Process Control (SPC) charts govern Fs, Re, Bl, and Cms within ±3σ limits across the production run.'],
            ].map(([num, title, body]) => (
              <Reveal key={num}>
                <div className="proc-step">
                  <div className="proc-num">{num}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENCHMARKS */}
      <section id="specs" className="bench-sect">
        <div className="bench-inner">
          <Reveal>
            <div className="bench-head">
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>Platform Benchmarks</p>
              <h2><GH>How CAL compares</GH><br />to published standards.</h2>
              <p style={{ marginTop:14 }}>All CAL figures represent production mean values from quarterly QC audit batches, measured per AES17, IEC 60268, and ANSI/CTA-2010.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bench-wrap">
              <table className="bench-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Standard / Methodology</th>
                    <th>Industry Average</th>
                    <th>CAL Production Mean</th>
                    <th>CAL Flagship</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Amp THD+N @ 1 kHz rated power','AES17','0.05 – 0.1%','< 0.01%','< 0.003%'],
                    ['Amp SNR (A-weighted)','IEC 60268-3','95 – 105 dBa','112 dBa','124 dBa'],
                    ['Amp damping factor @ 8 Ω, 1 kHz','IEC 60268-3','50 – 150','>200','>400 (bridged)'],
                    ['Driver Bl(x) linearity across Xmax','AES2-1984','±12 – 18%','±5%','±3%'],
                    ['Driver IMD SMPTE (array, 12-driver)','SMPTE RP120','—','−88 dB','−92 dB'],
                    ['Woofer Xmax (25 mm micro-driver)','IEC 60268-5','±2 – 4 mm','±5 mm','±7 mm'],
                    ['XO group delay deviation (±1 oct)','—','1 – 3 ms','≤ 0.5 ms','≤ 0.3 ms'],
                    ['Enclosure panel 1st structural mode','FEM (COMSOL)','400 – 700 Hz','> 1.8 kHz','> 2.1 kHz'],
                    ['Production Fs lot-to-lot variance','SPC ±3σ','±8 – 15%','< ±3%','< ±1.5%'],
                  ].map(([m, std, avg, cal, flag]) => (
                    <tr key={m}>
                      <td>{m}</td>
                      <td style={{ color:'#48484a' }}>{std}</td>
                      <td style={{ color:'#48484a' }}>{avg}</td>
                      <td className="cal">{cal}</td>
                      <td className="cal">{flag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background:'#000', padding:'120px 0', textAlign:'center', borderTop:'1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth:600, margin:'0 auto', padding:'0 24px' }}>
          <Reveal>
            <h2 style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:700, letterSpacing:'-1.8px', color:'#f5f5f7', marginBottom:16, lineHeight:1.06 }}>
              Want to discuss a <GH>technical challenge?</GH>
            </h2>
            <p style={{ fontSize:19, color:'#636366', marginBottom:40, lineHeight:1.55 }}>Our engineering team is available for consultations, NDA-covered technical briefings, and joint development agreements.</p>
            <Link to="/contact" style={{ fontSize:17, padding:'14px 30px', borderRadius:980, background:'#0071e3', color:'#fff', fontWeight:400 }}>Contact engineering →</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
