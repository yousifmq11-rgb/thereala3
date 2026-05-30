import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Öljynvaihto Espoo | 3A Service — Kaikki Merkit, Alk. 110 €',
  description:
    'Öljynvaihto Espoossa 110 €. Oikea öljy jokaiseen automerkkiin — BMW, Mercedes, Toyota, Volvo ja muut. AD-valtuutettu, takuu säilyy. Varaa aika.',
};

const CSS = `
  :root{--brand:#E8890A;--brand-d:#C4720A;--brand-l:#FEF3DC;--ink:#1A1A1A;--ink-60:rgba(26,26,26,0.6);--surface:#F5F5F2;--border:#E2E2DC;--adblue:#0044B0;--hero:#111;}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{font-family:'Roboto',sans-serif;color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased;}
  .btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--brand);color:#fff;font-family:'Roboto',sans-serif;font-weight:700;border:none;cursor:pointer;border-radius:8px;padding:13px 24px;font-size:14px;transition:background .18s,transform .14s,box-shadow .18s;box-shadow:0 4px 16px rgba(232,137,10,0.3);text-decoration:none;white-space:nowrap;}
  .btn-primary:hover{background:var(--brand-d);transform:translateY(-1px);box-shadow:0 8px 24px rgba(232,137,10,0.4);}
  .btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:transparent;color:var(--ink);font-family:'Roboto',sans-serif;font-weight:700;border:2px solid var(--ink);cursor:pointer;border-radius:8px;padding:11px 24px;font-size:14px;transition:background .18s,color .18s,transform .14s;text-decoration:none;}
  .btn-outline:hover{background:var(--ink);color:#fff;transform:translateY(-1px);}
  .check-item{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid var(--border);}
  .check-item:last-child{border-bottom:none;}
  .faq-item{border-bottom:1.5px solid var(--border);}
  details.faq-item > summary{list-style:none;cursor:pointer;}
  details.faq-item > summary::-webkit-details-marker{display:none;}
  .faq-q{display:flex;align-items:center;justify-content:space-between;padding:20px 0;cursor:pointer;font-size:18px;font-weight:700;transition:color .15s;gap:16px;}
  .faq-q:hover{color:var(--brand);}
  .faq-a{padding:0 0 18px;font-size:16px;color:var(--ink-60);line-height:1.8;font-weight:400;}
  .benefit-card{background:#fff;border-radius:16px;padding:28px;border:1.5px solid var(--border);transition:border-color .2s,transform .2s,box-shadow .2s;}
  .benefit-card:hover{border-color:rgba(232,137,10,0.4);transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.08);}
  .why-icon{width:52px;height:52px;background:var(--brand-l);border-radius:14px;display:flex;align-items:center;justify-content:center;border:1.5px solid rgba(232,137,10,0.2);margin-bottom:16px;}
  .reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
  .reveal.visible{opacity:1;transform:translateY(0);}
  .section-tag{font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--brand);}
  .alert-banner{background:rgba(232,137,10,0.08);border:1.5px solid rgba(232,137,10,0.3);border-radius:12px;padding:16px 20px;display:flex;align-items:flex-start;gap:12px;margin-bottom:20px;}
  .t-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:20px;margin-bottom:16px;}
  .t-stars{color:#F5A623;font-size:13px;letter-spacing:1px;margin-bottom:10px;}
  .t-text{font-size:16px;color:var(--ink-60);line-height:1.7;font-weight:400;margin-bottom:14px;}
  .t-name{font-size:13px;font-weight:700;color:var(--ink);}
  .t-role{font-size:12px;color:var(--ink-60);font-weight:300;}
  .t-avatar{width:34px;height:34px;border-radius:50%;background:var(--brand-l);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--brand);flex-shrink:0;}
  .hero-accent-line{width:80px;height:3px;background:linear-gradient(90deg,#0F4C81,transparent);border-radius:2px;margin-bottom:24px;animation:accentSlide .7s ease .2s both;}
  @keyframes accentSlide{from{width:0;opacity:0}to{width:80px;opacity:1}}
  .new-hero-grid{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;}
  .srv-main-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;max-width:1100px;margin:0 auto;}
  .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;}
  .grid-services{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
  .reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  #mobile-sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:90;background:#fff;padding:12px 20px;border-top:1.5px solid var(--border);box-shadow:0 -4px 20px rgba(0,0,0,0.1);}
  footer{background:var(--ink);color:rgba(255,255,255,.7);}
  footer h4{color:#fff;font-size:13px;font-weight:700;margin-bottom:14px;letter-spacing:0.06em;text-transform:uppercase;}
  footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}
  footer a:hover{color:var(--brand);}
  @media(max-width:900px){
    .new-hero-grid{grid-template-columns:1fr;}
    .hero-right-panel{display:none!important;}
  }
  @media(max-width:768px){
    .srv-main-grid{grid-template-columns:1fr!important;gap:32px!important;}
    .footer-grid{grid-template-columns:1fr!important;gap:24px!important;}
    .reviews-grid{grid-template-columns:1fr!important;}
    #mobile-sticky{display:flex;gap:10px;}
  }
  @media(max-width:640px){
    .hide-mobile{display:none!important;}
  }
`;

export default function OljynvaihtoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* BREADCRUMB */}
      <div style={{background:'var(--surface)',borderBottom:'1px solid var(--border)',padding:'12px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',alignItems:'center',gap:'8px',fontSize:'13px',color:'var(--ink-60)'}}>
          <a href="https://3aservice.fi" style={{color:'var(--ink-60)',textDecoration:'none'}}>Etusivu</a>
          <span>›</span>
          <a href="https://3aservice.fi/#services-scroll-wrapper" style={{color:'var(--ink-60)',textDecoration:'none'}}>Palvelut</a>
          <span>›</span>
          <span style={{color:'var(--brand)',fontWeight:500}}>Öljynvaihto</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{background:'#fff',padding:'80px 24px 64px',borderBottom:'1.5px solid #E2E8F0'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div className="new-hero-grid">
            <div>
              {/* Badge */}
              <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#EFF6FF',border:'1.5px solid #BFDBFE',borderRadius:'100px',padding:'6px 16px',marginBottom:'28px'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/><path d="M8 12l2.5 2.5L16 9"/>
                </svg>
                <span style={{fontSize:'12px',fontWeight:700,color:'#0F4C81',letterSpacing:'0.08em',textTransform:'uppercase'}}>Öljynvaihto · Espoo · alk. 110 €</span>
              </div>

              <h1 style={{fontSize:'clamp(36px,5.5vw,68px)',fontWeight:900,lineHeight:1.08,letterSpacing:'-0.03em',color:'#0F172A',marginBottom:'12px'}}>
                Öljynvaihto Espoossa —{' '}
                <span style={{color:'#0F4C81'}}>oikea öljy, oikea hinta.</span>
              </h1>

              <div className="hero-accent-line"></div>

              <p style={{fontSize:'18px',color:'#64748B',lineHeight:1.7,marginBottom:'32px',maxWidth:'540px',fontWeight:400}}>
                Moottoriöljy suojaa yli 200 liikkuvaa osaa kulumiselta. Laiminlyöty öljynvaihto on yleisin syy kalliisiin moottorivaurioihin.
              </p>

              {/* Feature pills */}
              <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'36px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'7px',background:'#F8FAFC',border:'1.5px solid #E2E8F0',borderRadius:'10px',padding:'8px 14px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span style={{fontSize:'12px',fontWeight:600,color:'#0F172A'}}>Takuu säilyy</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'7px',background:'#F8FAFC',border:'1.5px solid #E2E8F0',borderRadius:'10px',padding:'8px 14px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  <span style={{fontSize:'12px',fontWeight:600,color:'#0F172A'}}>Kaikki automerkit</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'7px',background:'#F8FAFC',border:'1.5px solid #E2E8F0',borderRadius:'10px',padding:'8px 14px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <span style={{fontSize:'12px',fontWeight:600,color:'#0F172A'}}>Läpinäkyvä hinnoittelu</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'7px',background:'#F8FAFC',border:'1.5px solid #E2E8F0',borderRadius:'10px',padding:'8px 14px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                  <span style={{fontSize:'12px',fontWeight:600,color:'#0F172A'}}>12 kk takuu töille</span>
                </div>
              </div>

              {/* Buttons */}
              <div style={{display:'flex',flexWrap:'wrap',gap:'12px',alignItems:'center'}}>
                <a
                  href="/varaa"
                  style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#0F4C81',color:'#fff',fontWeight:700,fontSize:'15px',padding:'14px 32px',borderRadius:'100px',textDecoration:'none',boxShadow:'0 4px 20px rgba(15,76,129,0.3)',transition:'background .18s,transform .14s'}}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Varaa aika
                </a>
                <a
                  href="tel:+358449773677"
                  style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#fff',color:'#0F4C81',fontWeight:700,fontSize:'15px',padding:'13px 24px',borderRadius:'100px',textDecoration:'none',border:'2px solid #0F4C81',transition:'background .18s,color .18s'}}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z"/></svg>
                  +358 44 977 3677
                </a>
              </div>
            </div>

            {/* Right panel */}
            <div className="hero-right-panel" style={{background:'#0F172A',borderRadius:'24px',padding:'36px',minWidth:'260px',flexShrink:0}}>
              <div style={{fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1,letterSpacing:'-0.04em',marginBottom:'4px'}}>
                4.9<span style={{fontSize:'24px',color:'#F59E0B',marginLeft:'2px'}}>★</span>
              </div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',marginBottom:'28px',fontWeight:500}}>/ 5.0 · Google-arvio</div>
              <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <div style={{width:'36px',height:'36px',background:'rgba(255,255,255,0.07)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <span style={{fontSize:'14px',fontWeight:600,color:'rgba(255,255,255,0.9)'}}>100+ Google-arvostelua</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <div style={{width:'36px',height:'36px',background:'rgba(255,255,255,0.07)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span style={{fontSize:'14px',fontWeight:600,color:'rgba(255,255,255,0.9)'}}>AD-Valtuutettu</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <div style={{width:'36px',height:'36px',background:'rgba(255,255,255,0.07)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <span style={{fontSize:'14px',fontWeight:600,color:'rgba(255,255,255,0.9)'}}>Ma–Pe 8:00–17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section style={{padding:'56px 24px 48px',background:'#fff',borderBottom:'1.5px solid var(--border)'}}>
        <div style={{maxWidth:'880px',margin:'0 auto'}}>
          <p style={{fontSize:'19px',lineHeight:1.85,color:'var(--ink)',fontWeight:400,marginBottom:'18px'}}>
            Moottoriöljy on moottorin verenkierto. Se voitelee yli 200 liikkuvaa osaa, jäähdyttää, tiivistää ja suojaa metallipinnat korroosiolta. Vanha öljy happoontuu, muodostaa karttumia ja menettää suojaominaisuutensa — jolloin moottori alkaa kulua ennenaikaisesti.
          </p>
          <p style={{fontSize:'16px',lineHeight:1.85,color:'var(--ink-60)',fontWeight:300,marginBottom:'36px'}}>
            3A Service Oy vaihtaa öljyn valmistajan hyväksymällä öljyllä ja oikean viskositeetin mukaan. Tarkistamme aina rekisterinumerolla oikean öljyspesifikaation — sinun ei tarvitse selvittää sitä itse.
          </p>

          {/* 3 stat cards */}
          <div style={{display:'flex',flexWrap:'wrap',gap:'14px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 20px',background:'var(--surface)',border:'1.5px solid var(--border)',borderRadius:'12px'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              <div>
                <div style={{fontSize:'11px',color:'var(--ink-60)',fontWeight:500,textTransform:'uppercase',letterSpacing:'0.08em'}}>Öljynvaihto</div>
                <div style={{fontSize:'15px',fontWeight:700}}>30–45 min</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 20px',background:'var(--surface)',border:'1.5px solid var(--border)',borderRadius:'12px'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div>
                <div style={{fontSize:'11px',color:'var(--ink-60)',fontWeight:500,textTransform:'uppercase',letterSpacing:'0.08em'}}>Vaihtoväli</div>
                <div style={{fontSize:'15px',fontWeight:700}}>12 kk / 15 000 km</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 20px',background:'var(--surface)',border:'1.5px solid var(--border)',borderRadius:'12px'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <div>
                <div style={{fontSize:'11px',color:'var(--ink-60)',fontWeight:500,textTransform:'uppercase',letterSpacing:'0.08em'}}>Kaikki merkit</div>
                <div style={{fontSize:'15px',fontWeight:700}}>BMW, VW, Toyota...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{padding:'80px 24px',background:'#fff'}}>
        <div className="srv-main-grid">
          <div className="reveal">
            <p className="section-tag">Mitä sisältyy</p>
            <h2 style={{fontSize:'clamp(28px,3.5vw,42px)',fontWeight:900,letterSpacing:'-0.03em',margin:'12px 0 32px',lineHeight:1.1}}>
              Kaikki sisältyy hintaan
            </h2>
            <div>
              {[
                {title:'Vanhan öljyn täydellinen tyhjennys', desc:'Tyhjennämme öljyn kokonaan, ei vain täydennetä vanhan päälle'},
                {title:'Uusi moottoriöljy (valmistajan hyväksymä spec)', desc:'Oikea öljytyyppi ja viskositeetti rekisterinumerosi perusteella'},
                {title:'Uusi öljynsuodatin — aina, joka kerta', desc:'Vanha suodatin kierrättää epäpuhtaudet takaisin — vaihdetaan aina'},
                {title:'Öljytulpan tiivisteen tarkistus', desc:'Vuotava tulppa voi tyhjentyä huomaamatta'},
                {title:'Öljyvuotojen tarkistus', desc:'Tarkistamme moottoritilasta näkyvät vuodot samalla'},
                {title:'Öljymäärän säätö täsmälleen oikeaksi', desc:'Liika öljy on yhtä haitallista kuin liian vähän'},
                {title:'Huoltokirjamerkintä', desc:'Takuusi ja auton jälleenmyyntiarvo säilyvät'},
                {title:'Ilmainen pikakatsaus nestepintoihin', desc:'Jarru-, jäähdytin- ja ohjausnesteen taso'},
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0,marginTop:'1px'}}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <div>
                    <div style={{fontWeight:700,fontSize:'17px',marginBottom:'5px'}}>{item.title}</div>
                    <div style={{fontSize:'15px',color:'var(--ink-60)',fontWeight:400}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{display:'flex',flexDirection:'column',gap:'20px'}}>
            {/* Pricing box */}
            <div style={{background:'var(--brand-l)',border:'1.5px solid rgba(232,137,10,0.25)',borderRadius:'20px',padding:'32px'}}>
              <div style={{fontSize:'11px',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--brand)',marginBottom:'12px'}}>Hinnoittelu</div>
              <h3 style={{fontSize:'22px',fontWeight:900,marginBottom:'16px'}}>Öljynvaihto alk. 110 €</h3>
              <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'16px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid rgba(232,137,10,0.2)'}}>
                  <span style={{fontSize:'14px',fontWeight:500}}>Öljynvaihto synteettinen öljy</span>
                  <span style={{fontSize:'16px',fontWeight:700,color:'var(--brand)'}}>110 €</span>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid rgba(232,137,10,0.2)'}}>
                  <span style={{fontSize:'14px',fontWeight:500}}>Öljynvaihto + laaja tarkastus</span>
                  <span style={{fontSize:'16px',fontWeight:700,color:'var(--brand)'}}>135 €</span>
                </div>
              </div>
              <p style={{fontSize:'13px',color:'var(--ink-60)',lineHeight:1.65,marginBottom:'8px',fontWeight:300}}>
                Hinta riippuu automallista ja öljymäärästä. Hinnat sisältävät öljyn, suodattimen ja työn. (sis. alv 25,5%)
              </p>
              <p style={{fontSize:'13px',color:'var(--brand)',fontWeight:700,marginBottom:'20px'}}>Tarjous etukäteen — ei yllätyksiä.</p>
              <a href="/varaa" className="btn-primary" style={{width:'100%',justifyContent:'center',padding:'13px',gap:'8px'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Varaa aika
              </a>
            </div>

            {/* AD Badge */}
            <div style={{background:'var(--surface)',borderRadius:'16px',padding:'24px',border:'1.5px solid var(--border)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'44px',height:'44px',background:'var(--adblue)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div style={{fontWeight:700,fontSize:'15px'}}>AD-Valtuutettu</div>
                  <div style={{fontSize:'14px',color:'var(--ink-60)',fontWeight:400}}>Takuusi säilyy EU-lain mukaan</div>
                </div>
              </div>
            </div>

            {/* Alert */}
            <div className="alert-banner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0,marginTop:'1px'}}>
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px',color:'var(--brand)'}}>Muista vaihtoväli</div>
                <p style={{fontSize:'13px',color:'var(--ink-60)',lineHeight:1.6,fontWeight:300}}>
                  Öljynvaihto kerran vuodessa tai 15 000 km — kumpi tulee ensin. Jos et muista milloin viimeksi — on jo liian kauan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 SECTIONS */}
      <section style={{background:'var(--surface)',padding:'80px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div className="reveal" style={{marginBottom:'64px'}}>
            <p className="section-tag">Miksi öljynvaihto</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 20px',lineHeight:1.1}}>
              Miksi öljynvaihto on moottorin tärkein yksittäinen huolto?
            </h2>
            <div style={{maxWidth:'800px',display:'flex',flexDirection:'column',gap:'12px'}}>
              <p style={{fontSize:'16px',lineHeight:1.8,color:'var(--ink)',fontWeight:400}}>
                Moottoriöljy suojelee 200+ liikkuvaa osaa. Vanha öljy happoontuu ja muodostaa karstoittumia jotka tukkivat öljykanavia. Öljynvaihto kerran vuodessa tai 15 000 km — kumpi tulee ensin.
              </p>
              <p style={{fontSize:'16px',lineHeight:1.8,color:'var(--ink-60)',fontWeight:400}}>
                Kaupunkiajo ja lyhyet matkat alle 10 km kuluttavat öljyä nopeammin kuin pitkät matkat. Öljynvaihdon laiminlyönti = moottorin ennenaikainen kuluminen = 3 000–8 000 € korjaus.
              </p>
              <div style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'12px',padding:'20px 24px',display:'flex',alignItems:'center',gap:'24px',flexWrap:'wrap'}}>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:'28px',fontWeight:900,color:'var(--brand)'}}>110 €</div>
                  <div style={{fontSize:'13px',color:'var(--ink-60)',fontWeight:500}}>Öljynvaihto</div>
                </div>
                <div style={{fontSize:'24px',color:'var(--ink-60)',fontWeight:300}}>vs</div>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:'28px',fontWeight:900,color:'#DC2626'}}>5 800 €</div>
                  <div style={{fontSize:'13px',color:'var(--ink-60)',fontWeight:500}}>Moottorin vaihto</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{marginBottom:'64px'}}>
            <p className="section-tag">Vaihtoväli</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 20px',lineHeight:1.1}}>
              Öljynvaihtoväli — milloin on oikea aika?
            </h2>
            <div style={{maxWidth:'800px'}}>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'14px',marginBottom:'20px'}}>
                {[
                  {type:'Synteettinen öljy',interval:'15 000–20 000 km TAI viimeistään 12 kk'},
                  {type:'Puolisynteettinen',interval:'10 000 km TAI 12 kk'},
                  {type:'Mineraaliöljy',interval:'7 500 km TAI 6 kk'},
                ].map((row,i) => (
                  <div key={i} style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'12px',padding:'16px 20px'}}>
                    <div style={{fontSize:'13px',fontWeight:700,color:'var(--brand)',marginBottom:'6px'}}>{row.type}</div>
                    <div style={{fontSize:'14px',color:'var(--ink)',fontWeight:500}}>{row.interval}</div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <p style={{fontSize:'15px',lineHeight:1.8,color:'var(--ink-60)'}}>Kaupunkiajo: tiheämmin kuin pitkämatka-ajo. Lyhyet matkat alle 10 km: erityisen haitallisia (moottori ei ehdi lämmetä kunnolla → kondensaattivesi öljyssä).</p>
                <p style={{fontSize:'15px',lineHeight:1.8,color:'var(--ink-60)'}}>Vanhemmat autot: useammin kuin uudet. <strong style={{color:'var(--ink)'}}>Jos et muista milloin viimeksi — on jo liian kauan.</strong></p>
                <p style={{fontSize:'14px',color:'var(--ink-60)'}}>Merkkivaloja: öljynpainemerkkivalo, huoltovälimittari, tummunnut öljy tikulla.</p>
              </div>
            </div>
          </div>

          <div className="reveal" style={{marginBottom:'64px'}}>
            <p className="section-tag">Öljyn valinta</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 20px',lineHeight:1.1}}>
              Mikä öljy sopii autooni?
            </h2>
            <div style={{maxWidth:'800px',display:'flex',flexDirection:'column',gap:'14px'}}>
              <p style={{fontSize:'16px',lineHeight:1.8,color:'var(--ink)'}}>Viskositeettikoodi 5W-30 tarkoittaa: jäykkä kylmässä (5W), juokseva lämpimässä (30). Jokainen automerkki vaatii oman spesifikaationsa:</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'12px'}}>
                {[
                  {brand:'BMW',spec:'Longlife-luokan öljy (BMW LL-01/04)'},
                  {brand:'Mercedes-Benz',spec:'MB 229.5 / 229.51 spec'},
                  {brand:'Toyota / Hybridit',spec:'Usein 0W-20 synteettinen'},
                  {brand:'VW / Audi / Škoda',spec:'VW 504/507 (erityisen tärkeä DSG-autoille)'},
                ].map((item,i) => (
                  <div key={i} style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'10px',padding:'14px 18px'}}>
                    <div style={{fontSize:'14px',fontWeight:700,marginBottom:'4px'}}>{item.brand}</div>
                    <div style={{fontSize:'13px',color:'var(--ink-60)'}}>{item.spec}</div>
                  </div>
                ))}
              </div>
              <div className="alert-banner" style={{marginBottom:0}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0,marginTop:'1px'}}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <p style={{fontSize:'14px',color:'var(--ink-60)',lineHeight:1.6,fontWeight:300}}>
                  Tarkistamme aina oikean öljyspesifikaation rekisterinumerollasi — et joudu selvittämään itse. Väärän öljyn riskit: tiivistevauriot, lisääntynyt kuluminen, takuun menettäminen.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="section-tag">Korjaamolla</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 20px',lineHeight:1.1}}>
              Öljynvaihto ammattilaisella — mitä tapahtuu korjaamolla?
            </h2>
            <div style={{maxWidth:'800px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'16px'}}>
              {[
                {icon:'1',text:'Öljy lasketaan kokonaan pois — ei vain täydennetä vanhan päälle'},
                {icon:'2',text:'Suodatin vaihdetaan aina — vanha suodatin kierrättää epäpuhtaudet takaisin'},
                {icon:'3',text:'Öljynsuodatin kerää metallipartikkeleja ja epäpuhtauksia öljystä'},
                {icon:'4',text:'Huoltokirjamerkintä säilyttää takuun ja auton jälleenmyyntiarvon'},
                {icon:'5',text:'Ammattilaisella öljynvaihto = tilaisuus havaita muita piileviä vikoja (vuodot, letkut, tiivisteet)'},
              ].map((step,i) => (
                <div key={i} style={{display:'flex',alignItems:'flex-start',gap:'14px',background:'#fff',border:'1.5px solid var(--border)',borderRadius:'12px',padding:'16px 20px'}}>
                  <div style={{width:'30px',height:'30px',background:'var(--brand-l)',border:'1.5px solid rgba(232,137,10,0.3)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'13px',fontWeight:700,color:'var(--brand)'}}>
                    {step.icon}
                  </div>
                  <p style={{fontSize:'15px',lineHeight:1.65,color:'var(--ink)',fontWeight:400}}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'80px 24px',background:'#fff'}}>
        <div style={{maxWidth:'720px',margin:'0 auto'}}>
          <div className="reveal" style={{textAlign:'center',marginBottom:'48px'}}>
            <p className="section-tag">FAQ</p>
            <h2 style={{fontSize:'clamp(24px,3vw,36px)',fontWeight:900,letterSpacing:'-0.02em',marginTop:'10px'}}>Usein kysyttyä — Öljynvaihto</h2>
          </div>
          <div className="reveal">
            {[
              {
                q:'Mitä tapahtuu jos öljyvalo syttyy ajon aikana?',
                a:'EI saa jatkaa ajamista. Pysähdy heti turvalliseen paikkaan ja sammuta moottori. Öljyvalo tarkoittaa alhaista öljynpainetta — ajaminen voi vaurioittaa moottorin pysyvästi muutamassa minuutissa. Soita meille: +358 44 977 3677.'
              },
              {
                q:'Kuinka usein öljy pitää vaihtaa?',
                a:'Synteettinen öljy: 15 000–20 000 km tai 12 kuukautta — kumpi tulee ensin. Kaupunkiajossa ja lyhyillä matkoilla vähintään kerran vuodessa. Vanhemmissa autoissa useammin. Tarkista oman autosi vaihtoväli huoltokirjasta tai kysy meiltä.'
              },
              {
                q:'Voiko öljyä lisätä itse välissä?',
                a:'Kyllä — mutta käytä AINA samaa öljyspeciä kuin moottorissa on. Väärän öljyn sekoittaminen voi aiheuttaa tiivisteongelmia. Voit tarkistaa oikean öljytyypin huoltokirjasta tai konepellin alta olevasta tarrasta.'
              },
              {
                q:'Kuinka öljymäärä tarkistetaan itse?',
                a:'1) Pysäköi tasaiselle alustalle, sammuta moottori. 2) Odota 5–10 min. 3) Vedä mittatikku ulos, pyyhi puhtaaksi, palauta paikalleen. 4) Vedä uudelleen ulos — tason tulee olla min- ja max-viivan välillä. 5) Tumma tai likainen öljy = vaihdon aika.'
              },
              {
                q:'Kauanko öljynvaihto kestää?',
                a:'30–45 minuuttia. Voit odottaa meillä kahvilla. Ajanvaraus suositeltava — näin varmistamme ettei odotusaika veny.'
              },
              {
                q:'Pitääkö öljynsuodatin vaihtaa joka öljynvaihdon yhteydessä?',
                a:'Kyllä — aina, poikkeuksetta. Vanha suodatin kerää epäpuhtaudet ja metallipartikkelit öljystä. Jos suodatinta ei vaihdeta, ne päätyvät uuden öljyn mukana takaisin moottoriin.'
              },
              {
                q:'Säilyykö uuden auton takuu jos teen öljynvaihdon teillä?',
                a:'Kyllä. EU-laki takaa, että voit valita huoltopaikan vapaasti ilman takuun menettämistä. AD-valtuutettuna korjaamona kirjaamme kaikki huollot valmistajan ohjeiden mukaan huoltokirjaan.'
              },
              {
                q:'Mitä eroa on synteettisellä ja puolisynteettisellä öljyllä?',
                a:'Synteettinen öljy kestää paremmin korkeita lämpötiloja, sopii turbomoottorin ja pitkät vaihtovälit. Puolisynteettinen on edullisempi ja sopii vanhempiin moottoreihin. Useimmat nykyautot vaativat synteettistä. Tarkistamme aina oikean valinnan juuri sinun autoosi.'
              },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">
                  <span>{item.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0}}>
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </summary>
                <div className="faq-a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{background:'var(--surface)',padding:'80px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div className="reveal" style={{textAlign:'center',marginBottom:'48px'}}>
            <p className="section-tag">Google Reviews</p>
            <h2 style={{fontSize:'clamp(24px,3vw,36px)',fontWeight:900,letterSpacing:'-0.02em',marginTop:'10px'}}>Mitä asiakkaamme sanovat</h2>
          </div>
          <div className="reviews-grid reveal">
            {[
              {
                text:'BMW:n öljynvaihto LL-04 öljyllä. Osasivat oikean spesifikaation heti — ei tarvinnut itse selvittää. Huoltokirja kunnossa.',
                name:'Jani K.',
                role:'BMW 5-sarja, 180 000 km',
                initial:'J',
              },
              {
                text:'Tuli kiireessä ilman ajanvarausta. 35 minuuttia ja lähdin. Hinta täsmälleen mitä lupasivat.',
                name:'Sari L.',
                role:'Toyota RAV4',
                initial:'S',
              },
              {
                text:'Kertoivat rehellisesti että jarruneste olisi pian syytä vaihtaa. Ei pakottaneet — vain tiedottivat. Juuri noin pitää toimia.',
                name:'Petri M.',
                role:'Volvo V60',
                initial:'P',
              },
            ].map((review, i) => (
              <div key={i} className="t-card">
                <div className="t-stars">★★★★★</div>
                <p className="t-text">{review.text}</p>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <div className="t-avatar">{review.initial}</div>
                  <div>
                    <div className="t-name">{review.name}</div>
                    <div className="t-role">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'var(--ink)',padding:'64px 24px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(232,137,10,0.12) 0%,transparent 60%)',pointerEvents:'none'}}></div>
        <div style={{maxWidth:'700px',margin:'0 auto',textAlign:'center',position:'relative'}}>
          <h2 style={{fontSize:'clamp(26px,4vw,40px)',fontWeight:900,color:'#fff',letterSpacing:'-0.03em',marginBottom:'14px'}}>
            Milloin viimeksi vaihdoit öljyn?
          </h2>
          <p style={{fontSize:'16px',color:'rgba(255,255,255,0.7)',marginBottom:'32px',fontWeight:300}}>
            Jos et muista — on jo liian kauan. Öljynvaihto valmistuu 30–45 minuutissa, usein ilman ajanvarausta.
          </p>
          <a
            href="/varaa"
            style={{display:'inline-flex',alignItems:'center',gap:'10px',background:'var(--brand)',color:'#fff',fontWeight:700,fontSize:'16px',padding:'15px 36px',borderRadius:'100px',textDecoration:'none',boxShadow:'0 4px 20px rgba(232,137,10,0.4)',transition:'background .18s,transform .14s'}}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Varaa öljynvaihto — 110 €
          </a>
        </div>
      </section>

      {/* AutoJerry */}
      <section style={{padding:'56px 24px',background:'#F5F5F2'}}>
        <div style={{maxWidth:'960px',margin:'0 auto',textAlign:'center'}}>
          <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'#E8890A',marginBottom:'10px'}}>ASIAKASARVOSTELUT</div>
          <h2 style={{fontSize:'clamp(22px,4vw,34px)',fontWeight:900,color:'#0F172A',marginBottom:'8px'}}>Mitä asiakkaamme sanovat</h2>
          <p style={{fontSize:'15px',color:'#64748B',marginBottom:'32px'}}>Oikeat arvostelut — AutoJerry-palvelun kautta</p>
          <iframe
            src="https://autojerry.fi/arvostelut/upotus-2/8441/"
            style={{width:'100%',border:'none',borderRadius:'16px',minHeight:'500px',display:'block'}}
            loading="lazy"
            title="AutoJerry Asiakasarvostelut"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'48px 24px 0'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div className="footer-grid" style={{paddingBottom:'40px'}}>
            <div>
              <img src="/logo/pomelli_bdna_image_0509.png" alt="3A Service Oy" style={{height:'48px',width:'auto',marginBottom:'14px',display:'block'}} />
              <p style={{fontSize:'14px'}}>Luotettavaa autohuoltoa Espoossa.</p>
              <div style={{display:'flex',gap:'8px',marginTop:'16px'}}>
                <a href="https://www.facebook.com/profile.php?id=61556218666083" target="_blank" rel="noreferrer" style={{width:'34px',height:'34px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(255,255,255,0.7)'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/3a_service_oy/" target="_blank" rel="noreferrer" style={{width:'34px',height:'34px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'7px',display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(255,255,255,0.7)'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Palvelut</h4>
              <a href="https://3aservice.fi/services/maaraikaishuolto.html">Määräaikaishuolto</a>
              <a href="https://3aservice.fi/services/jakohihna.html">Jakohihnan Vaihto</a>
              <a href="https://3aservice.fi/services/oljynvaihto.html" style={{color:'var(--brand)'}}>Öljynvaihto</a>
              <a href="https://3aservice.fi/services/jarrut.html">Jarrujen Vaihto</a>
              <a href="https://3aservice.fi/services/ilmastointi.html">Ilmastointi</a>
              <a href="https://3aservice.fi/services/vaihteisto-kytkin.html">Vaihteisto &amp; Kytkin</a>
              <a href="https://3aservice.fi/services/alusta.html">Alusta &amp; Jousitus</a>
              <a href="https://3aservice.fi/services/katsastus.html">Katsastushuolto</a>
              <a href="https://3aservice.fi/services/sahkotyot.html">Sähkötyöt</a>
              <a href="https://3aservice.fi/services/vikadiagnostiikka.html">Vikadiagnostiikka</a>
              <a href="https://3aservice.fi/services/renkaat.html">Renkaiden Palvelut</a>
              <a href="https://3aservice.fi/services/pesula.html">Autopesula</a>
            </div>
            <div>
              <h4>Yhteystiedot</h4>
              <a href="tel:+358449773677">+358 44 977 3677</a>
              <a href="mailto:info@3aservice.fi">info@3aservice.fi</a>
              <a href="https://maps.app.goo.gl/68533AxtrqMYACAVA" target="_blank" rel="noreferrer">Sillankorva 8, 02300 Espoo</a>
              <a href="https://3aservice.fi/#contact">Ma–Pe 8:00–17:00</a>
            </div>
          </div>
          <div style={{borderTop:'1px solid rgba(255,255,255,0.08)',padding:'18px 0'}}>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,0.35)'}}>© 2026 3A Service Oy | Autohuolto</p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div id="mobile-sticky">
        <a href="/varaa" className="btn-primary" style={{flex:1,justifyContent:'center',padding:'13px',fontSize:'15px',gap:'8px'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Varaa aika
        </a>
        <a
          href="tel:+358449773677"
          style={{width:'46px',height:'46px',display:'flex',alignItems:'center',justifyContent:'center',border:'1.5px solid var(--border)',borderRadius:'8px',color:'var(--ink-60)',flexShrink:0,textDecoration:'none'}}
          aria-label="+358 44 977 3677"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
