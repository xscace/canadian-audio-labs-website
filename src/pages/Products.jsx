import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const IMG = {
  nano:     'https://static.wixstatic.com/media/d5fbc8_81e215a01c564585903da3b90825475c~mv2.png',
  aero:     'https://static.wixstatic.com/media/d5fbc8_84df6f885c034d87acf110989783689c~mv2.png',
  power:    'https://static.wixstatic.com/media/d5fbc8_d8a5847df52447cf89f9c2e4b3801546~mv2.png',
  xover:    'https://static.wixstatic.com/media/d5fbc8_620261a4ba3f4cc5a3eeb7dbb86b06ea~mv2.png',
  airamp:   'https://static.wixstatic.com/media/d5fbc8_acd8eb717ffa4ce8858204c9728eadcb~mv2.png',
  cane:     'https://static.wixstatic.com/media/d5fbc8_92ef7163e57341e2ba723be405ff379e~mv2.png',
  quad:     'https://static.wixstatic.com/media/d5fbc8_7033367dd6434ea9bd7c7c6aa720dd84~mv2.png',
  bonsai:   'https://static.wixstatic.com/media/d5fbc8_e0de81d6e9cd43568b1a6c6d29e00d8e~mv2.png',
  acacia:   'https://static.wixstatic.com/media/d5fbc8_96cf8df077a8455d9b193ac441611563~mv2.png',
}

const GH = ({ children }) => (
  <span style={{ background:'linear-gradient(135deg,#f5f5f7 0%,#2997ff 55%,#7b2ff7 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
    {children}
  </span>
)

const css = `
/* hero */
.pr-hero { padding:140px 0 90px; background:#000; text-align:center; position:relative; overflow:hidden; }
.pr-hero-glow { position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(0,113,227,.18),transparent);pointer-events:none; }
.pr-hero-inner { position:relative;z-index:2;max-width:760px;margin:0 auto;padding:0 24px; }
.pr-hero h1 { font-size:clamp(48px,7vw,88px);font-weight:700;letter-spacing:-3.5px;line-height:1.01;color:#f5f5f7;margin-bottom:20px; }
.pr-hero p { font-size:19px;font-weight:300;color:#636366;line-height:1.6;max-width:560px;margin:0 auto; }

/* nav */
.pr-nav { position:sticky;top:48px;z-index:100;background:rgba(0,0,0,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.07);padding:0 24px; }
.pr-nav-inner { max-width:1080px;margin:0 auto;display:flex;gap:0;overflow-x:auto; }
.pr-nav-inner a { font-size:13px;color:#636366;padding:14px 20px;white-space:nowrap;border-bottom:2px solid transparent;transition:color .2s,border-color .2s; }
.pr-nav-inner a:hover { color:#f5f5f7; }

/* platform section */
.pl-sect { padding:110px 0; border-top:1px solid rgba(255,255,255,.06); }
.pl-sect.black { background:#000; }
.pl-sect.dark  { background:#0a0a0a; }
.pl-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.pl-header { display:grid;grid-template-columns:1fr auto;gap:24px;align-items:flex-end;margin-bottom:56px; }
.pl-eyebrow { font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#48484a;margin-bottom:10px; }
.pl-title { font-size:clamp(40px,5.5vw,70px);font-weight:700;letter-spacing:-2.5px;line-height:1.03;color:#f5f5f7; }
.pl-sub { font-size:19px;color:#636366;margin-top:10px;line-height:1.45; }
.pl-body { font-size:16px;color:#48484a;line-height:1.78;margin-bottom:16px; }
.pl-pills { display:flex;flex-wrap:wrap;gap:8px;margin:24px 0; }
.pl-pill { padding:5px 13px;border-radius:980px;border:1px solid rgba(0,113,227,.25);font-size:11px;color:#2997ff;font-family:ui-monospace,monospace;background:rgba(0,113,227,.05); }

/* split layout */
.pl-split { display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center; }
.pl-split.rev .pl-vis { order:2; } .pl-split.rev .pl-text { order:1; }
.pl-vis { display:flex;align-items:center;justify-content:center; }
.pl-vis img { width:100%;max-width:440px;filter:drop-shadow(0 30px 60px rgba(0,100,255,.2)); }

/* spec table */
.pl-specs { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:18px;overflow:hidden;margin-top:32px; }
.pl-specs table { width:100%;border-collapse:collapse;font-size:14px; }
.pl-specs th { text-align:left;padding:12px 20px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#48484a;background:#0d0d0d;border-bottom:1px solid rgba(255,255,255,.06); }
.pl-specs td { padding:12px 20px;border-bottom:1px solid rgba(255,255,255,.04);color:#48484a; }
.pl-specs tr:last-child td{border-bottom:none}
.pl-specs td:first-child{color:#636366;}
.pl-specs td.val{color:#2997ff;font-family:ui-monospace,monospace;}
.pl-specs tr:hover td{background:rgba(255,255,255,.02)}

/* skus */
.pl-skus { margin-top:40px; }
.pl-skus h4 { font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#48484a;margin-bottom:16px; }
.pl-sku-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:14px; }
.pl-sku { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:20px; }
.pl-sku-name { font-size:14px;font-weight:600;color:#f5f5f7;margin-bottom:6px; }
.pl-sku p { font-size:12px;color:#48484a;line-height:1.55; }

/* case study strip */
.cs-strip { padding:100px 0;background:#0a0a0a;border-top:1px solid rgba(255,255,255,.06); }
.cs-strip-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.cs-strip-head { max-width:640px;margin-bottom:56px; }
.cs-label { display:inline-block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:4px 12px;border-radius:980px;background:rgba(201,168,76,.08);color:#c9a84c;border:1px solid rgba(201,168,76,.2);margin-bottom:16px; }
.cs-strip-head h2 { font-size:clamp(30px,4vw,50px);font-weight:700;letter-spacing:-1.8px;color:#f5f5f7;margin-bottom:12px;line-height:1.06; }
.cs-strip-head p { font-size:17px;color:#636366;line-height:1.65; }
.cs-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:16px; }
.cs-card { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:18px;padding:24px;display:flex;flex-direction:column; }
.cs-card img { width:100%;height:140px;object-fit:contain;margin-bottom:20px;filter:drop-shadow(0 10px 20px rgba(0,80,200,.12)); }
.cs-card-tag { font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#48484a;margin-bottom:6px; }
.cs-card h3 { font-size:16px;font-weight:600;color:#f5f5f7;margin-bottom:6px; }
.cs-card p { font-size:12px;color:#48484a;line-height:1.6;flex:1; }
.cs-card-specs { margin-top:14px;display:flex;flex-direction:column;gap:4px; }
.cs-card-spec { display:flex;justify-content:space-between;font-size:11px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04); }
.cs-card-spec:last-child{border-bottom:none}
.cs-card-spec span:first-child{color:#3a3a3c}
.cs-card-spec span:last-child{color:#2997ff;font-family:ui-monospace,monospace}

@media(max-width:900px){ .cs-grid{grid-template-columns:repeat(2,1fr);} }
@media(max-width:760px){
  .pl-split{grid-template-columns:1fr;gap:48px;}
  .pl-split.rev .pl-vis,.pl-split.rev .pl-text{order:0;}
  .pl-header{grid-template-columns:1fr;}
  .pl-sku-grid{grid-template-columns:1fr 1fr;}
  .cs-grid{grid-template-columns:1fr 1fr;}
}
@media(max-width:480px){ .pl-sku-grid,.cs-grid{grid-template-columns:1fr;} }
`

/* ─── shared spec table component ─── */
const SpecTable = ({ rows }) => (
  <div className="pl-specs">
    <table>
      <thead><tr><th>Parameter</th><th>Standard</th><th className="val">Value</th></tr></thead>
      <tbody>
        {rows.map(([p, s, v]) => (
          <tr key={p}><td>{p}</td><td>{s}</td><td className="val">{v}</td></tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default function Products() {
  return (
    <>
      <style>{css}</style>

      <section className="pr-hero">
        <div className="pr-hero-glow" />
        <div className="pr-hero-inner">
          <p style={{ fontSize:17, color:'#48484a', marginBottom:16 }}>Engineering Platforms</p>
          <h1>What CAL<br /><GH>builds.</GH></h1>
          <p>Three core engineering platforms — transducer, amplifier, and enclosure — each designed from physical first principles and available for OEM integration.</p>
        </div>
      </section>

      <nav className="pr-nav">
        <div className="pr-nav-inner">
          {[['#transducer','Transducer Platform'],['#amplifier','Amplifier Platform'],['#enclosure','Enclosure Systems'],['#crossover','Crossover Networks'],['#casestudy','Case Study: XSCACE']].map(([h, l]) => (
            <a key={h} href={h}>{l}</a>
          ))}
        </div>
      </nav>

      {/* ─── TRANSDUCER PLATFORM ─── */}
      <section id="transducer" className="pl-sect black">
        <div className="pl-inner">
          <Reveal>
            <div className="pl-header">
              <div>
                <p className="pl-eyebrow">Platform 01</p>
                <div className="pl-title"><GH>Transducer</GH><br />Engineering</div>
                <p className="pl-sub">Electrodynamic drivers designed to Thiele-Small specification — not cost constraint.</p>
              </div>
            </div>
          </Reveal>
          <div className="pl-split">
            <Reveal>
              <div className="pl-text">
                <p className="pl-body">CAL's transducer division covers 15 mm – 200 mm cone diameters across four driver families: micro full-range, mid-woofer, dedicated tweeter, and subwoofer motor. Every design workflow begins with a parametric Thiele-Small target defined in CAL-Sim, our in-house Python solver, which iterates motor geometry candidates against the acoustic requirement before any FEM simulation is initiated.</p>
                <p className="pl-body">Motor topology is selected based on the application's excursion and distortion budget. For micro-driver applications with profile constraints below 25 mm, CAL uses an underhung topology — keeping the voice-coil former fully within the magnetic gap at all drive levels, capping L(x) variation below 3% and holding 3rd harmonic distortion below −65 dB relative at rated power.</p>
                <p className="pl-body">Production drivers are tested 100% on Klippel production test systems measuring Fs, Re, Bl, and Cms to ±3σ SPC limits. Out-of-spec units are rejected before assembly. Quarterly audit batches are measured in CAL's IEC 60268-5 full-anechoic chamber with Polytec PSV-500 laser vibrometry.</p>
                <div className="pl-pills">
                  {['15–200mm range','Underhung motor','BL = 7.8 T·m','Bl(x) ±3%','IMD < −92 dB','Klippel 100% test','IEC 60268-5','±3σ SPC'].map(p => <span key={p} className="pl-pill">{p}</span>)}
                </div>
                <SpecTable rows={[
                  ['Cone diameter range','—','15 mm – 200 mm'],
                  ['Motor topology (micro)','—','Underhung, dual-layer VC'],
                  ['Bl product (25 mm micro)','AES2-1984','7.8 T·m'],
                  ['Bl(x) linearity across Xmax','AES2-1984','±3%'],
                  ['L(x) variation (underhung)','—','< 3%'],
                  ['IMD SMPTE (16-driver array)','SMPTE RP120','−92 dB'],
                  ['3rd harmonic @ rated power','IEC 60268-5','< −65 dB'],
                  ['Gap flux density (Nd motor)','—','1.92 T'],
                  ['Production Fs lot variance (±3σ)','SPC','< ±1.5%'],
                ]} />
              </div>
            </Reveal>
            <Reveal delay={150} scale>
              <div className="pl-vis"><img src={IMG.nano} alt="CAL transducer platform" /></div>
            </Reveal>
          </div>
          <Reveal>
            <div className="pl-skus">
              <h4>Standard driver families</h4>
              <div className="pl-sku-grid">
                {[
                  { name:'Micro Full-Range (MFR)', desc:'15–40 mm, underhung motor, Kapton former, ferrofluid VC cooling. For ultra-slim and miniature enclosures.' },
                  { name:'Mid-Woofer (MW)', desc:'50–130 mm, Kapton or aluminium former, PowerDense™ motor, BEM-optimised surround geometry.' },
                  { name:'Subwoofer (SW)', desc:'130–200 mm, long-throw spider, aluminium former, vented pole-piece, Xmax up to ±12 mm.' },
                ].map(s => (
                  <div key={s.name} className="pl-sku"><div className="pl-sku-name">{s.name}</div><p>{s.desc}</p></div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── AMPLIFIER PLATFORM ─── */}
      <section id="amplifier" className="pl-sect dark">
        <div className="pl-inner">
          <Reveal>
            <div className="pl-header">
              <div>
                <p className="pl-eyebrow">Platform 02</p>
                <div className="pl-title"><GH>Class-D GaN</GH><br />Amplifier</div>
                <p className="pl-sub">GaN MOSFET H-bridge. 400 kHz PWM. 0.003% THD+N. Full DSP signal chain on-board.</p>
              </div>
            </div>
          </Reveal>
          <div className="pl-split rev">
            <Reveal delay={150} scale>
              <div className="pl-vis"><img src={IMG.airamp} alt="CAL amplifier platform" /></div>
            </Reveal>
            <Reveal>
              <div className="pl-text">
                <p className="pl-body">CAL's amplifier platform is a vertically-integrated four-layer PCB combining a GaN MOSFET H-bridge output stage, a 32-bit/192 kHz AKM DAC front-end, and a SHARC ADSP-21573 DSP in a single module. The output stage operates at 400 kHz switching frequency — pushing PWM harmonic energy to 400 kHz and above, well outside the audio band, and allowing a compact LC output filter with −3 dB above 100 kHz.</p>
                <p className="pl-body">The PSRR of the supply rejection network exceeds 80 dB at 1 kHz, enabling operation from unregulated switch-mode supplies without audible artefacts. The SHARC DSP implements 4th-order FIR/IIR crossover filters, parametric EQ, room correction delay, and the VCEM™ back-EMF sensing loop — all running at 96 kHz sample rate with a total DSP latency below 0.6 ms.</p>
                <p className="pl-body">Wireless connectivity options include Wi-Fi 6, LDAC, aptX HD, and AirPlay 2, implemented via a companion RF module on the same carrier PCB. The amplifier module is available in mono (40 W into 4 Ω), stereo (2×25 W), and quad-channel (4×15 W) configurations for multi-driver array applications.</p>
                <div className="pl-pills">
                  {['GaN MOSFET H-bridge','400kHz PWM','AKM AK4493EQ','SHARC ADSP-21573','THD+N 0.003%','SNR 112 dBa','PSRR > 80 dB','VCEM™','LDAC / AirPlay 2'].map(p => <span key={p} className="pl-pill">{p}</span>)}
                </div>
                <SpecTable rows={[
                  ['Output stage','—','GaN MOSFET H-bridge'],
                  ['Switching frequency','—','400 kHz'],
                  ['THD+N @ 1 kHz, rated power','AES17','0.003% (−90.5 dBFS)'],
                  ['SNR (A-weighted)','IEC 60268-3','112 dBa'],
                  ['Damping factor (8 Ω, 1 kHz)','IEC 60268-3','> 200'],
                  ['PSRR (1 kHz)','—','> 80 dB'],
                  ['DAC','—','AKM AK4493EQ · 32-bit/192 kHz'],
                  ['DSP','—','SHARC ADSP-21573'],
                  ['DSP sample rate','—','96 kHz'],
                  ['Wireless','—','Wi-Fi 6 · LDAC · aptX HD · AirPlay 2'],
                ]} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── ENCLOSURE SYSTEMS ─── */}
      <section id="enclosure" className="pl-sect black">
        <div className="pl-inner">
          <Reveal>
            <div className="pl-header">
              <div>
                <p className="pl-eyebrow">Platform 03</p>
                <div className="pl-title"><GH>Enclosure</GH><br />Engineering</div>
                <p className="pl-sub">BEM-computed geometry. AeroFrame™ 6061-T6 extrusion. ±0.05 mm CNC baffle tolerance.</p>
              </div>
            </div>
          </Reveal>
          <div className="pl-split">
            <Reveal>
              <div className="pl-text">
                <p className="pl-body">Enclosure geometry at CAL is derived from the same BEM simulation environment used for driver design — not sized empirically from box-volume charts. The COMSOL BEM model outputs a radiated pressure map at 1,024 microphone positions in the virtual anechoic half-space, allowing port geometry, vent tuning, and constrained-layer damping placement to be evaluated computationally before any material is processed.</p>
                <p className="pl-body">The AeroFrame™ chassis is die-extruded from 6061-T6 aerospace aluminium alloy, then finish-milled on a 5-axis CNC machining centre to a baffle planarity tolerance of ±0.05 mm. This prevents inter-driver time-of-arrival offsets that would produce comb-filter artefacts above 5 kHz in multi-driver configurations. The first structural resonance mode of the extrusion exceeds 2.1 kHz — above the operating bandwidth of any woofer section in a typical 2-way or 3-way crossover.</p>
                <p className="pl-body">Constrained-layer damping (CLD) panels are adhesively bonded to the inner extrusion wall at positions identified by the structural FEM model as high-displacement nodes. Panel loss factor targets &gt; 0.15 at 23°C.</p>
                <div className="pl-pills">
                  {['BEM-optimised geometry','6061-T6 Al extrusion','±0.05 mm planarity','5-axis CNC','CLD panel bonding','1st mode > 2.1 kHz','TL loading option','Sealed / vented / TL'].map(p => <span key={p} className="pl-pill">{p}</span>)}
                </div>
                <SpecTable rows={[
                  ['Chassis material','—','6061-T6 aerospace Al'],
                  ['Baffle planarity tolerance','5-axis CNC','±0.05 mm'],
                  ['1st structural mode (21mm chassis)','FEM COMSOL','> 2.1 kHz'],
                  ['CLD panel loss factor (23°C)','—','> 0.15'],
                  ['Wall thickness (standard)','—','2.4 mm'],
                  ['Enclosure topologies','—','Sealed · Vented · TL · Bandpass'],
                  ['BEM pressure map resolution','—','1,024 positions'],
                ]} />
              </div>
            </Reveal>
            <Reveal delay={150} scale>
              <div className="pl-vis"><img src={IMG.aero} alt="AeroFrame enclosure system" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CROSSOVER NETWORKS ─── */}
      <section id="crossover" className="pl-sect dark">
        <div className="pl-inner">
          <Reveal>
            <div className="pl-header">
              <div>
                <p className="pl-eyebrow">Platform 04</p>
                <div className="pl-title"><GH>Crossover</GH><br />Networks</div>
                <p className="pl-sub">PrecisionXover™ LR-24 alignment. Group delay ≤ 0.3 ms. In-house CNC-wound inductors.</p>
              </div>
            </div>
          </Reveal>
          <div className="pl-split rev">
            <Reveal delay={150} scale>
              <div className="pl-vis"><img src={IMG.xover} alt="PrecisionXover crossover network" /></div>
            </Reveal>
            <Reveal>
              <div className="pl-text">
                <p className="pl-body">CAL's PrecisionXover™ passive crossover networks are designed using LEAP 5 optimisation software targeting Linkwitz-Riley −24 dB/oct (LR-24) alignment at the specified crossover frequency. LR-24 alignment ensures that both driver outputs sum to a flat magnitude response with all-pass phase behaviour at the crossover point — a critical requirement for maintaining accurate stereo imaging in multi-driver arrays.</p>
                <p className="pl-body">Air-core inductors are wound in-house on a CNC coil winder to ±2% inductance tolerance across the operating temperature range of −20°C to +70°C. Capacitors use Mundorf M-Cap Supreme polypropylene dielectric rated at 630 V, avoiding the dielectric absorption and ESR characteristics of metallised polyester types that introduce measurable group delay artefacts in the passband transition region.</p>
                <p className="pl-body">The group delay deviation at the acoustic sum point across the ±1 octave band centred on the crossover frequency is ≤ 0.3 ms — equivalent to a physical offset of less than 10 cm, below the audible localisation threshold.</p>
                <div className="pl-pills">
                  {['LR-24 alignment','LEAP 5 optimised','Air-core L in-house','±2% inductance','Mundorf M-Cap PP','GD ≤ 0.3 ms','630V capacitors'].map(p => <span key={p} className="pl-pill">{p}</span>)}
                </div>
                <SpecTable rows={[
                  ['Filter alignment','—','Linkwitz-Riley LR-24 (−24 dB/oct)'],
                  ['Group delay deviation (±1 oct)','—','≤ 0.3 ms'],
                  ['Inductor tolerance','CNC winding','±2%'],
                  ['Inductor type','—','Air-core (no saturation)'],
                  ['Capacitor type','—','Mundorf M-Cap Supreme PP'],
                  ['Capacitor voltage rating','—','630 V'],
                  ['Design tool','—','LEAP 5'],
                  ['Temp range (L tolerance)','—','−20°C to +70°C'],
                ]} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY: XSCACE ─── */}
      <section id="casestudy" className="cs-strip">
        <div className="cs-strip-inner">
          <Reveal>
            <div className="cs-strip-head">
              <span className="cs-label">Case Study</span>
              <h2>XSCACE: all four CAL platforms<br /><GH>in a single product family.</GH></h2>
              <p>XSCACE is CAL's own consumer audio brand — the most complete public demonstration of what co-designing driver, amplifier, enclosure, and crossover as a single physical system produces. The engineering is the same stack available to OEM partners; only the form factor and branding differ.</p>
            </div>
          </Reveal>
          <div className="cs-grid">
            {[
              {
                img: IMG.cane, tag:'Transducer · Enclosure · Crossover', name:'Cane (slim soundbar)',
                desc:'21 mm AeroFrame™ profile. Nano Resonance™ micro-drivers. PrecisionXover™ LR-24 at 2.8 kHz.',
                specs:[['Profile','21 mm'],['Band','80Hz–20kHz'],['SPL','88 dB / 1m']],
              },
              {
                img: IMG.quad, tag:'16-driver array · PrecisionXover™', name:'QuadCane (array)',
                desc:'2S8P series-parallel array. Bl(x) matched within ±1.5%. IMD SMPTE −92 dB system-level.',
                specs:[['Drivers','16×'],['IMD','−92 dB'],['SPL','106 dB']],
              },
              {
                img: IMG.airamp, tag:'Amplifier platform · DSP · VCEM™', name:'Air Amp (streaming amp)',
                desc:'GaN 400kHz PWM. AKM AK4493EQ DAC. SHARC DSP. 0.003% THD+N. LDAC + AirPlay 2.',
                specs:[['THD+N','0.003%'],['SNR','112 dBa'],['DAC','32-bit/192kHz']],
              },
              {
                img: IMG.bonsai, tag:'PowerDense™ · TL enclosure', name:'Bonsai (micro bookshelf)',
                desc:'25 mm full-range. PowerDense™ motor BL = 5.8 T·m. Transmission-line loaded. Ferrofluid VC.',
                specs:[['Driver','25 mm'],['Fs','68 Hz'],['BL','5.8 T·m']],
              },
            ].map(c => (
              <Reveal key={c.name}>
                <div className="cs-card">
                  <img src={c.img} alt={c.name} />
                  <p className="cs-card-tag">{c.tag}</p>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <div className="cs-card-specs">
                    {c.specs.map(([k, v]) => (
                      <div key={k} className="cs-card-spec"><span>{k}</span><span>{v}</span></div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ fontSize:14, color:'#48484a', marginTop:36, lineHeight:1.7, maxWidth:760 }}>
              All XSCACE products ship with full Thiele-Small parameter documentation, anechoic measurement data, and — where applicable — FEM/BEM simulation output. OEM partners receive equivalent technical data packages under NDA.{' '}
              <Link to="/contact" style={{ color:'#2997ff' }}>Request a data package →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:'#000', padding:'110px 0', textAlign:'center', borderTop:'1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth:600, margin:'0 auto', padding:'0 24px' }}>
          <Reveal>
            <p style={{ fontSize:12, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'#48484a', marginBottom:20 }}>OEM Engineering</p>
            <h2 style={{ fontSize:'clamp(30px,4vw,50px)', fontWeight:700, letterSpacing:'-1.8px', color:'#f5f5f7', marginBottom:16, lineHeight:1.06 }}>
              Need a <GH>custom platform</GH><br />specification?
            </h2>
            <p style={{ fontSize:17, color:'#636366', marginBottom:40, lineHeight:1.6 }}>CAL takes OEM engagements for custom driver specifications, amplifier modules, and complete co-designed acoustic systems. Minimum order quantities and NDA terms on request.</p>
            <Link to="/contact" style={{ fontSize:17, padding:'14px 30px', borderRadius:980, background:'#0071e3', color:'#fff', fontWeight:400 }}>Contact engineering</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
