import { useState } from 'react'
import Reveal from '../components/Reveal'

const GH = ({ children }) => (
  <span style={{ background:'linear-gradient(135deg,#f5f5f7 0%,#2997ff 55%,#7b2ff7 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
    {children}
  </span>
)

const css = `
.ct-hero { padding:140px 0 80px; background:#000; text-align:center; position:relative; overflow:hidden; }
.ct-hero-glow { position:absolute;inset:0;background:radial-gradient(ellipse 60% 45% at 50% 0%,rgba(0,113,227,.16),transparent);pointer-events:none; }
.ct-hero-inner { position:relative;z-index:2;max-width:700px;margin:0 auto;padding:0 24px; }
.ct-hero h1 { font-size:clamp(44px,7vw,80px);font-weight:700;letter-spacing:-3px;line-height:1.02;color:#f5f5f7;margin-bottom:18px; }
.ct-hero p { font-size:19px;font-weight:300;color:#636366;line-height:1.55; }

.ct-main { padding:80px 0 120px; background:#000; border-top:1px solid rgba(255,255,255,.06); }
.ct-main-inner { max-width:1080px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1.3fr;gap:80px; }

/* sidebar */
.ct-sidebar h2 { font-size:28px;font-weight:600;letter-spacing:-.8px;color:#f5f5f7;margin-bottom:8px; }
.ct-sidebar p { font-size:15px;color:#636366;line-height:1.65;margin-bottom:32px; }
.ct-cards { display:flex;flex-direction:column;gap:14px; }
.ct-card { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:22px 24px; }
.ct-card h4 { font-size:14px;font-weight:600;color:#f5f5f7;margin-bottom:4px; }
.ct-card p { font-size:13px;color:#48484a;margin-bottom:0; }
.ct-card a { font-size:14px;color:#2997ff; }

/* form */
.ct-form-wrap { background:#111;border:1px solid rgba(255,255,255,.07);border-radius:24px;padding:44px; }
.ct-form-title { font-size:22px;font-weight:600;color:#f5f5f7;margin-bottom:6px; }
.ct-form-sub { font-size:14px;color:#636366;margin-bottom:32px; }
.ct-row { display:grid;grid-template-columns:1fr 1fr;gap:16px; }
.ct-field { margin-bottom:20px; }
.ct-field label { display:block;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#636366;margin-bottom:8px; }
.ct-field input,.ct-field select,.ct-field textarea {
  width:100%; background:#1a1a1a; border:1px solid rgba(255,255,255,.1); border-radius:10px;
  padding:13px 16px; font-size:15px; color:#f5f5f7; outline:none; font-family:inherit; box-sizing:border-box;
  transition:border-color .2s;
}
.ct-field input:focus,.ct-field select,.ct-field textarea:focus { border-color:#0071e3; }
.ct-field select option { background:#1a1a1a; }
.ct-field textarea { resize:vertical; min-height:120px; }
.ct-submit {
  width:100%; padding:15px; border-radius:12px; background:#0071e3; color:#fff;
  font-size:16px; font-weight:500; cursor:pointer; border:none; font-family:inherit;
  transition:background .2s;
}
.ct-submit:hover { background:#0077ed; }
.ct-submit:disabled { background:#2a2a2a;color:#636366;cursor:not-allowed; }
.ct-success { text-align:center;padding:48px 24px; }
.ct-success h3 { font-size:22px;font-weight:600;color:#f5f5f7;margin-bottom:10px; }
.ct-success p { font-size:15px;color:#636366; }

/* careers */
.ct-careers { padding:100px 0; background:#0a0a0a; border-top:1px solid rgba(255,255,255,.06); }
.ct-careers-inner { max-width:1080px;margin:0 auto;padding:0 24px; }
.ct-careers-head { max-width:560px;margin-bottom:48px; }
.ct-careers-head h2 { font-size:clamp(32px,4vw,52px);font-weight:700;letter-spacing:-1.8px;color:#f5f5f7;margin-bottom:14px;line-height:1.06; }
.ct-careers-head p { font-size:17px;color:#636366; }
.role-list { display:flex;flex-direction:column;gap:14px; }
.role { display:flex;justify-content:space-between;align-items:center;background:#111;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:22px 28px;gap:20px;flex-wrap:wrap; }
.role-left h4 { font-size:17px;font-weight:600;color:#f5f5f7;margin-bottom:4px; }
.role-left p { font-size:13px;color:#48484a; }
.role-chips { display:flex;gap:8px;flex-wrap:wrap; }
.role-chip { padding:4px 12px;border-radius:980px;border:1px solid rgba(0,113,227,.25);font-size:11px;color:#2997ff;font-family:ui-monospace,monospace; }
.role-btn { padding:9px 20px;border-radius:980px;background:#0071e3;color:#fff;font-size:13px;font-weight:400;border:none;cursor:pointer;white-space:nowrap;font-family:inherit; }

@media(max-width:760px){
  .ct-main-inner{grid-template-columns:1fr;}
  .ct-row{grid-template-columns:1fr;}
  .ct-form-wrap{padding:28px;}
  .role{flex-direction:column;align-items:flex-start;}
}
`

const ROLES = [
  { title:'Senior Transducer Engineer', loc:'Mississauga, ON · Full-time', chips:['FEM/BEM','Thiele-Small','COMSOL','Motor Design'] },
  { title:'Class-D Amplifier Designer', loc:'Mississauga, ON · Full-time', chips:['GaN MOSFET','PCB Layout','EMC/EMI','SPICE'] },
  { title:'DSP Firmware Engineer', loc:'Remote or Mississauga · Full-time', chips:['SHARC DSP','C/C++','IIR/FIR','AES67'] },
  { title:'Acoustic Measurement Technician', loc:'Mississauga, ON · Full-time', chips:['Klippel','Laser Vibrometry','Anechoic','AES17'] },
  { title:'Manufacturing Process Engineer', loc:'Mississauga, ON · Full-time', chips:['SPC','6 Sigma','ISO 9001','CNC'] },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', company:'', type:'General', message:'' })

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <style>{css}</style>

      <section className="ct-hero">
        <div className="ct-hero-glow" />
        <div className="ct-hero-inner">
          <p style={{ fontSize:17, color:'#48484a', marginBottom:16 }}>Contact</p>
          <h1>Let's build<br /><GH>something precise.</GH></h1>
          <p>Whether you need a custom transducer, an OEM amplifier platform, or a complete acoustic system — start with a conversation.</p>
        </div>
      </section>

      <section className="ct-main">
        <div className="ct-main-inner">
          <Reveal>
            <div className="ct-sidebar">
              <h2>Talk to our<br />engineering team.</h2>
              <p>CAL engineers are available for NDA-covered technical briefings, OEM consultations, joint development agreements, and custom driver specifications.</p>
              <div className="ct-cards">
                <div className="ct-card">
                  <h4>Sales & OEM partnerships</h4>
                  <p>Volume licensing, private-label manufacturing, custom driver specifications.</p>
                  <a href="mailto:oem@canadianaudio.ca">oem@canadianaudio.ca</a>
                </div>
                <div className="ct-card">
                  <h4>Technical support</h4>
                  <p>Integration guides, measurement data, Thiele-Small parameter sets.</p>
                  <a href="mailto:engineering@canadianaudio.ca">engineering@canadianaudio.ca</a>
                </div>
                <div className="ct-card">
                  <h4>Press & media</h4>
                  <p>High-resolution assets, technical white papers, executive interviews.</p>
                  <a href="mailto:press@canadianaudio.ca">press@canadianaudio.ca</a>
                </div>
                <div className="ct-card">
                  <h4>Head office</h4>
                  <p>2200 Meadowvale Blvd, Unit 12<br />Mississauga, Ontario L5N 6M5</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="ct-form-wrap">
              {sent ? (
                <div className="ct-success">
                  <div style={{ fontSize:48, marginBottom:16 }}>✓</div>
                  <h3>Message received.</h3>
                  <p>An engineer will follow up within one business day.<br />For urgent matters, email engineering@canadianaudio.ca directly.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <p className="ct-form-title">Send us a message</p>
                  <p className="ct-form-sub">All fields are required. We respond within one business day.</p>
                  <div className="ct-row">
                    <div className="ct-field">
                      <label>Full name</label>
                      <input required value={form.name} onChange={set('name')} placeholder="Jane Smith" />
                    </div>
                    <div className="ct-field">
                      <label>Email address</label>
                      <input required type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div className="ct-row">
                    <div className="ct-field">
                      <label>Company / Organisation</label>
                      <input value={form.company} onChange={set('company')} placeholder="Acme Audio Inc." />
                    </div>
                    <div className="ct-field">
                      <label>Enquiry type</label>
                      <select value={form.type} onChange={set('type')}>
                        <option>General</option>
                        <option>OEM / Manufacturing</option>
                        <option>Custom Driver Spec</option>
                        <option>Amplifier Platform</option>
                        <option>Technical Support</option>
                        <option>Press / Media</option>
                        <option>Careers</option>
                      </select>
                    </div>
                  </div>
                  <div className="ct-field">
                    <label>Message</label>
                    <textarea required value={form.message} onChange={set('message')} placeholder="Describe your project, application, or question. Include any relevant technical parameters (driver size, power budget, bandwidth, SPL requirement, etc.)." />
                  </div>
                  <button type="submit" className="ct-submit">Send message →</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="careers" className="ct-careers">
        <div className="ct-careers-inner">
          <Reveal>
            <div className="ct-careers-head">
              <p style={{ fontSize:13, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'#48484a', marginBottom:14 }}>Careers</p>
              <h2>Build the next<br /><GH>generation of audio.</GH></h2>
              <p style={{ marginTop:14 }}>CAL is hiring engineers who think in Thiele-Small parameters, not marketing claims. We offer a competitive salary, full benefits, and access to a fully-equipped anechoic chamber and manufacturing floor.</p>
            </div>
          </Reveal>
          <div className="role-list">
            {ROLES.map(r => (
              <Reveal key={r.title}>
                <div className="role">
                  <div className="role-left">
                    <h4>{r.title}</h4>
                    <p>{r.loc}</p>
                  </div>
                  <div className="role-chips">{r.chips.map(c => <span key={c} className="role-chip">{c}</span>)}</div>
                  <button className="role-btn" onClick={() => alert('Apply via email: careers@canadianaudio.ca')}>Apply →</button>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ fontSize:14, color:'#48484a', marginTop:32 }}>Don't see a fit? Send a speculative application to <a href="mailto:careers@canadianaudio.ca" style={{ color:'#2997ff' }}>careers@canadianaudio.ca</a> with your CV and a description of what you'd build at CAL.</p>
        </div>
      </section>
    </>
  )
}
