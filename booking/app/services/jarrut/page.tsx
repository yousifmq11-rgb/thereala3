import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jarrujen Vaihto Espoo | 3A Service — Jarrupalat & Jarrulevyt Kaikille Merkeille",
  description:
    "Jarrupalat ja jarrulevyt Espoossa. Ilmainen jarrutarkistus. Etu- ja takajarrut kaikille automerkeille. AD-valtuutettu Niittykummussa. Varaa aika nyt.",
};

const CSS = `
  :root{--brand:#E8890A;--brand-d:#C4720A;--brand-l:#FEF3DC;--ink:#1A1A1A;--ink-60:rgba(26,26,26,0.6);--surface:#F5F5F2;--border:#E2E2DC;--adblue:#0044B0;--hero:#111;}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{font-family:'Roboto',sans-serif;color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased;padding-top:80px;}
  .btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--brand);color:#fff;font-family:'Roboto',sans-serif;font-weight:700;border:none;cursor:pointer;border-radius:8px;padding:13px 24px;font-size:14px;transition:background .18s,transform .14s,box-shadow .18s;box-shadow:0 4px 16px rgba(232,137,10,0.3);text-decoration:none;white-space:nowrap;}
  .btn-primary:hover{background:var(--brand-d);transform:translateY(-1px);box-shadow:0 8px 24px rgba(232,137,10,0.4);}
  .btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:transparent;color:var(--ink);font-family:'Roboto',sans-serif;font-weight:700;border:2px solid var(--ink);cursor:pointer;border-radius:8px;padding:11px 24px;font-size:14px;transition:background .18s,color .18s,transform .14s;text-decoration:none;}
  .btn-outline:hover{background:var(--ink);color:#fff;transform:translateY(-1px);}
  #navbar{position:fixed;top:0;left:0;right:0;z-index:100;padding:10px 20px;transition:padding .3s;}
  .nav-dock{max-width:1280px;margin:0 auto;height:60px;display:flex;align-items:center;gap:24px;padding:0 22px;background:rgba(20,20,20,0.82);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.45),0 2px 8px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.1),inset 0 -1px 0 rgba(0,0,0,0.2);}
  .nav-link{font-size:14px;font-weight:500;color:rgba(255,255,255,0.78);text-decoration:none;padding:6px 2px;border-bottom:2px solid transparent;transition:color .15s,border-color .15s;}
  .nav-link:hover{color:#fff;border-color:rgba(255,255,255,0.5);}
  .lang-pill{display:inline-flex;border:1.5px solid rgba(255,255,255,0.2);border-radius:8px;overflow:hidden;}
  .lang-btn{cursor:pointer;padding:6px 13px;font-size:13px;font-weight:700;background:transparent;border:none;font-family:'Roboto',sans-serif;transition:background .15s,color .15s;color:rgba(255,255,255,0.7);}
  .lang-btn.active{background:var(--brand);color:#fff;}
  .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;overflow:hidden;max-height:480px;position:relative;}
  .testimonials-grid::before,.testimonials-grid::after{content:'';position:absolute;left:0;right:0;height:60px;z-index:2;pointer-events:none;}
  .testimonials-grid::before{top:0;background:linear-gradient(to bottom,var(--surface),transparent);}
  .testimonials-grid::after{bottom:0;background:linear-gradient(to top,var(--surface),transparent);}
  .t-col{overflow:hidden;}
  .t-col-inner{display:flex;flex-direction:column;gap:16px;animation:scrollUp 20s linear infinite;}
  .t-col:nth-child(2) .t-col-inner{animation-duration:26s;animation-delay:-8s;}
  .t-col:nth-child(3) .t-col-inner{animation-duration:23s;animation-delay:-14s;}
  @keyframes scrollUp{0%{transform:translateY(0);}100%{transform:translateY(-50%);}}
  .t-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:20px;}
  .t-stars{color:#F5A623;font-size:13px;letter-spacing:1px;margin-bottom:10px;}
  .t-text{font-size:16px;color:var(--ink-60);line-height:1.7;font-weight:400;margin-bottom:14px;}
  .t-name{font-size:13px;font-weight:700;color:var(--ink);}
  .t-role{font-size:12px;color:var(--ink-60);font-weight:300;}
  .t-avatar{width:34px;height:34px;border-radius:50%;background:var(--brand-l);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--brand);flex-shrink:0;}
  .check-item{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid var(--border);}
  .check-item:last-child{border-bottom:none;}
  .faq-item{border-bottom:1.5px solid var(--border);}
  details.faq-item summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:20px 0;font-size:17px;font-weight:700;}
  details.faq-item summary::-webkit-details-marker{display:none;}
  details[open] .faq-a{display:block;}
  .faq-a{display:none;padding:0 0 18px;font-size:16px;color:var(--ink-60);line-height:1.8;font-weight:400;}
  .benefit-card{background:#fff;border-radius:16px;padding:28px;border:1.5px solid var(--border);transition:border-color .2s,transform .2s,box-shadow .2s;}
  .benefit-card:hover{border-color:rgba(232,137,10,0.4);transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.08);}
  .why-icon{width:52px;height:52px;background:var(--brand-l);border-radius:14px;display:flex;align-items:center;justify-content:center;border:1.5px solid rgba(232,137,10,0.2);margin-bottom:16px;}
  .reveal{transform:translateY(0);transition:opacity .6s ease,transform .6s ease;}
  .section-tag{font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--brand);}
  .alert-banner{background:rgba(232,137,10,0.08);border:1.5px solid rgba(232,137,10,0.3);border-radius:12px;padding:16px 20px;display:flex;align-items:flex-start;gap:12px;margin-bottom:20px;}
  footer{background:var(--ink);color:rgba(255,255,255,.7);}
  footer h4{color:#fff;font-size:13px;font-weight:700;margin-bottom:14px;letter-spacing:0.06em;text-transform:uppercase;}
  footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}
  footer a:hover{color:var(--brand);}
  #mobile-sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:90;background:#fff;padding:12px 20px;border-top:1.5px solid var(--border);box-shadow:0 -4px 20px rgba(0,0,0,0.1);}
  @media(max-width:768px){#mobile-sticky{display:flex;gap:10px;}}
  .grid-services{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
  @media(max-width:640px){.hide-mobile{display:none!important;}}
  @media(min-width:641px){.hide-desktop{display:none!important;}}
  #mobile-drawer{position:fixed;inset:0;z-index:150;background:#fff;transform:translateX(100%);transition:transform .35s cubic-bezier(.77,0,.175,1);display:flex;flex-direction:column;}
  #mobile-drawer.open{transform:translateX(0);}
  .drawer-link{display:flex;align-items:center;padding:18px 24px;font-size:20px;font-weight:900;border-bottom:1px solid var(--border);text-decoration:none;color:var(--ink);transition:color .15s;}
  .drawer-link:hover{color:var(--brand);}
  .drawer-sub{padding:13px 24px 13px 44px!important;font-size:15px!important;font-weight:500!important;color:var(--ink-60)!important;border-bottom-color:transparent!important;}
  .drawer-sub:hover{color:var(--brand)!important;}
  .drawer-section-label{padding:14px 24px 6px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink-60);border-bottom:1px solid var(--border);}
  *:focus-visible{outline:2px solid var(--brand);outline-offset:2px;}
  ::-webkit-scrollbar{width:5px;}
  ::-webkit-scrollbar-thumb{background:var(--brand);border-radius:3px;}
  .new-hero-grid{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;}
  @media(max-width:900px){.new-hero-grid{grid-template-columns:1fr;}}
  .hero-accent-line{width:80px;height:3px;background:linear-gradient(90deg,#0F4C81,transparent);border-radius:2px;margin-bottom:24px;}
  .srv-main-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;max-width:1100px;margin:0 auto;}
  .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;}
  @media(max-width:900px){.new-hero-grid>div:first-child{padding:40px 0 0!important;}}
  @media(max-width:768px){
    .srv-main-grid{grid-template-columns:1fr!important;gap:32px!important;}
    .footer-grid{grid-template-columns:1fr!important;gap:24px!important;}
    .testimonials-grid{grid-template-columns:1fr!important;}
    .t-col:nth-child(2),.t-col:nth-child(3){display:none!important;}
  }
  .price-table{width:100%;border-collapse:collapse;margin-top:16px;}
  .price-table td{padding:12px 16px;border-bottom:1px solid var(--border);font-size:15px;}
  .price-table tr:last-child td{border-bottom:none;}
  .price-table td:last-child{font-weight:700;text-align:right;color:var(--ink);}
  .price-table tr:first-child td{background:var(--brand);color:#fff;font-weight:700;border-bottom:none;}
  .price-table tr:first-child td:last-child{color:#fff;}
  .hero-right-panel{background:#0F172A;border-radius:24px;padding:36px;min-width:260px;flex-shrink:0;}
`;

export default function JarrutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />

      {/* NAVBAR */}
      <header id="navbar">
        <div className="nav-dock">
          <a href="https://3aservice.fi">
            <img
              src="/logo/pomelli_bdna_image_0509.png"
              alt="3A Service Oy"
              style={{ height: "44px", width: "auto" }}
            />
          </a>
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft: "8px" }}>
            <a href="https://3aservice.fi" className="nav-link">Etusivu</a>
            <a href="https://3aservice.fi/#services-scroll-wrapper" className="nav-link" style={{ color: "var(--brand)", borderColor: "var(--brand)" }}>Palvelut</a>
            <a href="https://3aservice.fi/#contact" className="nav-link">Yhteystiedot</a>
          </nav>
          <div style={{ flex: 1 }} />
          <a
            href="tel:+358449773677"
            className="hide-mobile"
            style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.78)", textDecoration: "none" }}
          >
            +358 44 977 3677
          </a>
          <a href="/varaa" className="btn-primary hide-mobile" style={{ padding: "9px 20px", fontSize: "13px" }}>
            Varaa aika
          </a>
          <button
            className="hide-desktop"
            onClick={() => {
              const el = document.getElementById("mobile-drawer");
              if (el) { el.classList.add("open"); document.body.style.overflow = "hidden"; }
            }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "12px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-60)" }}>
          <a href="https://3aservice.fi" style={{ color: "var(--ink-60)", textDecoration: "none" }}>Etusivu</a>
          <span>›</span>
          <a href="https://3aservice.fi/#services-scroll-wrapper" style={{ color: "var(--ink-60)", textDecoration: "none" }}>Palvelut</a>
          <span>›</span>
          <span style={{ color: "var(--brand)", fontWeight: 500 }}>Jarrujen Vaihto</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "80px 24px 64px", borderBottom: "1.5px solid #E2E8F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="new-hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FFF7ED", border: "1.5px solid #FED7AA", borderRadius: "100px", padding: "6px 16px", marginBottom: "28px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C05621" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#C05621", letterSpacing: "0.08em", textTransform: "uppercase" }}>Jarrut · Turvallisuus · Espoo</span>
              </div>
              <h1 style={{ fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: "12px" }}>
                Jarrujen vaihto Espoossa —{" "}
                <span style={{ color: "#0F4C81" }}>turvallisuus ensin.</span>
              </h1>
              <div className="hero-accent-line" />
              <p style={{ fontSize: "18px", color: "#64748B", lineHeight: 1.7, marginBottom: "32px", maxWidth: "540px", fontWeight: 400 }}>
                Jarrut ovat auton tärkein turvallisuusjärjestelmä. Kuluneet jarrupalat pidentävät jarrutusmatkaa ja voivat vaurioittaa jarrulevyt — jolloin korjaus moninkertaistuu.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
                {[
                  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01 9 11.01", label: "Ilmainen jarrutarkistus" },
                  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01 9 11.01", label: "Kaikki automerkit" },
                  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01 9 11.01", label: "Takuu säilyy EU 461/2010" },
                  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01 9 11.01", label: "12 kk takuu töille" },
                ].map((pill) => (
                  <div key={pill.label} style={{ display: "flex", alignItems: "center", gap: "7px", background: "#F8FAFC", border: "1.5px solid #E2E8F0", borderRadius: "10px", padding: "8px 14px" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#0F172A" }}>{pill.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                <a
                  href="/varaa"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0F4C81", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "100px", textDecoration: "none", boxShadow: "0 4px 20px rgba(15,76,129,0.3)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Varaa jarrutarkistus — ilmainen
                </a>
                <a
                  href="tel:+358449773677"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#0F4C81", fontWeight: 700, fontSize: "15px", padding: "13px 24px", borderRadius: "100px", textDecoration: "none", border: "2px solid #0F4C81" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
                  </svg>
                  +358 44 977 3677
                </a>
              </div>
            </div>

            {/* Right dark panel */}
            <div className="hide-mobile hero-right-panel">
              <div style={{ fontSize: "52px", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "4px" }}>
                4.9<span style={{ fontSize: "24px", color: "#F59E0B", marginLeft: "2px" }}>★</span>
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginBottom: "28px", fontWeight: 500 }}>/ 5.0 · Google-arvio</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />, color: "#F59E0B", label: "100+ Google-arvostelua" },
                  { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, color: "#60A5FA", label: "AD-Valtuutettu" },
                  { icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, color: "#34D399", label: "Ma–Pe 8:00–17:00" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round">{item.icon}</svg>
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST + SIDEBAR */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="srv-main-grid">
          {/* Left: checklist */}
          <div className="reveal">
            <p className="section-tag">Mitä sisältyy</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", margin: "12px 0 32px", lineHeight: 1.1 }}>
              Jarruhuolto sisältää
            </h2>
            <div>
              {[
                {
                  title: "Ilmainen jarrutarkistus — jarrupalat, levyt, satula, neste",
                  desc: "Diagnosoimme tilanne ennen mitään päätöksiä",
                },
                {
                  title: "Jarrupalojen paksuuden mittaus",
                  desc: "Uusi pala 10–12 mm. Alle 3 mm = vaihda. Alle 2 mm = hätä",
                },
                {
                  title: "Jarrulevyjen kunnon ja paksuuden tarkistus",
                  desc: "Tarkistamme aina palojen vaihdon yhteydessä",
                },
                {
                  title: "Jarrusatuloiden toimintatarkistus",
                  desc: "Jumissa oleva satula kuluttaa palat epätasaisesti",
                },
                {
                  title: "Jarrunesteen laadun tarkistus",
                  desc: "Kostea jarruneste voi kiehahtaa kovassa jarrutuksessa",
                },
                {
                  title: "Vaihto akseleittain pareittain — vasen + oikea yhtä aikaa",
                  desc: "Muuten jarrutus epätasainen",
                },
                {
                  title: "Huoltokirjamerkintä",
                  desc: "Takuusi säilyy",
                },
                {
                  title: "Koeajo ennen luovutusta",
                  desc: "Varmistamme täydellisen jarrutustuntuman",
                },
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "1px" }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "17px", marginBottom: "5px" }}>{item.title}</div>
                    <div style={{ fontSize: "15px", color: "var(--ink-60)", fontWeight: 400 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "var(--brand-l)", border: "1.5px solid rgba(232,137,10,0.25)", borderRadius: "20px", padding: "32px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brand)", marginBottom: "12px" }}>Tarkistus</div>
              <h3 style={{ fontSize: "22px", fontWeight: 900, marginBottom: "10px" }}>Jarrutarkistus — ILMAINEN</h3>
              <p style={{ fontSize: "14px", color: "var(--ink-60)", lineHeight: 1.65, marginBottom: "20px", fontWeight: 300 }}>Tiedät tarkalleen jarrujen tilanteen — ennen mitään päätöksiä. Ei piilomaksuja.</p>
              <a href="/varaa" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Varaa tarkistus nyt
              </a>
            </div>
            <div style={{ background: "var(--surface)", borderRadius: "16px", padding: "24px", border: "1.5px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "44px", height: "44px", background: "var(--adblue)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px" }}>AD-Valtuutettu</div>
                  <div style={{ fontSize: "14px", color: "var(--ink-60)", fontWeight: 400 }}>Takuusi säilyy EU-lain mukaan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Merkit jotka kertovat jarrujen huoltotarpeesta */}
      <section style={{ padding: "64px 24px", background: "var(--surface)", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p className="section-tag" style={{ marginBottom: "8px" }}>Varoitusmerkit</p>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "28px", lineHeight: 1.15 }}>
            Merkit jotka kertovat jarrujen huoltotarpeesta
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { sign: "Vinkuva tai kitisevä ääni jarruttaessa", detail: "Varoitinlevy osuu jarrulevyyn — vaihto kiireellinen." },
              { sign: "Metallinen raapiva ääni", detail: "Jarrupalat kuluneet loppuun, levy vaurioituu." },
              { sign: "Tärinä ohjauspyörässä tai jarrupolkimessa", detail: "Jarrulevyt vääntyneet." },
              { sign: "Auto vetää toiselle puolelle", detail: "Epätasaisesti kuluneet palat tai jumissa oleva satula." },
              { sign: "Pehmeä jarrupoljin, painuu syvemmälle", detail: "Jarrunestevuoto tai ilmaa järjestelmässä (HÄTÄTILANNE)." },
              { sign: "Jarrutusmatka pidentynyt selvästi", detail: "Tarkista palat ja levyt heti." },
              { sign: "Jarruvaroitusvalo", detail: "Käy tarkistuttamassa viipymättä." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "#fff", border: "1.5px solid var(--border)", borderRadius: "12px", padding: "16px 20px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <div>
                  <span style={{ fontWeight: 700, fontSize: "16px" }}>{item.sign}</span>
                  <span style={{ fontSize: "15px", color: "var(--ink-60)", fontWeight: 400 }}> — {item.detail}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="alert-banner" style={{ marginTop: "24px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "1px" }}>
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "4px", color: "var(--brand)" }}>Visuaalinen tarkistus</div>
              <p style={{ fontSize: "13px", color: "var(--ink-60)", lineHeight: 1.6, fontWeight: 300 }}>
                Uusi jarrupala on 10–12 mm. Alle 3–4 mm = vaihda. Alle 2 mm = vaihda välittömästi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Jarrupalat vai jarrulevyt */}
      <section style={{ padding: "64px 24px", background: "#fff", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p className="section-tag" style={{ marginBottom: "8px" }}>Diagnostiikka</p>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", lineHeight: 1.15 }}>
            Jarrupalat vai jarrulevyt — vai molemmat?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "var(--ink)", fontWeight: 400, marginBottom: "16px" }}>
            Jarrupalat kuluvat nopeammin (40 000–70 000 km) kuin levyt (60 000–90 000 km). Kaupunkiajo kuluttaa 2x nopeammin. Etujarrut kuluvat 2–3x nopeammin kuin takajarrut.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--ink-60)", fontWeight: 300, marginBottom: "16px" }}>
            Jarrupalat vaihdetaan aina akseleittain. Jarrulevyt tarkistetaan aina palojen vaihdon yhteydessä — syvät urat tai alle minimipaksuuden = vaihdetaan.
          </p>
          <div style={{ background: "var(--brand-l)", border: "1.5px solid rgba(232,137,10,0.25)", borderRadius: "12px", padding: "16px 20px", fontSize: "15px", fontStyle: "italic", color: "var(--ink)", fontWeight: 500 }}>
            "Emme koskaan vaihda levyjä jos ne ovat kunnossa — rehellisyys on liiketoimintamme perusta."
          </div>
        </div>
      </section>

      {/* SECTION: Jarruneste */}
      <section style={{ padding: "64px 24px", background: "var(--surface)", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p className="section-tag" style={{ marginBottom: "8px" }}>Turvallisuus</p>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", lineHeight: 1.15 }}>
            Jarruneste — unohdettu turvallisuuskriittinen huolto
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "var(--ink)", fontWeight: 400, marginBottom: "16px" }}>
            Jarruneste imee kosteutta ilmasta — jopa 3% vuodessa. Kostea jarruneste kiehahtaa kovassa jarrutuksessa = kaasukuplia = täydellinen jarruvikaantuminen.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--ink-60)", fontWeight: 300, marginBottom: "16px" }}>
            DOT4 suositus: vaihto 2 vuoden välein tai katsastuksen yhteydessä.
          </p>
          <div style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: "12px", padding: "16px 20px", fontSize: "15px", fontStyle: "italic", color: "var(--ink)", fontWeight: 500 }}>
            "Tarkistamme jarrunesteen laadun ilmaiseksi jokaisella jarruhuoltokäynnillä."
          </div>
        </div>
      </section>

      {/* SECTION: Katsastus ja jarrut */}
      <section style={{ padding: "64px 24px", background: "#fff", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p className="section-tag" style={{ marginBottom: "8px" }}>Katsastus</p>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", lineHeight: 1.15 }}>
            Katsastus ja jarrut
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "var(--ink)", fontWeight: 400, marginBottom: "12px" }}>
            Jarrupalat ja -levyt tarkistetaan katsastuksessa aina.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
            {[
              "Alle minimipaksuuden = hylätään.",
              "Jumissa oleva satula = hylätään.",
              "Jarrunestevuoto = hylätään.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "16px", color: "var(--ink-60)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <div style={{ background: "var(--brand-l)", border: "1.5px solid rgba(232,137,10,0.25)", borderRadius: "12px", padding: "16px 20px", fontSize: "15px", color: "var(--ink)", fontWeight: 500 }}>
            "Katsastus-Turva tarkastuksessamme (29 €) tarkistamme jarrut etukäteen — et joudu yllättyä katsastuksessa."
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "64px 24px", background: "var(--surface)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p className="section-tag" style={{ marginBottom: "8px" }}>Hinnoittelu</p>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "32px", lineHeight: 1.15 }}>
            Jarruhuollon hinnasto
          </h2>
          <div style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}>
            <table className="price-table">
              <tbody>
                <tr>
                  <td>Palvelu</td>
                  <td>Hinta (sis. alv)</td>
                </tr>
                {[
                  { service: "Jarrutarkistus", price: "ILMAINEN" },
                  { service: "Jarrupalat etu (osat + työ)", price: "189–280 €" },
                  { service: "Jarrupalat taka (osat + työ)", price: "170–250 €" },
                  { service: "Jarrupalat etu + taka", price: "320–480 €" },
                  { service: "Jarrupalat + jarrulevyt etu", price: "380–580 €" },
                  { service: "Jarruneste vaihto", price: "65 €" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td>{row.service}</td>
                    <td>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "14px", color: "var(--ink-60)", marginTop: "16px", fontStyle: "italic" }}>
            Tarkat hinnat automallisi mukaan — pyydä tarjous etukäteen.
          </p>
          <div style={{ marginTop: "24px" }}>
            <a href="/varaa" className="btn-primary" style={{ fontSize: "15px", padding: "14px 32px" }}>
              Pyydä ilmainen tarjous
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-tag">FAQ</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: "10px" }}>
              Usein kysyttyä
            </h2>
          </div>
          <div className="reveal">
            {[
              {
                q: "Voinko ajaa kun jarruista kuuluu metallinen ääni?",
                a: "Metallinen tai raapiva ääni tarkoittaa, että jarrupalat ovat kuluneet kokonaan loppuun ja metallitaustalevy hioo suoraan jarrulevyä vasten. Ajaminen tässä tilassa vaurioittaa jarrulevyt nopeasti — korjaus moninkertaistuu. Tule mahdollisimman pian.",
              },
              {
                q: "Pitääkö molemmat puolet vaihtaa yhtä aikaa?",
                a: "Kyllä, aina. Jarrupalat vaihdetaan akseleittain — vasen ja oikea samaan aikaan. Jos vain toinen puoli vaihdetaan, auto vetää jarrutettaessa vahvemmalle puolelle.",
              },
              {
                q: "Kuinka usein jarrut pitää tarkistaa?",
                a: "Suosittelemme jarrujen tarkistusta joka toisen vuoden tai 30 000 km välein — tai heti kun havaitset ääniä, tärinää tai muutoksia jarrutustuntumassa. Tarkistus on meillä ilmainen.",
              },
              {
                q: "Mitä jos jarrupoljin painuu lattiaan asti?",
                a: "Tämä on hätätilanne. Älä aja — tai aja erittäin varovaisesti suoraan korjaamolle. Pehmeä jarrupoljin voi tarkoittaa jarrunestevuotoa tai ilmakuplia jarruputkistossa, mikä voi johtaa täydelliseen jarrujen pettämiseen.",
              },
              {
                q: "Kauanko jarrujen vaihto kestää?",
                a: "Etujarrupalat: 45–60 min. Etu + taka: 1,5–2 h. Jarrupalat + levyt: 2–3 h. Useimmiten auto on valmis saman päivän.",
              },
              {
                q: "Pitääkö jarrulevyt aina vaihtaa jarrupalojen kanssa?",
                a: "Ei aina. Tarkistamme levyjen paksuuden ja pintakunnon aina palojen vaihdon yhteydessä. Jos levy on hyvässä kunnossa, emme vaihda sitä. Jos levy on alle minimipaksuuden tai pinnassa on syvät urat, vaihto on välttämätön.",
              },
              {
                q: "Johtaako kuluneet jarrut katsastushylkäykseen?",
                a: "Kyllä. Jarrupalat alle 2 mm, jarrulevyt alle minimipaksuuden, tai jumissa oleva satula johtavat hylkäykseen. Katsastus-Turva tarkastuksemme (29 €) paljastaa ongelmat etukäteen.",
              },
              {
                q: "Vaikuttaako jarrujen vaihto takuuseen?",
                a: "Ei. AD-valtuutettuna korjaamona teemme jarruhuollot EU-lain 461/2010 mukaisesti — takuu säilyy.",
              },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{item.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                <div className="faq-a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "var(--surface)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-tag">Google Reviews</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: "10px" }}>
              Mitä asiakkaamme sanovat
            </h2>
          </div>
          <div className="testimonials-grid reveal">
            <div className="t-col">
              <div className="t-col-inner">
                {[
                  { text: "Jarrupalat alkoivat vingua viikonloppuna. Maanantaiaamuna soitin — sama päivä aika. Valmis iltapäivällä. Hinta sama kuin lupasivat.", name: "Timo V.", role: "BMW X5 · Jarruhuolto" },
                  { text: "Tuin jarruihin — auto veti sivulle. Löysivät jumissa olevan jarrusatulan. Ei olisi tullut itselle mieleen. Rehellinen diagnoosi.", name: "Miia K.", role: "Honda CR-V · Jarruhuolto" },
                  { text: "Tarkistivat jarrulevyt ilmaiseksi palojen vaihdon yhteydessä. Sanoivat rehellisesti levyjen olevan kunnossa — ei tarvinnut vaihtaa. Luotan tähän paikkaan.", name: "Risto L.", role: "Mercedes C-sarja · Jarruhuolto" },
                  { text: "Jarrupalat alkoivat vingua viikonloppuna. Maanantaiaamuna soitin — sama päivä aika. Valmis iltapäivällä. Hinta sama kuin lupasivat.", name: "Timo V.", role: "BMW X5 · Jarruhuolto" },
                  { text: "Tuin jarruihin — auto veti sivulle. Löysivät jumissa olevan jarrusatulan. Ei olisi tullut itselle mieleen. Rehellinen diagnoosi.", name: "Miia K.", role: "Honda CR-V · Jarruhuolto" },
                ].map((t, i) => (
                  <div key={i} className="t-card">
                    <div className="t-stars">★★★★★</div>
                    <p className="t-text">{t.text}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div className="t-avatar">{t.name[0]}</div>
                      <div>
                        <div className="t-name">{t.name}</div>
                        <div className="t-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="t-col">
              <div className="t-col-inner">
                {[
                  { text: "Selkeä tarjous etukäteen, työ tehtiin sovitusti. Ammattimaisuus näkyy kaikessa — jarruhuolto onnistui täydellisesti.", name: "Antti S.", role: "VW Passat · Jarruhuolto" },
                  { text: "Kilpailukykyinen hinta verrattuna merkkikorjaamoon ja sama laatu. Kertoivat myös muista huoltotarpeista rehellisesti.", name: "Sari K.", role: "Nissan Qashqai · Jarruhuolto" },
                  { text: "Pehmeä jarrupoljin hälyytti — tuli hätäkäynti. Hoitivat nopeasti, löysivät vuodon. Erittäin ammattitaitoinen tiimi.", name: "Jari P.", role: "Toyota RAV4 · Jarruhuolto" },
                  { text: "Selkeä tarjous etukäteen, työ tehtiin sovitusti. Ammattimaisuus näkyy kaikessa — jarruhuolto onnistui täydellisesti.", name: "Antti S.", role: "VW Passat · Jarruhuolto" },
                  { text: "Kilpailukykyinen hinta verrattuna merkkikorjaamoon ja sama laatu. Kertoivat myös muista huoltotarpeista rehellisesti.", name: "Sari K.", role: "Nissan Qashqai · Jarruhuolto" },
                ].map((t, i) => (
                  <div key={i} className="t-card">
                    <div className="t-stars">★★★★★</div>
                    <p className="t-text">{t.text}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div className="t-avatar">{t.name[0]}</div>
                      <div>
                        <div className="t-name">{t.name}</div>
                        <div className="t-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="t-col">
              <div className="t-col-inner">
                {[
                  { text: "Täysin tyytyväinen palveluun. Jarrupalat ja levyt vaihdettiin paketilla — kaikki dokumentoitiin huolellisesti.", name: "Reijo M.", role: "Skoda Octavia · Jarruhuolto" },
                  { text: "Ystävällinen vastaanotto, nopea työ ja reilu hinta. Huoltokirja täytettiin asianmukaisesti. Takuu säilyy — tärkeää!", name: "Heli V.", role: "Opel Astra · Jarruhuolto" },
                  { text: "Täysin tyytyväinen palveluun. Jarrupalat ja levyt vaihdettiin paketilla — kaikki dokumentoitiin huolellisesti.", name: "Reijo M.", role: "Skoda Octavia · Jarruhuolto" },
                  { text: "Ystävällinen vastaanotto, nopea työ ja reilu hinta. Huoltokirja täytettiin asianmukaisesti. Takuu säilyy — tärkeää!", name: "Heli V.", role: "Opel Astra · Jarruhuolto" },
                ].map((t, i) => (
                  <div key={i} className="t-card">
                    <div className="t-stars">★★★★★</div>
                    <p className="t-text">{t.text}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div className="t-avatar">{t.name[0]}</div>
                      <div>
                        <div className="t-name">{t.name}</div>
                        <div className="t-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", padding: "64px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 80% 50%,rgba(232,137,10,0.12) 0%,transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: "14px" }}>
            Kuuletko ääntä jarruttaessa?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", fontWeight: 300 }}>
            Älä odota. Jarrujen ilmainen tarkistus ei vie kuin 15 minuuttia — ja tiedät tarkalleen missä mennään.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <a
              href="/varaa"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--brand)", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", boxShadow: "0 4px 16px rgba(232,137,10,0.3)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Varaa jarrutarkistus — ilmainen
            </a>
            <a
              href="tel:+358449773677"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "15px", padding: "13px 28px", border: "2px solid rgba(255,255,255,0.3)", borderRadius: "8px" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
              </svg>
              +358 44 977 3677
            </a>
          </div>
        </div>
      </section>

      {/* AutoJerry Reviews */}
      <section style={{ padding: "56px 24px", background: "#F5F5F2" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#E8890A", marginBottom: "10px" }}>ASIAKASARVOSTELUT</div>
          <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, color: "#0F172A", marginBottom: "8px" }}>
            Mitä asiakkaamme sanovat
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B", marginBottom: "32px" }}>
            Oikeat arvostelut — AutoJerry-palvelun kautta
          </p>
          <iframe
            src="https://autojerry.fi/arvostelut/upotus-2/8441/"
            style={{ width: "100%", border: "none", borderRadius: "16px", minHeight: "500px", display: "block" }}
            loading="lazy"
            title="AutoJerry Asiakasarvostelut"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "48px 24px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="footer-grid" style={{ paddingBottom: "40px" }}>
            <div>
              <img
                src="/logo/pomelli_bdna_image_0509.png"
                alt="3A Service Oy"
                style={{ height: "48px", width: "auto", marginBottom: "14px", display: "block" }}
              />
              <p style={{ fontSize: "14px" }}>Luotettavaa autohuoltoa Espoossa.</p>
              <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                <a
                  href="https://www.facebook.com/profile.php?id=61556218666083"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/3a_service_oy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Palvelut</h4>
              <a href="https://3aservice.fi/services/maaraikaishuolto.html">Määräaikaishuolto</a>
              <a href="https://3aservice.fi/services/jakohihna.html">Jakohihnan Vaihto</a>
              <a href="https://3aservice.fi/services/oljynvaihto.html">Öljynvaihto</a>
              <a href="https://3aservice.fi/services/jarrut.html" style={{ color: "var(--brand)" }}>Jarrujen Vaihto</a>
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
              <a href="https://maps.app.goo.gl/68533AxtrqMYACAVA" target="_blank" rel="noopener noreferrer">Sillankorva 8, 02300 Espoo</a>
              <a href="https://3aservice.fi/#contact">Ma–Pe 8:00–17:00</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "18px 0" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>© 2026 3A Service Oy | Autohuolto</p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div id="mobile-sticky">
        <a href="/varaa" className="btn-primary" style={{ flex: 1, justifyContent: "center", padding: "13px", fontSize: "15px", gap: "8px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Varaa aika
        </a>
        <a
          href="tel:+358449773677"
          style={{ width: "46px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid var(--border)", borderRadius: "8px", color: "var(--ink-60)", flexShrink: 0 }}
          aria-label="+358 44 977 3677"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
          </svg>
        </a>
      </div>

      {/* MOBILE DRAWER */}
      <div id="mobile-drawer">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", borderBottom: "1.5px solid var(--border)" }}>
          <img src="/logo/pomelli_bdna_image_0509.png" alt="3A Service Oy" style={{ height: "38px" }} />
          <button
            onClick={() => {
              const el = document.getElementById("mobile-drawer");
              if (el) { el.classList.remove("open"); document.body.style.overflow = ""; }
            }}
            style={{ background: "var(--surface)", border: "1.5px solid var(--border)", cursor: "pointer", borderRadius: "8px", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <a href="https://3aservice.fi" className="drawer-link">Etusivu</a>
          <div className="drawer-section-label">Palvelut</div>
          <a href="https://3aservice.fi/services/maaraikaishuolto.html" className="drawer-link drawer-sub">Määräaikaishuolto</a>
          <a href="https://3aservice.fi/services/jakohihna.html" className="drawer-link drawer-sub">Jakohihnan Vaihto</a>
          <a href="https://3aservice.fi/services/katsastus.html" className="drawer-link drawer-sub">Katsastushuolto</a>
          <a href="https://3aservice.fi/services/sahkotyot.html" className="drawer-link drawer-sub">Sähkötyöt</a>
          <a href="https://3aservice.fi/services/vikadiagnostiikka.html" className="drawer-link drawer-sub">Vikadiagnostiikka</a>
          <a href="https://3aservice.fi/services/renkaat.html" className="drawer-link drawer-sub">Renkaiden Palvelut</a>
          <a href="https://3aservice.fi/services/oljynvaihto.html" className="drawer-link drawer-sub">Öljynvaihto</a>
          <a href="/services/jarrut" className="drawer-link drawer-sub" style={{ color: "var(--brand)" }}>Jarrujen Vaihto</a>
          <a href="https://3aservice.fi/services/ilmastointi.html" className="drawer-link drawer-sub">Ilmastointi</a>
          <a href="https://3aservice.fi/services/vaihteisto-kytkin.html" className="drawer-link drawer-sub">Vaihteisto &amp; Kytkin</a>
          <a href="https://3aservice.fi/services/alusta.html" className="drawer-link drawer-sub">Alusta &amp; Jousitus</a>
          <a href="https://3aservice.fi/services/pesula.html" className="drawer-link drawer-sub">Autopesula</a>
          <a href="https://3aservice.fi/#contact" className="drawer-link" style={{ marginTop: "4px" }}>Yhteystiedot</a>
        </div>
        <div style={{ padding: "16px 20px", borderTop: "1.5px solid var(--border)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="/varaa" className="btn-primary" style={{ justifyContent: "center", padding: "13px", fontSize: "15px", gap: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Varaa aika nyt
          </a>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="tel:+358449773677" style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: 600, color: "var(--ink-60)", textDecoration: "none" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
              </svg>
              +358 44 977 3677
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
