import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const GH = ({ children }) => (
  <span style={{ background:'linear-gradient(135deg,#f5f5f7 0%,#2997ff 55%,#7b2ff7 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
    {children}
  </span>
)

const css = `
.sw-hero { padding:140px 0 90px; background:#000; text-align:center; position:relative; overflow:hidden; }
.sw-hero-glow { position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(0,113,227,.20),transparent),radial-gradient(ellipse 40% 35% at 85% 25%,rgba(123,47,247,.11),transparent);pointer-events:none; }
.sw-hero-inner { position:relative;z-index:2;max-width:800px;margin:0 auto;padding:0 24px; }
.sw-hero h1 { font-size:clamp(48px,7vw,88px);font-weight:700;letter-spacing:-3.5px;line-height:1.01;color:#f5f5f7;margin-bottom:20px; }
.sw-hero p { font-size:19px;font-weight:300;color:#636366;line-height:1.6;max-width:580px;margin:0 auto 40px; }
.sw-hero-pills { display:flex;gap:10px;justify-content:center;flex-wrap:wrap; }
.sw-hero-pill { font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:5px 14px;border-radius:980px;border:1px solid rgba(0,113,227,.25);color:#2997ff;background:rgba(0,113,227,.06);font-family:ui-monospace,monospace; }

/* platform sections */
.sw-sect { padding:110px 0; border-top:1px solid rgba(255,255,255,.06); }
.sw-sect.black { background:#000; }
.sw-sect.dark  { background:#0a0a0a; }
.sw-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.sw-split { display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:flex-start; }
.sw-split.rev .sw-right { order:2; } .sw-split.rev .sw-left { order:1; }
.sw-eyebrow { font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#48484a;margin-bottom:12px; }
.sw-title { font-size:clamp(38px,5vw,62px);font-weight:700;letter-spacing:-2.5px;line-height:1.03;color:#f5f5f7;margin-bottom:10px; }
.sw-sub { font-size:18px;color:#636366;line-height:1.45;margin-bottom:20px; }
.sw-body { font-size:15px;color:#48484a;line-height:1.78;margin-bottom:14px; }
.sw-pills { display:flex;flex-wrap:wrap;gap:8px;margin:22px 0 28px; }
.sw-pill { padding:5px 13px;border-radius:980px;border:1px solid rgba(0,113,227,.25);font-size:11px;color:#2997ff;font-family:ui-monospace,monospace;background:rgba(0,113,227,.05); }
.sw-features { display:flex;flex-direction:column;gap:12px;margin-bottom:28px; }
.sw-feature { display:flex;gap:12px;align-items:flex-start; }
.sw-feature-dot { width:20px;height:20px;border-radius:50%;background:#0071e3;flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center; }
.sw-feature p { font-size:14px;color:#636366;line-height:1.55; }

/* screen mockup */
.sw-screen { background:#111;border:1px solid rgba(255,255,255,.08);border-radius:18px;overflow:hidden; }
.sw-screen-bar { background:#0d0d0d;padding:12px 16px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,.06); }
.sw-screen-dot { width:10px;height:10px;border-radius:50%; }
.sw-screen-url { flex:1;background:#1a1a1a;border-radius:6px;padding:5px 12px;font-size:11px;color:#48484a;font-family:ui-monospace,monospace;text-align:center; }
.sw-screen-body { padding:24px; }
.sw-screen-body p { font-size:13px;color:#48484a;line-height:1.65; }

/* spec table */
.sw-specs { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:16px;overflow:hidden;margin-top:28px; }
.sw-specs table { width:100%;border-collapse:collapse;font-size:13px; }
.sw-specs th { text-align:left;padding:11px 18px;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#48484a;background:#0d0d0d;border-bottom:1px solid rgba(255,255,255,.06); }
.sw-specs td { padding:11px 18px;border-bottom:1px solid rgba(255,255,255,.04);color:#48484a; }
.sw-specs tr:last-child td{border-bottom:none}
.sw-specs td:first-child{color:#636366}
.sw-specs td.val{color:#2997ff;font-family:ui-monospace,monospace}

/* case study banner */
.sw-cs { padding:80px 0;background:#0a0a0a;border-top:1px solid rgba(255,255,255,.06); }
.sw-cs-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.sw-cs-label { display:inline-block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:4px 12px;border-radius:980px;background:rgba(201,168,76,.08);color:#c9a84c;border:1px solid rgba(201,168,76,.2);margin-bottom:16px; }
.sw-cs-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:40px; }
.sw-cs-card { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px; }
.sw-cs-card h4 { font-size:15px;font-weight:600;color:#f5f5f7;margin-bottom:6px; }
.sw-cs-card p { font-size:13px;color:#48484a;line-height:1.6; }
.sw-cs-tag { font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#48484a;margin-bottom:8px; }
.sw-cs-badge { display:inline-block;padding:3px 10px;border-radius:980px;font-size:10px;font-weight:600;margin-bottom:10px; }
.sw-cs-badge.web{background:rgba(0,113,227,.1);color:#2997ff;border:1px solid rgba(0,113,227,.2)}
.sw-cs-badge.ios{background:rgba(123,47,247,.1);color:#a066ff;border:1px solid rgba(123,47,247,.2)}
.sw-cs-badge.mac{background:rgba(0,180,80,.1);color:#00c853;border:1px solid rgba(0,180,80,.2)}

/* oem strip */
.sw-oem { padding:110px 0;background:#000;border-top:1px solid rgba(255,255,255,.06); }
.sw-oem-inner { max-width:1080px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center; }
.sw-oem-cards { display:flex;flex-direction:column;gap:14px; }
.sw-oem-card { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px 28px; }
.sw-oem-card h4 { font-size:15px;font-weight:600;color:#f5f5f7;margin-bottom:6px; }
.sw-oem-card p { font-size:13px;color:#48484a;line-height:1.6; }

@media(max-width:760px){
  .sw-split{grid-template-columns:1fr;gap:48px;}
  .sw-split.rev .sw-right,.sw-split.rev .sw-left{order:0;}
  .sw-cs-grid{grid-template-columns:1fr 1fr;}
  .sw-oem-inner{grid-template-columns:1fr;}
}
@media(max-width:480px){ .sw-cs-grid{grid-template-columns:1fr;} }
`

const Check = () => (
  <div className="sw-feature-dot">
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
)

export default function Software() {
  return (
    <>
      <style>{css}</style>

      <section className="sw-hero">
        <div className="sw-hero-glow" />
        <div className="sw-hero-inner">
          <p style={{ fontSize:17, color:'#48484a', marginBottom:16 }}>Software Engineering</p>
          <h1>The signal chain<br /><GH>is also software.</GH></h1>
          <p>CAL develops the firmware, DSP algorithms, calibration toolkits, acoustic simulation engines, and AI design tools that make hardware perform the way the physics predicts it should.</p>
          <div className="sw-hero-pills">
            {['Acoustic Simulation','Room Correction','DSP Firmware','AI Configurator','Calibration Toolkit','Multiroom Control'].map(p => (
              <span key={p} className="sw-hero-pill">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACOUSTIC SIMULATION ENGINE ── */}
      <section className="sw-sect black">
        <div className="sw-inner">
          <div className="sw-split">
            <Reveal>
              <div className="sw-left">
                <p className="sw-eyebrow">Platform 01 · Web Application</p>
                <div className="sw-title"><GH>Acoustic Simulation</GH><br />Engine</div>
                <p className="sw-sub">Browser-based SPL prediction. Floor plan in, coverage map out. BOQ generated automatically.</p>
                <p className="sw-body">CAL's acoustic simulation engine runs entirely in the browser — no install, no account. An integrator uploads a floor plan, traces room boundaries, places speaker models, and the engine computes SPL coverage across Low, Mid, and High frequency bands simultaneously. Speaker directivity is modelled per frequency band so a wide-dispersion tweeter and a narrow line-array behave differently in the simulation, the way they do in a real room.</p>
                <p className="sw-body">The simulation layer also computes room modes from the traced geometry, identifies first reflection paths, and evaluates stereo imaging angle against a 45–60° target. For cinema rooms, Dolby reference geometry is checked speaker-by-speaker. As speakers are placed, the bill of quantities builds automatically — every transducer, amplifier, and cable run estimated from rack position — and exports to a round-trip Excel template that accepts price entries and regenerates the client PDF.</p>
                <div className="sw-features">
                  {['Per-band SPL heat map (Low / Mid / High) across traced floor plan','Room mode identification from boundary geometry','First reflection path tracing and stereo imaging angle validation','Dolby reference cinema geometry check per speaker','Auto-generated BOQ with Excel round-trip and client PDF export','Eight-step guided workflow — no acoustic training required'].map(f => (
                    <div key={f} className="sw-feature"><Check /><p>{f}</p></div>
                  ))}
                </div>
                <div className="sw-pills">
                  {['WebGL rendering','Ray-tracing reflection model','FDTD room modes','Directivity per band','BOQ export','PDF generation'].map(p => <span key={p} className="sw-pill">{p}</span>)}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="sw-right">
                <div className="sw-screen">
                  <div className="sw-screen-bar">
                    <div className="sw-screen-dot" style={{ background:'#ff5f57' }} />
                    <div className="sw-screen-dot" style={{ background:'#febc2e' }} />
                    <div className="sw-screen-dot" style={{ background:'#28c840' }} />
                    <div className="sw-screen-url">xscace.com/planner</div>
                  </div>
                  <div className="sw-screen-body">
                    <div style={{ background:'#0a0a0a', borderRadius:10, padding:20, marginBottom:16 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
                        <span style={{ fontSize:11, color:'#2997ff', fontFamily:'ui-monospace,monospace' }}>SPL COVERAGE · MID BAND</span>
                        <span style={{ fontSize:11, color:'#48484a', fontFamily:'ui-monospace,monospace' }}>84–92 dB range</span>
                      </div>
                      {[92,89,87,85,84,86,90,91].map((v, i) => (
                        <div key={i} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                          <div style={{ width:8, height:8, borderRadius:2, background: v > 90 ? '#00c853' : v > 87 ? '#2997ff' : v > 85 ? '#febc2e' : '#ff5f57', flexShrink:0 }} />
                          <div style={{ flex:1, height:6, borderRadius:3, background:'#1a1a1a', overflow:'hidden' }}>
                            <div style={{ width:`${((v-80)/15)*100}%`, height:'100%', background: v > 90 ? '#00c853' : v > 87 ? '#2997ff' : v > 85 ? '#febc2e' : '#ff5f57', borderRadius:3 }} />
                          </div>
                          <span style={{ fontSize:11, color:'#48484a', fontFamily:'ui-monospace,monospace', width:50, textAlign:'right' }}>{v} dB</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                      {[['Room modes','3 identified'],['1st reflection','12 ms'],['Stereo angle','52°'],['BOQ items','7 lines']].map(([k,v]) => (
                        <div key={k} style={{ background:'#0a0a0a', borderRadius:8, padding:'12px 14px' }}>
                          <div style={{ fontSize:10, color:'#48484a', marginBottom:4 }}>{k}</div>
                          <div style={{ fontSize:14, fontWeight:600, color:'#2997ff', fontFamily:'ui-monospace,monospace' }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="sw-specs">
                  <table>
                    <thead><tr><th>Capability</th><th className="val">Detail</th></tr></thead>
                    <tbody>
                      {[['Deployment','Browser (no install, no account)'],['Frequency bands','Low / Mid / High simultaneous'],['Reflection model','Ray-tracing, 1st-order'],['Room mode engine','FDTD from traced geometry'],['BOQ export','Excel round-trip + client PDF'],['Cinema mode','Dolby reference geometry check']].map(([k,v]) => (
                        <tr key={k}><td>{k}</td><td className="val">{v}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DSP CONTROL + ROOM CORRECTION ── */}
      <section className="sw-sect dark">
        <div className="sw-inner">
          <div className="sw-split rev">
            <Reveal delay={150}>
              <div className="sw-right">
                <div style={{ background:'#111', border:'1px solid rgba(255,255,255,.08)', borderRadius:18, padding:28 }}>
                  <p style={{ fontSize:11, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'#48484a', marginBottom:16 }}>XSCACE Studio · Signal Chain</p>
                  {[
                    { label:'Input routing matrix', val:'Any-in → any-out', color:'#2997ff' },
                    { label:'Input EQ (per channel)', val:'10-band parametric', color:'#2997ff' },
                    { label:'X-Sense room correction', val:'Measured → applied', color:'#a066ff' },
                    { label:'PsySculpt low extension', val:'Psychoacoustic bass', color:'#a066ff' },
                    { label:'Crossover (per output)', val:'Bessel / BW / LR · 12–48 dB', color:'#2997ff' },
                    { label:'Output delay', val:'0.01 ms resolution', color:'#00c853' },
                    { label:'Output EQ + limiter', val:'Per channel', color:'#2997ff' },
                    { label:'BTL bridging', val:'Across output pairs', color:'#2997ff' },
                  ].map((r, i) => (
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom: i < 7 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
                      <span style={{ fontSize:13, color:'#636366' }}>{r.label}</span>
                      <span style={{ fontSize:12, color:r.color, fontFamily:'ui-monospace,monospace' }}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="sw-left">
                <p className="sw-eyebrow">Platform 02 · macOS / Windows</p>
                <div className="sw-title"><GH>DSP Control &</GH><br />Room Correction</div>
                <p className="sw-sub">Full signal chain exposure. Eleven-instrument calibration suite. Measurement agrees with REW to 0.01 ms.</p>
                <p className="sw-body">CAL's DSP control software exposes the complete signal chain of XSCACE Xylem amplifiers — routing matrix, per-channel gain, delay, parametric EQ on inputs and outputs, crossover filters (Bessel, Butterworth, and Linkwitz-Riley at 12, 18, 24, and 48 dB per octave), per-output limiting, and BTL bridging across output pairs. Every parameter is live: change a crossover slope and the amplifier updates in under 10 ms.</p>
                <p className="sw-body">Layered on top are two proprietary CAL algorithms. <strong style={{ color:'#f5f5f7' }}>X-Sense</strong> captures frequency response, reverberation time (RT60), and noise floor at the listening position using any calibrated USB measurement microphone, then computes per-channel level, delay, crossover point, and equalisation from the measured data and writes it back to the amplifier. <strong style={{ color:'#f5f5f7' }}>PsySculpt</strong> applies psychoacoustic low-extension modelling — adding perceived bass weight without extending excursion beyond the driver's Xmax limit, cross-referencing the VCEM™ protection loop in real time.</p>
                <p className="sw-body">Arrival-time measurement remains accurate with wireless sources. Delay resolution is 0.01 ms — agreement with REW on the same measurement — and when a reading cannot be defended (poor SNR, microphone clipping, room too live) the software refuses to report a number rather than returning a bad one.</p>
                <div className="sw-pills">
                  {['X-Sense room correction','PsySculpt bass extension','RT60 measurement','0.01 ms delay resolution','USB mic compatible','LR-48 crossovers','11-instrument toolkit'].map(p => <span key={p} className="sw-pill">{p}</span>)}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── AI SYSTEM CONFIGURATOR ── */}
      <section className="sw-sect black">
        <div className="sw-inner">
          <div className="sw-split">
            <Reveal>
              <div className="sw-left">
                <p className="sw-eyebrow">Platform 03 · Web Application</p>
                <div className="sw-title"><GH>AI System</GH><br />Configurator</div>
                <p className="sw-sub">Describe the space. The AI returns a product list, wiring diagram, and full BOQ.</p>
                <p className="sw-body">CAL's AI system configurator accepts a natural-language room description — dimensions, use case, listening preferences — and returns a complete system specification: products, quantities, amplifier configuration, and cable runs estimated from room geometry. The underlying model is fine-tuned on CAL's transducer and amplifier catalogue, Thiele-Small enclosure matching data, and acoustic coverage rules derived from the simulation engine.</p>
                <p className="sw-body">For professional integrators, the configurator also accepts third-party equipment: enter the specification manually or upload a spec sheet and the AI extracts sensitivity, power handling, and dispersion data to include the product in the system model. The output is a formatted BOQ that imports directly into the simulation engine for visual verification before anything is quoted.</p>
                <div className="sw-features">
                  {['Natural-language room input — no acoustic training required','Fine-tuned on CAL transducer + amplifier catalogue','Third-party equipment support via spec-sheet OCR','Wiring diagram generation per room geometry','BOQ exports directly into the simulation engine','Handles mixed-brand installations'].map(f => (
                    <div key={f} className="sw-feature"><Check /><p>{f}</p></div>
                  ))}
                </div>
                <div className="sw-pills">
                  {['LLM fine-tuned','Spec-sheet OCR','BOQ integration','Wiring generation','Multi-brand','Room-aware'].map(p => <span key={p} className="sw-pill">{p}</span>)}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="sw-right">
                <div style={{ background:'#111', border:'1px solid rgba(255,255,255,.08)', borderRadius:18, overflow:'hidden' }}>
                  <div style={{ padding:'20px 24px', borderBottom:'1px solid rgba(255,255,255,.06)', background:'#0d0d0d' }}>
                    <p style={{ fontSize:11, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'#48484a', marginBottom:0 }}>XSCACE System Builder</p>
                  </div>
                  <div style={{ padding:24 }}>
                    <div style={{ background:'#0a0a0a', borderRadius:12, padding:'14px 18px', marginBottom:16 }}>
                      <p style={{ fontSize:13, color:'#636366', marginBottom:4 }}>User</p>
                      <p style={{ fontSize:14, color:'#f5f5f7', lineHeight:1.55 }}>I need speakers for a hotel lobby, 12m × 18m, high ceilings around 5m. Background music, speech intelligibility for announcements.</p>
                    </div>
                    <div style={{ background:'rgba(0,113,227,.06)', border:'1px solid rgba(0,113,227,.15)', borderRadius:12, padding:'14px 18px', marginBottom:20 }}>
                      <p style={{ fontSize:13, color:'#2997ff', marginBottom:8 }}>XSCACE AI</p>
                      <p style={{ fontSize:14, color:'#98989d', lineHeight:1.6 }}>For that volume I'd recommend 6× Ghost 2.0 in-ceiling (8Ω), 1× Xylem 6 DSP amplifier (6-channel), and a Juniper sub near the reception zone. STI-PA target is achievable at ≥0.50 with this layout.</p>
                    </div>
                    <div style={{ background:'#0d0d0d', borderRadius:12, padding:'16px 18px' }}>
                      <p style={{ fontSize:11, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:12 }}>Generated BOQ</p>
                      {[['6×','Ghost 2.0 In-ceiling','8Ω, 100V, 90dB/1W'],['1×','Xylem 6 DSP Amp','6-ch, 60W/ch, LR-48'],['1×','Juniper Subwoofer','250W, 35–120 Hz']].map(([qty, name, spec]) => (
                        <div key={name} style={{ display:'flex', gap:12, alignItems:'center', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,.05)' }}>
                          <span style={{ fontSize:12, color:'#2997ff', fontFamily:'ui-monospace,monospace', width:24 }}>{qty}</span>
                          <div>
                            <p style={{ fontSize:13, color:'#f5f5f7', marginBottom:2 }}>{name}</p>
                            <p style={{ fontSize:11, color:'#48484a', fontFamily:'ui-monospace,monospace' }}>{spec}</p>
                          </div>
                        </div>
                      ))}
                      <p style={{ fontSize:12, color:'#2997ff', marginTop:12, cursor:'pointer' }}>Export full BOQ to Excel →</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MULTIROOM CONTROL ── */}
      <section className="sw-sect dark">
        <div className="sw-inner">
          <div className="sw-split rev">
            <Reveal delay={150}>
              <div className="sw-right">
                <div style={{ background:'#111', border:'1px solid rgba(255,255,255,.08)', borderRadius:18, padding:28 }}>
                  <p style={{ fontSize:11, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'#48484a', marginBottom:20 }}>Network discovery latency</p>
                  <div style={{ display:'flex', alignItems:'flex-end', gap:6, height:80, marginBottom:20 }}>
                    {[0.8,0.9,1.1,0.7,0.9,1.0,0.8,0.9,1.2,0.8,0.9,1.0].map((v,i) => (
                      <div key={i} style={{ flex:1, background:'rgba(0,113,227,.6)', borderRadius:'3px 3px 0 0', height:`${v/1.2*100}%` }} />
                    ))}
                  </div>
                  <p style={{ fontSize:11, color:'#48484a', fontFamily:'ui-monospace,monospace', textAlign:'center' }}>Mean: 0.94 s · Max: 1.2 s · n=12 devices</p>
                  <div style={{ marginTop:20, display:'flex', flexDirection:'column', gap:10 }}>
                    {[['Group sync latency','< 5 ms'],['EQ bands','10-band parametric'],['Network','Local Wi-Fi · no cloud'],['Platforms','iOS · Android']].map(([k,v]) => (
                      <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,.05)' }}>
                        <span style={{ fontSize:13, color:'#636366' }}>{k}</span>
                        <span style={{ fontSize:12, color:'#2997ff', fontFamily:'ui-monospace,monospace' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="sw-left">
                <p className="sw-eyebrow">Platform 04 · iOS & Android</p>
                <div className="sw-title"><GH>Multiroom</GH><br />Control</div>
                <p className="sw-sub">Network device discovery in under 1 second. Perfectly synced zones. 10-band parametric EQ. No cloud.</p>
                <p className="sw-body">CAL's multiroom control application discovers every XSCACE amplifier and streamer on the local network in under one second using a zero-configuration mDNS discovery protocol — no pairing, no QR codes, no account creation. Devices are grouped into permanent multiroom zones that maintain &lt;5 ms sync between speakers at opposite ends of a building using a PTP-derived clock synchronisation layer over the local network.</p>
                <p className="sw-body">Every device exposes a 10-band parametric equaliser via the app — full frequency, gain, and Q control per band, applied directly to the DSP inside the amplifier over the local network. No listening data, no usage analytics, and no external server involvement: all processing and state storage is on-device.</p>
                <div className="sw-pills">
                  {['mDNS zero-config','< 1s discovery','PTP sync < 5ms','10-band PEQ','Local-only','No cloud','iOS + Android'].map(p => <span key={p} className="sw-pill">{p}</span>)}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY: XSCACE DEPLOYMENT ── */}
      <section className="sw-cs">
        <div className="sw-cs-inner">
          <Reveal>
            <span className="sw-cs-label">Case Study</span>
            <h2 style={{ fontSize:'clamp(30px,4vw,50px)', fontWeight:700, letterSpacing:'-1.8px', color:'#f5f5f7', marginBottom:14, lineHeight:1.06 }}>
              XSCACE: all four CAL software<br /><GH>platforms deployed live.</GH>
            </h2>
            <p style={{ fontSize:17, color:'#636366', lineHeight:1.65, maxWidth:700 }}>XSCACE is the public-facing deployment of CAL's full software stack. The tools are live, free-to-use, and reflect the exact codebase available to OEM partners under white-label licensing.</p>
          </Reveal>
          <div className="sw-cs-grid">
            {[
              { badge:'WEB', badgeType:'web', tag:'Acoustic Simulation Engine', name:'Floorplan Sound Simulation', desc:'SPL coverage prediction, room mode analysis, BOQ generation. Free, no account. Used by AV integrators across 12 countries.' },
              { badge:'macOS · Windows', badgeType:'mac', tag:'DSP Control + Room Correction', name:'XSCACE Studio', desc:'Full DSP signal chain + X-Sense room correction + PsySculpt + 11-instrument calibration toolkit. Free with Xylem amplifiers.' },
              { badge:'iOS · Android', badgeType:'ios', tag:'Multiroom Control', name:'XSCACE Controller', desc:'Zero-config device discovery, permanent multiroom zones, 10-band parametric EQ. No cloud, no account, no data collection.' },
              { badge:'WEB', badgeType:'web', tag:'AI System Configurator', name:'XSCACE System Builder', desc:'Natural-language room input → product recommendation → BOQ. Fine-tuned on CAL catalogue + third-party spec-sheet OCR.' },
            ].map(c => (
              <Reveal key={c.name}>
                <div className="sw-cs-card">
                  <span className={`sw-cs-badge ${c.badgeType}`}>{c.badge}</span>
                  <p className="sw-cs-tag">{c.tag}</p>
                  <h4>{c.name}</h4>
                  <p>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OEM LICENSING ── */}
      <section className="sw-oem">
        <div className="sw-oem-inner">
          <Reveal>
            <div>
              <p style={{ fontSize:12, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>OEM & White-Label Licensing</p>
              <h2 style={{ fontSize:'clamp(30px,4.5vw,54px)', fontWeight:700, letterSpacing:'-2px', color:'#f5f5f7', marginBottom:18, lineHeight:1.05 }}>
                The same stack,<br /><GH>your brand.</GH>
              </h2>
              <p style={{ fontSize:17, color:'#636366', lineHeight:1.7, marginBottom:32 }}>Every CAL software platform is available for OEM licensing — white-labelled, skinned to your brand identity, and integrated with your hardware via the AMP-Link™ firmware interface. CAL handles ongoing algorithm development; you ship the product.</p>
              <Link to="/contact" style={{ fontSize:17, padding:'14px 30px', borderRadius:980, background:'#0071e3', color:'#fff', fontWeight:400, display:'inline-block' }}>Discuss OEM licensing →</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="sw-oem-cards">
              {[
                { title:'Acoustic simulation engine', desc:'White-label the browser-based SPL prediction tool with your product catalogue, brand colours, and PDF templates. Your dealers design with your products.' },
                { title:'Room correction algorithms', desc:'License X-Sense and PsySculpt for integration with your DSP amplifier hardware. CAL supplies the algorithm binary and firmware interface spec under NDA.' },
                { title:'AI system configurator', desc:'Fine-tuned on your product catalogue. Outputs your part numbers, your price lists, your wiring diagrams. Embeds in your dealer portal or public website.' },
                { title:'Multiroom control SDK', desc:'The zero-config discovery layer and PTP sync engine as an iOS/Android SDK. Your app, your UX, our networking and sync layer under the hood.' },
              ].map(c => (
                <div key={c.title} className="sw-oem-card">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:'#0a0a0a', padding:'100px 0', textAlign:'center', borderTop:'1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth:600, margin:'0 auto', padding:'0 24px' }}>
          <Reveal>
            <p style={{ fontSize:12, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'#48484a', marginBottom:20 }}>Partnership enquiries</p>
            <h2 style={{ fontSize:'clamp(30px,4vw,50px)', fontWeight:700, letterSpacing:'-1.8px', color:'#f5f5f7', marginBottom:16, lineHeight:1.06 }}>
              Want CAL software<br /><GH>inside your product?</GH>
            </h2>
            <p style={{ fontSize:17, color:'#636366', marginBottom:40, lineHeight:1.6 }}>White-label licensing, algorithm integration, and joint development agreements are available under NDA. Minimum commitment terms and technical specs on request.</p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <Link to="/contact" style={{ fontSize:17, padding:'14px 30px', borderRadius:980, background:'#0071e3', color:'#fff', fontWeight:400 }}>Get in touch</Link>
              <Link to="/technology" style={{ fontSize:17, padding:'14px 30px', borderRadius:980, background:'rgba(255,255,255,.08)', color:'#f5f5f7' }}>Hardware platforms →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
