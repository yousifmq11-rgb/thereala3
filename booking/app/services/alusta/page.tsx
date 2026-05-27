import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alusta & Jousitus Espoo | 3A Service — Iskunvaimentimet, Pallonivel',
  description:
    'Alustan korjaus Espoossa. Iskunvaimentimet, jouset, pallonivel, raidentanko, tukivarret, pyörälaakerit. Nelipyöräsuuntaus. AD-valtuutettu Niittykummussa. Kaikki automerkit.',
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
  details.faq-item summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;padding:20px 0;font-size:17px;font-weight:700;}
  details.faq-item summary::-webkit-details-marker{display:none;}
  .faq-a{display:none;}
  details[open] .faq-a{display:block;}
  .benefit-card{background:#fff;border-radius:16px;padding:28px;border:1.5px solid var(--border);transition:border-color .2s,transform .2s,box-shadow .2s;}
  .benefit-card:hover{border-color:rgba(232,137,10,0.4);transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.08);}
  .why-icon{width:52px;height:52px;background:var(--brand-l);border-radius:14px;display:flex;align-items:center;justify-content:center;border:1.5px solid rgba(232,137,10,0.2);margin-bottom:16px;}
  .reveal{opacity:1;transform:none;}
  .section-tag{font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--brand);}
  .alert-banner{background:rgba(232,137,10,0.08);border:1.5px solid rgba(232,137,10,0.3);border-radius:12px;padding:16px 20px;display:flex;align-items:flex-start;gap:12px;margin-bottom:20px;}
  .t-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:20px;margin-bottom:16px;}
  .t-stars{color:#F5A623;font-size:13px;letter-spacing:1px;margin-bottom:10px;}
  .t-text{font-size:16px;color:var(--ink-60);line-height:1.7;font-weight:400;margin-bottom:14px;}
  .t-name{font-size:13px;font-weight:700;color:var(--ink);}
  .t-role{font-size:12px;color:var(--ink-60);font-weight:300;}
  .t-avatar{width:34px;height:34px;border-radius:50%;background:var(--brand-l);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--brand);flex-shrink:0;}
  .hero-accent-line{width:80px;height:3px;background:linear-gradient(90deg,#0F4C81,transparent);border-radius:2px;margin-bottom:24px;}
  .new-hero-grid{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;}
  .srv-main-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;max-width:1100px;margin:0 auto;}
  .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;}
  .grid-services{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
  .reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .pricing-table{width:100%;border-collapse:collapse;}
  .pricing-table tr{border-bottom:1px solid var(--border);}
  .pricing-table td{padding:10px 0;font-size:14px;}
  .pricing-table td:last-child{text-align:right;font-weight:700;color:var(--brand);}
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

export default function AlustaPage() {
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
          <span style={{color:'var(--brand)',fontWeight:500}}>Alusta &amp; Jousitus</span>
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span style={{fontSize:'12px',fontWeight:700,color:'#0F4C81',letterSpacing:'0.08em',textTransform:'uppercase' as const}}>Alusta &amp; Jousitus · Espoo</span>
              </div>

              <h1 style={{fontSize:'clamp(36px,5.5vw,68px)',fontWeight:900,lineHeight:1.08,letterSpacing:'-0.03em',color:'#0F172A',marginBottom:'12px'}}>
                Alustan korjaus Espoossa —{' '}
                <span style={{color:'#0F4C81'}}>iskunvaimentimet, pallonivel, raidentanko.</span>
              </h1>

              <div className="hero-accent-line"></div>

              <p style={{fontSize:'18px',color:'#64748B',lineHeight:1.7,marginBottom:'32px',maxWidth:'540px',fontWeight:400}}>
                Kulunut alusta pidentää jarrutusmatkaa jopa 20% ja heikentää renkaan pitoa märällä kelillä. Turvallisuus alkaa alustasta.
              </p>

              {/* Feature pills */}
              <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'36px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'7px',background:'#F8FAFC',border:'1.5px solid #E2E8F0',borderRadius:'10px',padding:'8px 14px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span style={{fontSize:'12px',fontWeight:600,color:'#0F172A'}}>Ilmainen alustatarkistus</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'7px',background:'#F8FAFC',border:'1.5px solid #E2E8F0',borderRadius:'10px',padding:'8px 14px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  <span style={{fontSize:'12px',fontWeight:600,color:'#0F172A'}}>Kaikki alustan osat</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'7px',background:'#F8FAFC',border:'1.5px solid #E2E8F0',borderRadius:'10px',padding:'8px 14px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <span style={{fontSize:'12px',fontWeight:600,color:'#0F172A'}}>Nelipyöräsuuntaus</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'7px',background:'#F8FAFC',border:'1.5px solid #E2E8F0',borderRadius:'10px',padding:'8px 14px'}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                  <span style={{fontSize:'12px',fontWeight:600,color:'#0F172A'}}>12 kk takuu</span>
                </div>
              </div>

              {/* Buttons */}
              <div style={{display:'flex',flexWrap:'wrap',gap:'12px',alignItems:'center'}}>
                <a
                  href="/varaa"
                  style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#0F4C81',color:'#fff',fontWeight:700,fontSize:'15px',padding:'14px 32px',borderRadius:'100px',textDecoration:'none',boxShadow:'0 4px 20px rgba(15,76,129,0.3)',transition:'background .18s,transform .14s'}}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Varaa alustatarkistus
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

      {/* WHAT'S INCLUDED */}
      <section style={{padding:'80px 24px',background:'#fff'}}>
        <div className="srv-main-grid">
          <div className="reveal">
            <p className="section-tag">Mitä sisältyy</p>
            <h2 style={{fontSize:'clamp(28px,3.5vw,42px)',fontWeight:900,letterSpacing:'-0.03em',margin:'12px 0 32px',lineHeight:1.1}}>
              Alustakorjaus sisältää
            </h2>
            <div>
              {[
                {title:'Ilmainen alustatarkistus huollon tai korjauksen yhteydessä', desc:'Visuaalinen ja manuaalinen tarkistus kaikista osista'},
                {title:'EUSAMA-iskunvaimennintesti (tarvittaessa)', desc:'Mittaa iskunvaimentimien tehokkuuden numeraalisesti'},
                {title:'Kaikkien alustan osien tarkistus', desc:'Iskunvaimentimet, jouset, pallonivelet, raidentangot, tukivarret, laakerit'},
                {title:'Osien vaihto akseleittain pareittain', desc:'Vasen ja oikea yhtä aikaa — tasainen käyttäytyminen'},
                {title:'Nelipyöräsuuntaus vaihdon jälkeen', desc:'Pakollinen aina kun alustan osia vaihdetaan'},
                {title:'Koeajo', desc:'Varmistamme täydellisen käsiteltävyyden'},
                {title:'12 kk takuu', desc:'Kaikille töille ja osille'},
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
            {/* Free check box */}
            <div style={{background:'var(--brand-l)',border:'1.5px solid rgba(232,137,10,0.25)',borderRadius:'20px',padding:'32px'}}>
              <div style={{fontSize:'11px',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase' as const,color:'var(--brand)',marginBottom:'12px'}}>Aloita tästä</div>
              <h3 style={{fontSize:'22px',fontWeight:900,marginBottom:'10px'}}>Tarkistus ILMAINEN</h3>
              <p style={{fontSize:'14px',color:'var(--ink-60)',lineHeight:1.65,marginBottom:'20px',fontWeight:300}}>
                Alustatarkistus on ilmainen huollon tai korjauksen yhteydessä. Kerromme rehellisesti tilanteen.
              </p>
              <a href="/varaa" className="btn-primary" style={{width:'100%',justifyContent:'center',padding:'13px',gap:'8px'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Varaa alustatarkistus
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
          </div>
        </div>
      </section>

      {/* H2 SECTIONS */}
      <section style={{background:'var(--surface)',padding:'80px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>

          {/* Symptoms */}
          <div className="reveal" style={{marginBottom:'64px'}}>
            <p className="section-tag">Oireet</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 20px',lineHeight:1.1}}>
              Alustan oireet — mitä ne tarkoittavat?
            </h2>
            <div style={{maxWidth:'800px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'14px'}}>
              {[
                {symptom:'Koliseva ääni töyssyissä tai kaarteissa', cause:'Kuluneet kumiholkit, pallonivelet tai iskunvaimentimet'},
                {symptom:'Tärinä ratissa tai koko autossa', cause:'Mahdollinen tasapainotusongelma tai kuluneet alustan osat'},
                {symptom:'Auto pompottaa enemmän kuin ennen', cause:'Kuluneet iskunvaimentimet'},
                {symptom:'Auton keula painuu alas jarrutettaessa', cause:'Iskunvaimentimet kuluneet'},
                {symptom:'Auto vetää toiselle puolelle ilman ohjauksen korjailua', cause:'Suuntausvirhe tai pallonivel/tukivarsi'},
                {symptom:'Renkaat kuluvat epätasaisesti', cause:'Suuntausvirhe tai alustan geometria'},
                {symptom:'Vinkuva ääni kääntyessä', cause:'Kuluneet kumiholkit tai pallonivel'},
                {symptom:'Humiseva tai värisevä ääni joka voimistuu nopeuden kasvaessa', cause:'Pyörälaakeri alkaa vikaantua'},
              ].map((item, i) => (
                <div key={i} style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'12px',padding:'16px 20px'}}>
                  <div style={{fontSize:'14px',fontWeight:700,marginBottom:'5px',color:'var(--ink)'}}>{item.symptom}</div>
                  <div style={{fontSize:'13px',color:'var(--ink-60)',lineHeight:1.6}}>{item.cause}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Parts explained */}
          <div className="reveal" style={{marginBottom:'64px'}}>
            <p className="section-tag">Osat</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 20px',lineHeight:1.1}}>
              Kaikki alustan osat selitettyinä
            </h2>
            <div style={{maxWidth:'900px',display:'flex',flexDirection:'column',gap:'16px'}}>
              {[
                {
                  name:'Iskunvaimentimet',
                  desc:'Vaimentavat jousien tärinän ja pitävät renkaan tien pinnassa. Vaihtoväli max 80 000–100 000 km.',
                  note:'"Kuluneet iskunvaimentimet pidentävät jarrutusmatkaa jopa 20%."',
                },
                {
                  name:'Jouset',
                  desc:'Kantavat auton painon ja toimivat yhdessä iskunvaimentimien kanssa. Vaihdetaan aina pareittain.',
                  note:null,
                },
                {
                  name:'Tukivarret',
                  desc:'Yhdistävät pyörän auton runkoon. Sisältävät kumipuslat jotka kuluvat ennen metallivartta. Merkki: koliseva ääni, renkaan epätasainen kuluminen.',
                  note:null,
                },
                {
                  name:'Pallonivelet',
                  desc:'Mahdollistavat pyörän liikkumisen sekä ylös/alas että kääntyen. KRIITTINEN turvallisuusosa.',
                  note:'Täydellinen hajoaminen = pyörä voi mennä sisään.',
                },
                {
                  name:'Raidentangon pää',
                  desc:'Siirtää ohjauksen pyörille. Merkki: löysä ohjaus, koliseva ääni kääntyessä. Johtaa katsastushylkäykseen merkittävänä väljyytenä.',
                  note:null,
                },
                {
                  name:'Stabilisaattorin koiranluut',
                  desc:'Vähentää auton kallistumista kaarteissa. Kolisee töyssyissä jos kuluneita.',
                  note:null,
                },
                {
                  name:'Pyörälaakerit',
                  desc:'Mahdollistavat pyörien vapaan pyörimisen. Merkki: humiseva ääni joka muuttuu nopeuden mukaan.',
                  note:'Vikaantunut laakeri voi äärimmäisessä tapauksessa johtaa pyörän irtoamiseen.',
                },
              ].map((part, i) => (
                <div key={i} style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'14px',padding:'20px 24px'}}>
                  <div style={{fontSize:'16px',fontWeight:700,marginBottom:'6px',color:'var(--ink)'}}>{part.name}</div>
                  <p style={{fontSize:'14px',color:'var(--ink-60)',lineHeight:1.7,marginBottom: part.note ? '8px' : 0}}>{part.desc}</p>
                  {part.note && (
                    <div style={{fontSize:'13px',fontWeight:700,color:'var(--brand)',fontStyle:'italic'}}>{part.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Katsastus */}
          <div className="reveal" style={{marginBottom:'64px'}}>
            <p className="section-tag">Katsastus</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 20px',lineHeight:1.1}}>
              Alusta ja katsastus
            </h2>
            <div style={{maxWidth:'800px'}}>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'12px',marginBottom:'20px'}}>
                {[
                  {part:'Pallonivel väljyys',result:'Johtaa hylkäykseen'},
                  {part:'Raidentanko väljyys',result:'Johtaa hylkäykseen'},
                  {part:'Iskunvaimentimet vuoto',result:'Johtaa hylkäykseen'},
                  {part:'Jousi katkennut',result:'Hylätään'},
                  {part:'Kumiholkit täysin kuluneet',result:'Hylätään'},
                ].map((row, i) => (
                  <div key={i} style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'10px',padding:'14px 18px'}}>
                    <div style={{fontSize:'14px',fontWeight:700,marginBottom:'4px'}}>{row.part}</div>
                    <div style={{fontSize:'13px',color:'#DC2626',fontWeight:600}}>{row.result}</div>
                  </div>
                ))}
              </div>
              <div className="alert-banner" style={{marginBottom:0}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0,marginTop:'1px'}}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <p style={{fontSize:'14px',color:'var(--ink-60)',lineHeight:1.6,fontWeight:300}}>
                  Katsastus-Turva tarkastuksessamme (29 €) tarkistamme kaikki nämä etukäteen.
                </p>
              </div>
            </div>
          </div>

          {/* Suuntaus */}
          <div className="reveal">
            <p className="section-tag">Nelipyöräsuuntaus</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 20px',lineHeight:1.1}}>
              Nelipyöräsuuntaus — milloin se on pakollinen?
            </h2>
            <div style={{maxWidth:'800px',display:'flex',flexDirection:'column',gap:'14px'}}>
              <div style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'14px',padding:'20px 24px'}}>
                <div style={{fontSize:'15px',fontWeight:700,marginBottom:'12px'}}>Pakollinen aina kun:</div>
                <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'8px'}}>
                  {[
                    'Vaihdetaan mikä tahansa alustan osa',
                    'Auto osuu kovaan töyssyyn tai reunakiveen',
                    'Renkaat kuluvat epätasaisesti',
                    'Auto vetää toiselle puolelle',
                  ].map((item, i) => (
                    <li key={i} style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'14px',color:'var(--ink)'}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p style={{fontSize:'15px',lineHeight:1.8,color:'var(--ink-60)'}}>
                Ilman suuntausta: renkaat kuluvat 3x nopeammin, polttoaineenkulutus kasvaa.
              </p>
              <div style={{background:'#fff',border:'1.5px solid var(--border)',borderRadius:'12px',padding:'20px 24px',display:'flex',alignItems:'center',gap:'24px',flexWrap:'wrap' as const}}>
                <div style={{textAlign:'center' as const}}>
                  <div style={{fontSize:'24px',fontWeight:900,color:'var(--brand)'}}>89–120 €</div>
                  <div style={{fontSize:'13px',color:'var(--ink-60)',fontWeight:500}}>Suuntauksen kustannus</div>
                </div>
                <div style={{fontSize:'20px',color:'var(--ink-60)',fontWeight:300}}>vs</div>
                <div style={{textAlign:'center' as const}}>
                  <div style={{fontSize:'24px',fontWeight:900,color:'#DC2626'}}>400–800 €</div>
                  <div style={{fontSize:'13px',color:'var(--ink-60)',fontWeight:500}}>Ennenaikaiset renkaat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{padding:'80px 24px',background:'#fff'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div className="reveal" style={{marginBottom:'40px'}}>
            <p className="section-tag">Hinnoittelu</p>
            <h2 style={{fontSize:'clamp(24px,3.5vw,38px)',fontWeight:900,letterSpacing:'-0.02em',margin:'12px 0 8px',lineHeight:1.1}}>
              Hinnat
            </h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'24px'}}>
            <div style={{background:'var(--brand-l)',border:'1.5px solid rgba(232,137,10,0.25)',borderRadius:'20px',padding:'32px'}}>
              <div style={{fontSize:'11px',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase' as const,color:'var(--brand)',marginBottom:'16px'}}>Alustan osat</div>
              <table className="pricing-table">
                <tbody>
                  {[
                    {name:'Alustatarkistus',price:'ILMAINEN*'},
                    {name:'Iskunvaimentimet etu (pari)',price:'280–480 €'},
                    {name:'Iskunvaimentimet taka (pari)',price:'240–420 €'},
                    {name:'Jousi (kpl)',price:'120–280 €'},
                    {name:'Pallonivel (kpl)',price:'120–280 €'},
                    {name:'Raidentangon pää (kpl)',price:'89–180 €'},
                    {name:'Tukivarsi (kpl)',price:'180–380 €'},
                    {name:'Stabilisaattorin puslat',price:'80–160 €'},
                    {name:'Pyörälaakeri (kpl)',price:'180–380 €'},
                    {name:'Nelipyöräsuuntaus',price:'89–120 €'},
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{paddingRight:'16px'}}>{row.name}</td>
                      <td style={{textAlign:'right' as const,fontWeight:700,color:'var(--brand)',fontSize:'14px'}}>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{fontSize:'12px',color:'var(--ink-60)',marginTop:'16px',lineHeight:1.6}}>
                *Ilmainen huollon tai korjauksen yhteydessä. Kaikki hinnat ALV 25,5% sisältäen. Ilmainen tarjous ennen töiden aloittamista.
              </p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
              <div className="alert-banner" style={{marginBottom:0}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0,marginTop:'1px'}}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px',color:'var(--brand)'}}>Ilmainen tarjous</div>
                  <p style={{fontSize:'13px',color:'var(--ink-60)',lineHeight:1.6,fontWeight:300}}>
                    Hinta riippuu automallista. Pyydä ilmainen tarjous — et sitoudu mihinkään.
                  </p>
                </div>
              </div>
              <div style={{background:'var(--surface)',borderRadius:'16px',padding:'24px',border:'1.5px solid var(--border)'}}>
                <h3 style={{fontSize:'18px',fontWeight:700,marginBottom:'10px'}}>Varaa alustatarkistus</h3>
                <p style={{fontSize:'14px',color:'var(--ink-60)',lineHeight:1.6,marginBottom:'16px'}}>
                  Tarkistus on ilmainen huollon tai korjauksen yhteydessä. Kerromme rehellisesti tilanteen.
                </p>
                <a href="/varaa" className="btn-primary" style={{width:'100%',justifyContent:'center',padding:'13px'}}>
                  Varaa aika
                </a>
              </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'80px 24px',background:'var(--surface)'}}>
        <div style={{maxWidth:'720px',margin:'0 auto'}}>
          <div className="reveal" style={{textAlign:'center' as const,marginBottom:'48px'}}>
            <p className="section-tag">FAQ</p>
            <h2 style={{fontSize:'clamp(24px,3vw,36px)',fontWeight:900,letterSpacing:'-0.02em',marginTop:'10px'}}>Usein kysyttyä — Alusta &amp; Jousitus</h2>
          </div>
          <div className="reveal">
            {[
              {
                q:'Auto pompottaa enemmän kuin ennen — onko se vaarallista?',
                a:'Kyllä, pitkällä tähtäimellä. Kuluneet iskunvaimentimet pidentävät jarrutusmatkaa jopa 20%. Se voi tarkoittaa 4–6 metriä pidempää jarrutusmatkaa hätäjarrutuksessa — se on paljon. Tarkistuta ajoissa.',
              },
              {
                q:'Kuulen kolisevaa ääntä töyssyissä — pitääkö panikoida?',
                a:'Ei paniikkia, mutta tule tarkistukseen pian. Koliseva ääni tulee useimmiten kuluneista kumiholkeista, pallonivelistä tai koiranluista. Diagnosoimme äänen lähteen ilmaiseksi.',
              },
              {
                q:'Renkaat kuluvat sisäreunasta — mitä teen?',
                a:'Sisäreunan kuluminen tarkoittaa negatiivista camber-kulmaa — pyörät ovat "sisäänpäin" suuntaamisen osalta. Syy: suuntausvirhe tai kuluneet alustan osat. Tee suuntaus ja alustatarkistus ennen kuin renkaat tuhoutuvat.',
              },
              {
                q:'Palloniveleni on todettu huonoksi — kuinka kiireellinen?',
                a:'Riippuu väljyyden asteesta. Vähäinen väljyys = korjaa pian. Merkittävä väljyys = korjaa mahdollisimman pian. Katsastuksessa selkeä väljyys johtaa hylkäykseen ja ajokieltoon turvallisuussyistä. Tule näyttämään, arvioimme.',
              },
              {
                q:'Pitääkö suuntaus tehdä vaikka auto ajaa suoraan?',
                a:'Suuntausvirhe ei aina näy vetona — se voi näkyä vain renkaiden epätasaisena kulumisena. Siksi suuntaus kannattaa tarkistaa vähintään 2 vuoden välein tai aina kun vaihdetaan alustan osia.',
              },
              {
                q:'Iskunvaimentimet vaihdetaan aina pareittain — miksi?',
                a:'Vasen ja oikea puoli vaihdetaan aina samaan aikaan. Jos vain toinen vaihdetaan, auto "lipuu" sivulle kun toinen puoli vaimenee enemmän kuin toinen. Sama koskee jousia.',
              },
              {
                q:'Pyörälaakeri hurisee — voinko ajaa vielä?',
                a:'Lievä hurina varhaisessa vaiheessa = korjaa pian. Voimistuva ääni tai tärinä = korjaa kiireellisesti. Täysin hajonnut laakeri = pyörä voi teoriassa irrota nopeassa ajossa. Älä aliarvioi laakerin vikaa.',
              },
              {
                q:'Kauanko alustakorjaus kestää?',
                a:'Yksittäinen pallonivel tai raidentanko: 1–2 h. Iskunvaimentimet etu + taka: 3–4 h. Laajempi alustakorjaus: 1 päivä. Nelipyöräsuuntaus lisätään aina perään (30–45 min).',
              },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{item.q}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0}}>
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </summary>
                <div className="faq-a" style={{padding:'0 0 18px',fontSize:'16px',color:'var(--ink-60)',lineHeight:1.8,fontWeight:400}}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{background:'#fff',padding:'80px 24px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div className="reveal" style={{textAlign:'center' as const,marginBottom:'48px'}}>
            <p className="section-tag">Google Reviews</p>
            <h2 style={{fontSize:'clamp(24px,3vw,36px)',fontWeight:900,letterSpacing:'-0.02em',marginTop:'10px'}}>Mitä asiakkaamme sanovat</h2>
          </div>
          <div className="reviews-grid reveal">
            {[
              {
                text:'Iskunvaimentimet eteen ja taakse. Auto ajaa kuin uutena — ei pompota, ei rullaa kaarteissa. Nyt vasta huomaan miten huonot ne olivat ennen.',
                name:'Tero H.',
                role:'Volvo XC60',
                initial:'T',
              },
              {
                text:'Löysivät hajonneen pallonivelen ilmaisessa alustatarkistuksessa. En ollut edes pyytänyt tarkistamaan sitä. Rehellinen korjaamo.',
                name:'Riitta K.',
                role:'Toyota Avensis',
                initial:'R',
              },
              {
                text:'Raidentangon pää vaihdettu — suuntaus tehty samalla. Renkaat eivät enää kulu vinoon. Olisi pitänyt tehdä aiemmin.',
                name:'Eetu M.',
                role:'BMW X3',
                initial:'E',
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
      <section style={{background:'var(--ink)',padding:'64px 24px',position:'relative' as const,overflow:'hidden'}}>
        <div style={{position:'absolute' as const,inset:0,background:'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(232,137,10,0.12) 0%,transparent 60%)',pointerEvents:'none' as const}}></div>
        <div style={{maxWidth:'700px',margin:'0 auto',textAlign:'center' as const,position:'relative' as const}}>
          <h2 style={{fontSize:'clamp(26px,4vw,40px)',fontWeight:900,color:'#fff',letterSpacing:'-0.03em',marginBottom:'14px'}}>
            Epäiletkö alustan kuntoa?
          </h2>
          <p style={{fontSize:'16px',color:'rgba(255,255,255,0.7)',marginBottom:'32px',fontWeight:300}}>
            Alustatarkistus on ilmainen huollon tai korjauksen yhteydessä. Varaa aika tai tule suoraan — kerromme rehellisesti tilanteen.
          </p>
          <a
            href="/varaa"
            style={{display:'inline-flex',alignItems:'center',gap:'10px',background:'var(--brand)',color:'#fff',fontWeight:700,fontSize:'16px',padding:'15px 36px',borderRadius:'100px',textDecoration:'none',boxShadow:'0 4px 20px rgba(232,137,10,0.4)',transition:'background .18s,transform .14s'}}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Varaa alustatarkistus
          </a>
        </div>
      </section>

      {/* AutoJerry */}
      <section style={{padding:'56px 24px',background:'#F5F5F2'}}>
        <div style={{maxWidth:'960px',margin:'0 auto',textAlign:'center' as const}}>
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
              <a href="https://3aservice.fi/services/oljynvaihto.html">Öljynvaihto</a>
              <a href="https://3aservice.fi/services/jarrut.html">Jarrujen Vaihto</a>
              <a href="https://3aservice.fi/services/ilmastointi.html">Ilmastointi</a>
              <a href="https://3aservice.fi/services/vaihteisto-kytkin.html">Vaihteisto &amp; Kytkin</a>
              <a href="https://3aservice.fi/services/alusta.html" style={{color:'var(--brand)'}}>Alusta &amp; Jousitus</a>
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
