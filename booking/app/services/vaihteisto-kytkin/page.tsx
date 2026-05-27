import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kytkin & Vaihteisto Espoo | 3A Service — Vaihto & Korjaus",
  description:
    "Kytkimen vaihto ja vaihteiston korjaus Espoossa. Manuaali ja automaatti, kaikki merkit, DMF vaihto. AD-valtuutettu Niittykummussa. Varaa nyt.",
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

  .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .t-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:20px;}
  .t-stars{color:#F5A623;font-size:13px;letter-spacing:1px;margin-bottom:10px;}
  .t-text{font-size:15px;color:var(--ink-60);line-height:1.7;font-weight:400;margin-bottom:14px;}
  .t-name{font-size:13px;font-weight:700;color:var(--ink);}
  .t-role{font-size:12px;color:var(--ink-60);font-weight:300;}
  .t-avatar{width:34px;height:34px;border-radius:50%;background:var(--brand-l);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--brand);flex-shrink:0;}

  .grid-services{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
  .srv-main-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;max-width:1100px;margin:0 auto;}
  .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;}
  .new-hero-grid{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;}

  .alert-banner{background:rgba(232,137,10,0.08);border:1.5px solid rgba(232,137,10,0.3);border-radius:12px;padding:16px 20px;display:flex;align-items:flex-start;gap:12px;margin-bottom:20px;}

  .pricing-table{width:100%;border-collapse:collapse;}
  .pricing-table tr{border-bottom:1px solid var(--border);}
  .pricing-table tr:last-child{border-bottom:none;}
  .pricing-table td{padding:12px 0;font-size:15px;}
  .pricing-table td:last-child{text-align:right;font-weight:700;color:var(--ink);}

  footer{background:var(--ink);color:rgba(255,255,255,.7);}
  footer h4{color:#fff;font-size:13px;font-weight:700;margin-bottom:14px;letter-spacing:0.06em;text-transform:uppercase;}
  footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}
  footer a:hover{color:var(--brand);}

  #mobile-sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:90;background:#fff;padding:12px 20px;border-top:1.5px solid var(--border);box-shadow:0 -4px 20px rgba(0,0,0,0.1);}
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

  @media(max-width:900px){
    .new-hero-grid{grid-template-columns:1fr;}
    .hero-right-panel{display:none!important;}
    .srv-main-grid{grid-template-columns:1fr!important;gap:32px!important;}
  }
  @media(max-width:768px){
    .testimonials-grid{grid-template-columns:1fr!important;}
    .t-col-2,.t-col-3{display:none!important;}
    .footer-grid{grid-template-columns:1fr!important;gap:24px!important;}
    #mobile-sticky{display:flex;gap:10px;}
  }
  @media(max-width:640px){
    .hide-mobile{display:none!important;}
  }
  @media(min-width:641px){
    .hide-desktop{display:none!important;}
  }
`;

export default function VaihteistoKytkinPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* NAVBAR */}
      <header id="navbar">
        <div className="nav-dock">
          <a href="/">
            <img
              src="/logo/pomelli_bdna_image_0509.png"
              alt="3A Service Oy"
              style={{ height: "44px", width: "auto" }}
            />
          </a>
          <nav
            className="hide-mobile"
            style={{ display: "flex", alignItems: "center", gap: "20px", marginLeft: "8px" }}
          >
            <a href="/" className="nav-link">Etusivu</a>
            <a href="/#services-scroll-wrapper" className="nav-link" style={{ color: "var(--brand)", borderColor: "var(--brand)" }}>Palvelut</a>
            <a href="/#contact" className="nav-link">Yhteystiedot</a>
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
            id="drawer-open-btn"
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
          <a href="/" style={{ color: "var(--ink-60)", textDecoration: "none" }}>Etusivu</a>
          <span>›</span>
          <a href="/#services-scroll-wrapper" style={{ color: "var(--ink-60)", textDecoration: "none" }}>Palvelut</a>
          <span>›</span>
          <span style={{ color: "var(--brand)", fontWeight: 500 }}>Kytkin &amp; Vaihteisto</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "80px 24px 64px", borderBottom: "1.5px solid #E2E8F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="new-hero-grid">
            {/* Left column */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: "100px", padding: "6px 16px", marginBottom: "28px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F4C81", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Kytkin &amp; Vaihteisto · Espoo
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: "12px" }}>
                Kytkimen ja vaihteiston{" "}
                <span style={{ color: "#0F4C81" }}>korjaus Espoossa.</span>
              </h1>

              <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg,#0F4C81,transparent)", borderRadius: "2px", marginBottom: "24px" }} />

              <p style={{ fontSize: "18px", color: "#64748B", lineHeight: 1.7, marginBottom: "32px", maxWidth: "540px", fontWeight: 400 }}>
                Luisteleva kytkin ei korjaudu itsestään — se pahenee. Mitä kauemmin odotat, sitä kalliimmaksi korjaus tulee.
              </p>

              {/* Feature pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
                {["Manuaali & automaatti", "DMF tarkistus", "Kaikki merkit", "12 kk takuu"].map((pill) => (
                  <div
                    key={pill}
                    style={{ display: "flex", alignItems: "center", gap: "7px", background: "#F8FAFC", border: "1.5px solid #E2E8F0", borderRadius: "10px", padding: "8px 14px" }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#0F172A" }}>{pill}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                <a
                  href="/varaa"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0F4C81", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "100px", textDecoration: "none", boxShadow: "0 4px 20px rgba(15,76,129,0.3)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Varaa kytkin-tarkistus
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
            <div
              className="hero-right-panel hide-mobile"
              style={{ background: "#0F172A", borderRadius: "24px", padding: "36px", minWidth: "260px", flexShrink: 0 }}
            >
              <div style={{ fontSize: "52px", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "4px" }}>
                4.9<span style={{ fontSize: "24px", color: "#F59E0B", marginLeft: "2px" }}>★</span>
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginBottom: "28px", fontWeight: 500 }}>/ 5.0 · Google-arvio</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>100+ arvostelua</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>AD-Valtuutettu</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Ma–Pe 8:00–17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST + SIDEBAR */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="srv-main-grid">
          {/* Checklist */}
          <div className="reveal">
            <p className="section-tag">Mitä sisältyy</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", margin: "12px 0 32px", lineHeight: 1.1 }}>
              Kytkinhuolto sisältää
            </h2>
            <div>
              {[
                { title: "Kytkimen kunnon arviointi", desc: "Tarkistamme tarttumispisteen, luiston ja äänet" },
                { title: "Kytkinpaketin vaihto (levy, painelevy, painelaakeri)", desc: "Kolme osaa vaihdetaan aina yhtä aikaa" },
                { title: "DMF (kaksoismassa) tarkistus/vaihto", desc: "Tarkistamme aina kytkimen vaihdon yhteydessä — vaihteisto on jo auki" },
                { title: "Vaihteistoöljyn vaihto (tarvittaessa)", desc: "Manuaali, automaatti, DSG — tarkistamme kunnon" },
                { title: "Kytkinpolkimen säätö", desc: "Varmistamme oikean tartuntapisteen" },
                { title: "Koeajo ennen luovutusta", desc: "Testaamme täydellinen toiminta" },
                { title: "12 kk takuu osille ja työlle", desc: "" },
              ].map((item) => (
                <div className="check-item" key={item.title}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "1px" }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "17px", marginBottom: item.desc ? "5px" : 0 }}>{item.title}</div>
                    {item.desc && <div style={{ fontSize: "15px", color: "var(--ink-60)", fontWeight: 400 }}>{item.desc}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="alert-banner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "1px" }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "4px", color: "var(--brand)" }}>Vianhaku 95 €/h</div>
                <p style={{ fontSize: "13px", color: "var(--ink-60)", lineHeight: 1.6, fontWeight: 300 }}>
                  Epäselvä vika? Teemme ammattilaisen diagnoosin ennen korjausta.
                </p>
              </div>
            </div>

            <div style={{ background: "var(--brand-l)", border: "1.5px solid rgba(232,137,10,0.25)", borderRadius: "20px", padding: "32px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "var(--brand)", marginBottom: "12px" }}>Varaa tarkistus</div>
              <h3 style={{ fontSize: "22px", fontWeight: 900, marginBottom: "10px" }}>Ilmainen tarjous</h3>
              <p style={{ fontSize: "14px", color: "var(--ink-60)", lineHeight: 1.65, marginBottom: "20px", fontWeight: 300 }}>
                Hinta riippuu automallista. Pyydä ilmainen tarjous — ei sitoumuksia.
              </p>
              <a href="/varaa" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px", gap: "8px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Varaa aika
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

      {/* SECTION: Tunnista kytkimen oireet */}
      <section style={{ background: "var(--surface)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "32px" }}>
            <p className="section-tag">Oireet</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 900, letterSpacing: "-0.02em", margin: "12px 0 24px", lineHeight: 1.15 }}>
              Tunnista kytkimen oireet ajoissa
            </h2>
          </div>
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "Kytkin luistaa: kierrokset nousevat mutta auto ei kiihdy samassa suhteessa — selkein merkki.",
              "Tärinä liikkeelle lähtiessä tai kytkintä painettaessa.",
              "Palaneen haju (kitkerä haju) kiihdytettäessä kovalla voimalla.",
              "Vaihteiden vaihtaminen hankaloitunut tai kuuluu ääniä.",
              "Kytkin ottaa kiinni vasta polkimen liikeradan loppupuolella (tartuntapiste siirtynyt).",
              "Automaatti: myöhäistyvät vaihteenvaihdot tai nykiminen.",
            ].map((oireItem) => (
              <div key={oireItem} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--brand)", flexShrink: 0, marginTop: "7px" }} />
                <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7, fontWeight: 400 }}>{oireItem}</p>
              </div>
            ))}
            <div style={{ background: "#fff", border: "1.5px solid rgba(232,137,10,0.3)", borderRadius: "12px", padding: "18px 20px", marginTop: "8px" }}>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.7, fontStyle: "italic" }}>
                "Käytännön testi manuaaliin: aja 4. vaihteella 50 km/h, anna kierrosten nousta ilman vauhdinnousua — jos nousevat, kytkin luistaa."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Käyttöikä */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "32px" }}>
            <p className="section-tag">Käyttöikä</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 900, letterSpacing: "-0.02em", margin: "12px 0 24px", lineHeight: 1.15 }}>
              Kytkimen käyttöikä — ja mikä nopeuttaa kulumista
            </h2>
          </div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px", marginBottom: "28px" }}>
            {[
              { label: "Tyypillinen käyttöikä", value: "80 000–150 000 km" },
              { label: "Kaupunkiajo & mäkinen maasto", value: "60 000–90 000 km" },
              { label: "Moottoritieajo", value: "voi kestää 200 000+ km" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontSize: "12px", color: "var(--ink-60)", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.07em", marginBottom: "6px" }}>{stat.label}</div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: "var(--ink)" }}>{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="reveal">
            <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "12px" }}>Nopeuttaa kulumista:</div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Puolikytkin käyttö liikennevaloissa",
                "Mäissä pysähtyminen kytkintä pitämällä",
                "Kova kiihdytys kuumalla kytkimellä",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "var(--ink-60)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: DMF */}
      <section style={{ background: "var(--surface)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "32px" }}>
            <p className="section-tag">DMF</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 900, letterSpacing: "-0.02em", margin: "12px 0 24px", lineHeight: 1.15 }}>
              Kytkin vai kaksoismassa (DMF) — vai molemmat?
            </h2>
          </div>
          <div className="reveal">
            <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "16px" }}>
              DMF (Dual Mass Flywheel) vaimentaa moottorin tärinää vaihteistosta.
            </p>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "10px" }}>Merkit kuluneesta DMF:stä:</div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Tärinä tyhjäkäynnillä", "Koliseva ääni käynnistyksen yhteydessä"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "var(--ink-60)" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brand)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: "16px", color: "var(--ink-60)", lineHeight: 1.8, marginBottom: "16px" }}>
              Jos kytkin vaihdetaan + DMF on kulunut: uusi kytkin kuluu nopeammin vanhan DMF:n kanssa.
            </p>
            <div style={{ background: "#fff", border: "1.5px solid rgba(232,137,10,0.3)", borderRadius: "12px", padding: "18px 20px" }}>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.7, fontStyle: "italic" }}>
                "DMF kannattaa aina tarkistaa kytkimen vaihdon yhteydessä, työ on jo tehty muutenkin."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Vaihteistoöljy */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "32px" }}>
            <p className="section-tag">Vaihteistoöljy</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 900, letterSpacing: "-0.02em", margin: "12px 0 24px", lineHeight: 1.15 }}>
              Vaihteistoöljy — unohdettu mutta kriittinen huolto
            </h2>
          </div>
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { label: "Manuaali", interval: "vaihto 80 000–100 000 km tai 5 vuoden välein" },
              { label: "Automaatti", interval: "vaihto 60 000 km tai 4 vuoden välein" },
              { label: "DSG/PDK/S-tronic", interval: "vaihto 40 000–60 000 km — KRIITTINEN", highlight: true },
            ].map((oil) => (
              <div
                key={oil.label}
                style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: oil.highlight ? "rgba(232,137,10,0.06)" : "var(--surface)", border: `1.5px solid ${oil.highlight ? "rgba(232,137,10,0.3)" : "var(--border)"}`, borderRadius: "12px", padding: "16px 20px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{oil.label}</div>
                  <div style={{ fontSize: "14px", color: "var(--ink-60)" }}>{oil.interval}</div>
                </div>
              </div>
            ))}
            <div style={{ background: "rgba(239,68,68,0.06)", border: "1.5px solid rgba(239,68,68,0.2)", borderRadius: "12px", padding: "16px 20px" }}>
              <p style={{ fontSize: "14px", color: "#DC2626", fontWeight: 600, marginBottom: "6px" }}>DSG-öljyn laiminlyönti on yleisin syy DSG-remonttiin</p>
              <p style={{ fontSize: "14px", color: "var(--ink-60)" }}>Hinta 2 000–4 000 €. Vanha vaihteistoöljy sisältää metallipartikkeleja, jotka lisäävät kulumista.</p>
            </div>
            <div style={{ background: "#fff", border: "1.5px solid rgba(232,137,10,0.3)", borderRadius: "12px", padding: "18px 20px" }}>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.7, fontStyle: "italic" }}>
                "Monet uskovat öljyn olevan elinikäinen — se ei ole."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: "var(--surface)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-tag">Hinnat</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: "10px" }}>
              Hinnoittelu
            </h2>
          </div>
          <div className="reveal" style={{ background: "#fff", borderRadius: "20px", padding: "32px", border: "1.5px solid var(--border)" }}>
            <table className="pricing-table">
              <tbody>
                {[
                  { service: "Kytkimen vaihto", price: "490–850 €" },
                  { service: "Kytkin + DMF", price: "790–1 400 €" },
                  { service: "Vaihteistoöljy (manuaali)", price: "120–180 €" },
                  { service: "Vaihteistoöljy (automaatti)", price: "180–280 €" },
                  { service: "DSG-öljyn vaihto", price: "250–380 €" },
                  { service: "Vianhaku", price: "95 €/h" },
                ].map((row) => (
                  <tr key={row.service}>
                    <td style={{ color: "var(--ink)", fontWeight: 400 }}>{row.service}</td>
                    <td style={{ color: "var(--ink)", fontWeight: 700, textAlign: "right" }}>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "13px", color: "var(--ink-60)", marginTop: "20px", textAlign: "center" }}>
              Tarkat hinnat automallisi mukaan. Pyydä ilmainen tarjous.
            </p>
            <a
              href="/varaa"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "13px", marginTop: "20px", display: "flex" }}
            >
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
                q: "Miten tunnistan luistelevan kytkimen?",
                a: "Paras kotitesti: aja neljännellä vaihteella 50 km/h tasaisesti, paina kaasua voimakkaasti. Jos kierrokset nousevat mutta auton nopeus ei kasva samassa suhteessa — kytkin luistaa. Tule tarkistukseen ennen kuin se pahenee.",
              },
              {
                q: "Voiko kytkimen vaihtoa lykätä?",
                a: "Voit, mutta kuluminen nopeutuu ajan myötä ja aiheuttaa lisävahinkoja vauhtipyörälle ja vaihteistolle. Lisäksi pahin skenaario: kytkin pettää kokonaan kesken ajon. Viivyttely maksaa aina enemmän kuin nopea toiminta.",
              },
              {
                q: "Pitääkö DMF vaihtaa kytkimen kanssa?",
                a: "Ei aina — mutta tarkistamme aina DMF:n kunnon kytkimen vaihdon yhteydessä. Koska vaihteisto on jo irti, DMF:n vaihto lisää vain osien hintaa — työ on jo tehty. Kerromme rehellisen suosituksen.",
              },
              {
                q: "Automaattivaihteisto nykii — kallis korjaus edessä?",
                a: "Ei välttämättä. Automaattivaihteiston nykimisen yleisin ja halvin korjaus on öljynvaihto. Tule tarkistukseen ennen kuin pelästyt kalliista remontista.",
              },
              {
                q: "DSG-vaihteistossa on tärinää matalalla nopeudella — onko se normaalia?",
                a: 'Ei. "DSG-shudder" eli tärinä pienellä nopeudella on tyypillisin oire kuluneesta tai väärästä öljystä. DSG-öljyn vaihto (250–380 €) ratkaisee ongelman useimmiten. Ilman hoitoa se johtaa DSG-remonttiin (2 000–4 000 €).',
              },
              {
                q: "Kauanko kytkimen vaihto kestää?",
                a: "5–8 tuntia automallista riippuen. Tyypillisesti auto on valmis seuraavana päivänä.",
              },
              {
                q: "Onko vaihteiston korjaus aina mahdollista?",
                a: "Riippuu viasta. Yksittäisten osien ja tiivisteiden vaihto on useimmiten mahdollista. Täydellinen vaihteistoremontti arvioidaan tapauskohtaisesti. Kerromme aina kaikki vaihtoehdot ja niiden hinnat rehellisesti.",
              },
              {
                q: "Mikä on kytkimen vaihdon takuu teillä?",
                a: "12 kuukautta sekä osille että työlle. Käytämme alkuperäistä vastaavia laadukkaita osia.",
              },
            ].map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                <div className="faq-a" style={{ padding: "0 0 18px", fontSize: "15px", color: "var(--ink-60)", lineHeight: 1.8, fontWeight: 400 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "var(--surface)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-tag">Asiakasarvostelut</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: "10px" }}>
              Mitä asiakkaamme sanovat
            </h2>
          </div>
          <div className="reveal testimonials-grid">
            {[
              {
                text: "Kytkin luisteli kuukausia — lykkäsin. Lopulta vaihteistoremontti olisi uhannut. Onneksi tulin ajoissa. Vaihtoivat kytkimen ja DMF:n — auto ajaa kuin uutena.",
                name: "Harri T.",
                role: "BMW 3-sarja",
                initial: "H",
              },
              {
                text: "DSG-öljyn vaihto 280 € — tärinä loppui heti. Dealer olisi pyytänyt 600 € ja ehdottanut vaihteiston kokonaisvaihtoa. Kiitos rehellisestä diagnoosista.",
                name: "Tuuli L.",
                role: "Volkswagen Golf DSG",
                initial: "T",
              },
              {
                text: "Kytkimen vaihto tehtiin päivässä. Hinta sama kuin tarjouksessa. Ammattitaitoinen työ.",
                name: "Janne K.",
                role: "Ford Focus 1.6",
                initial: "J",
              },
            ].map((review, i) => (
              <div className={`t-col${i > 0 ? ` t-col-${i + 1}` : ""}`} key={review.name}>
                <div className="t-card">
                  <div className="t-stars">★★★★★</div>
                  <p className="t-text">"{review.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className="t-avatar">{review.initial}</div>
                    <div>
                      <div className="t-name">{review.name}</div>
                      <div className="t-role">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", padding: "64px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 80% 50%,rgba(232,137,10,0.12) 0%,transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: "14px" }}>
            Tunnistatko kytkimen oireet?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", fontWeight: 300, lineHeight: 1.7 }}>
            Älä odota kunnes kytkin pettää kokonaan — korjaus on aina halvempaa ajoissa tehtynä.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a
              href="/varaa"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--brand)", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "100px", textDecoration: "none", boxShadow: "0 4px 20px rgba(232,137,10,0.35)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Varaa kytkin-tarkistus
            </a>
            <a
              href="tel:+358449773677"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "15px", padding: "13px 28px", border: "2px solid rgba(255,255,255,0.3)", borderRadius: "100px" }}
            >
              +358 44 977 3677
            </a>
          </div>
        </div>
      </section>

      {/* AutoJerry Reviews iframe */}
      <section style={{ padding: "56px 24px", background: "#F5F5F2" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#E8890A", marginBottom: "10px" }}>
            ASIAKASARVOSTELUT
          </div>
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
              <img src="/logo/pomelli_bdna_image_0509.png" alt="3A Service Oy" style={{ height: "48px", width: "auto", marginBottom: "14px", display: "block" }} />
              <p style={{ fontSize: "14px" }}>Luotettavaa autohuoltoa Espoossa.</p>
              <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                <a href="https://www.facebook.com/profile.php?id=61556218666083" target="_blank" rel="noopener noreferrer" style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://www.instagram.com/3a_service_oy/" target="_blank" rel="noopener noreferrer" style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Palvelut</h4>
              <a href="/services/maaraikaishuolto">Määräaikaishuolto</a>
              <a href="/services/jakohihna">Jakohihnan Vaihto</a>
              <a href="/services/oljynvaihto">Öljynvaihto</a>
              <a href="/services/jarrut">Jarrujen Vaihto</a>
              <a href="/services/ilmastointi">Ilmastointi</a>
              <a href="/services/vaihteisto-kytkin" style={{ color: "var(--brand)" }}>Vaihteisto &amp; Kytkin</a>
              <a href="/services/alusta">Alusta &amp; Jousitus</a>
              <a href="/services/katsastus">Katsastushuolto</a>
              <a href="/services/sahkotyot">Sähkötyöt</a>
              <a href="/services/vikadiagnostiikka">Vikadiagnostiikka</a>
              <a href="/services/renkaat">Renkaiden Palvelut</a>
              <a href="/services/pesula">Autopesula</a>
            </div>
            <div>
              <h4>Yhteystiedot</h4>
              <a href="tel:+358449773677">+358 44 977 3677</a>
              <a href="mailto:info@3aservice.fi">info@3aservice.fi</a>
              <a href="https://maps.app.goo.gl/68533AxtrqMYACAVA" target="_blank" rel="noopener noreferrer">Sillankorva 8, 02300 Espoo</a>
              <a href="/#contact">Ma–Pe 8:00–17:00</a>
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
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Varaa aika
        </a>
        <a href="tel:+358449773677" style={{ width: "46px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid var(--border)", borderRadius: "8px", color: "var(--ink-60)", flexShrink: 0, textDecoration: "none" }} aria-label="+358 44 977 3677">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
          </svg>
        </a>
      </div>

      {/* MOBILE DRAWER */}
      <div id="mobile-drawer">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", borderBottom: "1.5px solid var(--border)" }}>
          <img src="/logo/pomelli_bdna_image_0509.png" alt="3A Service Oy" style={{ height: "38px" }} />
          <button id="drawer-close-btn" style={{ background: "var(--surface)", border: "1.5px solid var(--border)", cursor: "pointer", borderRadius: "8px", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <a href="/" className="drawer-link">Etusivu</a>
          <div className="drawer-section-label">Palvelut</div>
          <a href="/services/maaraikaishuolto" className="drawer-link drawer-sub">Määräaikaishuolto</a>
          <a href="/services/jakohihna" className="drawer-link drawer-sub">Jakohihnan Vaihto</a>
          <a href="/services/katsastus" className="drawer-link drawer-sub">Katsastushuolto</a>
          <a href="/services/sahkotyot" className="drawer-link drawer-sub">Sähkötyöt</a>
          <a href="/services/vikadiagnostiikka" className="drawer-link drawer-sub">Vikadiagnostiikka</a>
          <a href="/services/renkaat" className="drawer-link drawer-sub">Renkaiden Palvelut</a>
          <a href="/services/oljynvaihto" className="drawer-link drawer-sub">Öljynvaihto</a>
          <a href="/services/jarrut" className="drawer-link drawer-sub">Jarrujen Vaihto</a>
          <a href="/services/ilmastointi" className="drawer-link drawer-sub">Ilmastointi</a>
          <a href="/services/vaihteisto-kytkin" className="drawer-link drawer-sub" style={{ color: "var(--brand)" }}>Vaihteisto &amp; Kytkin</a>
          <a href="/services/alusta" className="drawer-link drawer-sub">Alusta &amp; Jousitus</a>
          <a href="/services/pesula" className="drawer-link drawer-sub">Autopesula</a>
          <a href="/#contact" className="drawer-link" style={{ marginTop: "4px" }}>Yhteystiedot</a>
        </div>
        <div style={{ padding: "16px 20px", borderTop: "1.5px solid var(--border)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="/varaa" className="btn-primary" style={{ justifyContent: "center", padding: "13px", fontSize: "15px", gap: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Varaa aika nyt
          </a>
          <a href="tel:+358449773677" style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: 600, color: "var(--ink-60)", textDecoration: "none" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
            </svg>
            +358 44 977 3677
          </a>
        </div>
      </div>

      {/* Drawer JS (inline script via dangerouslySetInnerHTML for server component) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var openBtn=document.getElementById('drawer-open-btn');
              var closeBtn=document.getElementById('drawer-close-btn');
              var drawer=document.getElementById('mobile-drawer');
              if(openBtn&&drawer){openBtn.addEventListener('click',function(){drawer.classList.add('open');document.body.style.overflow='hidden';});}
              if(closeBtn&&drawer){closeBtn.addEventListener('click',function(){drawer.classList.remove('open');document.body.style.overflow='';});}
              document.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer){drawer.classList.remove('open');document.body.style.overflow='';}});
            })();
          `,
        }}
      />
    </>
  );
}
