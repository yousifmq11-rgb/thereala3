import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ilmastoinnin Huolto Espoo | 3A Service — AC Huolto, R134a & R1234yf",
  description:
    "Ilmastoinnin huolto Espoossa. AC-kaasun täyttö (R134a/R1234yf), desinfiointi, vianhaku. AD-valtuutettu Niittykummussa. Kaikki automerkit. Varaa aika nyt.",
};

const CSS = `
  :root{--brand:#E8890A;--brand-d:#C4720A;--brand-l:#FEF3DC;--ink:#1A1A1A;--ink-60:rgba(26,26,26,0.6);--surface:#F5F5F2;--border:#E2E2DC;--adblue:#0044B0;--hero:#111;}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{font-family:'Roboto',sans-serif;color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased;padding-top:80px;padding-bottom:80px;}
  .btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--brand);color:#fff;font-family:'Roboto',sans-serif;font-weight:700;border:none;cursor:pointer;border-radius:8px;padding:13px 24px;font-size:14px;transition:background .18s,transform .14s,box-shadow .18s;box-shadow:0 4px 16px rgba(232,137,10,0.3);text-decoration:none;white-space:nowrap;}
  .btn-primary:hover{background:var(--brand-d);transform:translateY(-1px);box-shadow:0 8px 24px rgba(232,137,10,0.4);}
  .btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:transparent;color:var(--ink);font-family:'Roboto',sans-serif;font-weight:700;border:2px solid var(--ink);cursor:pointer;border-radius:8px;padding:11px 24px;font-size:14px;transition:background .18s,color .18s,transform .14s;text-decoration:none;}
  .btn-outline:hover{background:var(--ink);color:#fff;transform:translateY(-1px);}
  #navbar{position:fixed;top:0;left:0;right:0;z-index:100;padding:10px 20px;transition:padding .3s;}
  .nav-dock{max-width:1280px;margin:0 auto;height:60px;display:flex;align-items:center;gap:24px;padding:0 22px;background:rgba(20,20,20,0.82);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.45),0 2px 8px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.1),inset 0 -1px 0 rgba(0,0,0,0.2);}
  .nav-link{font-size:14px;font-weight:500;color:rgba(255,255,255,0.78);text-decoration:none;padding:6px 2px;border-bottom:2px solid transparent;transition:color .15s,border-color .15s;}.nav-link:hover{color:#fff;border-color:rgba(255,255,255,0.5);}
  .check-item{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid var(--border);}
  .check-item:last-child{border-bottom:none;}
  .faq-item{border-bottom:1.5px solid var(--border);}
  details.faq-item summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:20px 0;font-size:17px;font-weight:700;}
  details.faq-item summary::-webkit-details-marker{display:none;}
  .faq-a{display:none;}
  details[open] .faq-a{display:block;}
  .faq-chevron{flex-shrink:0;transition:transform .2s;}
  details[open] .faq-chevron{transform:rotate(45deg);}
  .benefit-card{background:#fff;border-radius:16px;padding:28px;border:1.5px solid var(--border);transition:border-color .2s,transform .2s,box-shadow .2s;}
  .benefit-card:hover{border-color:rgba(232,137,10,0.4);transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.08);}
  .why-icon{width:52px;height:52px;background:var(--brand-l);border-radius:14px;display:flex;align-items:center;justify-content:center;border:1.5px solid rgba(232,137,10,0.2);margin-bottom:16px;}
  .reveal{opacity:1;transform:none;}
  .section-tag{font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--brand);}
  footer{background:var(--ink);color:rgba(255,255,255,.7);}
  footer h4{color:#fff;font-size:13px;font-weight:700;margin-bottom:14px;letter-spacing:0.06em;text-transform:uppercase;}
  footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}
  footer a:hover{color:var(--brand);}
  #mobile-sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:90;background:#fff;padding:12px 20px;border-top:1.5px solid var(--border);box-shadow:0 -4px 20px rgba(0,0,0,0.1);}
  @media(max-width:768px){#mobile-sticky{display:flex;gap:10px;}}
  .grid-services{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
  @media(max-width:640px){.hide-mobile{display:none!important;}}
  @media(min-width:641px){.hide-desktop{display:none!important;}}
  .new-hero-grid{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;}
  @media(max-width:900px){.new-hero-grid{grid-template-columns:1fr;}}
  .hero-accent-line{width:80px;height:3px;background:linear-gradient(90deg,#0F4C81,transparent);border-radius:2px;margin-bottom:24px;}
  .alert-banner{background:rgba(232,137,10,0.08);border:1.5px solid rgba(232,137,10,0.3);border-radius:12px;padding:16px 20px;display:flex;align-items:flex-start;gap:12px;margin-bottom:20px;}
  .srv-main-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;max-width:1100px;margin:0 auto;}
  .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;}
  .t-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:20px;}
  .t-stars{color:#F5A623;font-size:13px;letter-spacing:1px;margin-bottom:10px;}
  .t-text{font-size:16px;color:var(--ink-60);line-height:1.7;font-weight:400;margin-bottom:14px;}
  .t-name{font-size:13px;font-weight:700;color:var(--ink);}
  .t-role{font-size:12px;color:var(--ink-60);font-weight:300;}
  .t-avatar{width:34px;height:34px;border-radius:50%;background:var(--brand-l);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--brand);flex-shrink:0;}
  .pricing-row{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--border);gap:16px;}
  .pricing-row:last-child{border-bottom:none;}
  @media(max-width:900px){
    .new-hero-grid>div:first-child{padding:40px 0 0!important;}
  }
  @media(max-width:768px){
    .srv-main-grid{grid-template-columns:1fr!important;gap:32px!important;}
    .footer-grid{grid-template-columns:1fr!important;gap:24px!important;}
  }
  *:focus-visible{outline:2px solid var(--brand);outline-offset:2px;}
  ::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{background:var(--brand);border-radius:3px;}
`;

const checkSvg = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const calSvg = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const phoneSvg = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
  </svg>
);

const plusSvg = (
  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function IlmastointiPage() {
  const pillStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 7,
    background: "#F8FAFC",
    border: "1.5px solid #E2E8F0",
    borderRadius: 10,
    padding: "8px 14px",
  };
  const pillTextStyle: React.CSSProperties = { fontSize: 12, fontWeight: 600, color: "#0F172A" };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

      {/* NAVBAR */}
      <header id="navbar">
        <div className="nav-dock">
          <a href="/">
            <img src="/logo/pomelli_bdna_image_0509.png" alt="3A Service Oy" style={{ height: 44, width: "auto" }} />
          </a>
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 20, marginLeft: 8 }}>
            <a href="/" className="nav-link">Etusivu</a>
            <a href="/#services-scroll-wrapper" className="nav-link" style={{ color: "var(--brand)", borderColor: "var(--brand)" }}>Palvelut</a>
            <a href="/#contact" className="nav-link">Yhteystiedot</a>
          </nav>
          <div style={{ flex: 1 }} />
          <a href="tel:+358449773677" className="hide-mobile" style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
            +358 44 977 3677
          </a>
          <a href="/varaa" className="btn-primary hide-mobile" style={{ padding: "9px 20px", fontSize: 13 }}>
            {calSvg} Varaa aika
          </a>
          {/* Mobile hamburger — purely decorative, no JS needed for server component */}
          <button className="hide-desktop" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }} aria-label="Valikko">
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
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-60)" }}>
          <a href="/" style={{ color: "var(--ink-60)", textDecoration: "none" }}>Etusivu</a>
          <span>›</span>
          <a href="/#services-scroll-wrapper" style={{ color: "var(--ink-60)", textDecoration: "none" }}>Palvelut</a>
          <span>›</span>
          <span style={{ color: "var(--brand)", fontWeight: 500 }}>Ilmastoinnin Huolto</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "80px 24px 64px", borderBottom: "1.5px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="new-hero-grid">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#0F4C81", letterSpacing: "0.08em", textTransform: "uppercase" }}>Ilmastointi · AC · Espoo</span>
              </div>

              <h1 style={{ fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: 12 }}>
                Ilmastoinnin huolto Espoossa —{" "}
                <span style={{ color: "#0F4C81" }}>viileä auto, raikas ilma.</span>
              </h1>

              <div className="hero-accent-line" />

              <p style={{ fontSize: 18, color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 540, fontWeight: 400 }}>
                Ilmastointi ei ole vain mukavuus — se on turvallisuustekijä. Toimiva AC huuruttaa tuulilasin nopeammin syksyllä ja talvella.
              </p>

              {/* Feature pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                <div style={pillStyle}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={pillTextStyle}>Ilmainen tarkistus</span>
                </div>
                <div style={pillStyle}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span style={pillTextStyle}>R134a &amp; R1234yf</span>
                </div>
                <div style={pillStyle}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                    <rect x="1" y="3" width="15" height="13" rx="2" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span style={pillTextStyle}>Kaikki automerkit</span>
                </div>
                <div style={pillStyle}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span style={pillTextStyle}>Saman päivän palvelu</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                <a
                  href="/varaa"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0F4C81", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 100, textDecoration: "none", boxShadow: "0 4px 20px rgba(15,76,129,0.3)" }}
                >
                  {calSvg}
                  Varaa ilmastointihuolto
                </a>
                <a
                  href="tel:+358449773677"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#0F4C81", fontWeight: 700, fontSize: 15, padding: "13px 24px", borderRadius: 100, textDecoration: "none", border: "2px solid #0F4C81" }}
                >
                  {phoneSvg}
                  +358 44 977 3677
                </a>
              </div>
            </div>

            {/* Right dark panel */}
            <div className="hide-mobile" style={{ background: "#0F172A", borderRadius: 24, padding: 36, minWidth: 260, flexShrink: 0 }}>
              <div style={{ fontSize: 52, fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 4 }}>
                4.9<span style={{ fontSize: 24, color: "#F59E0B", marginLeft: 2 }}>★</span>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 28, fontWeight: 500 }}>/ 5.0 · Google-arvio</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.07)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>100+ arvostelua</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.07)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>AD-Valtuutettu</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.07)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Ma–Pe 8:00–17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="srv-main-grid">
          {/* Left: checklist */}
          <div className="reveal">
            <p className="section-tag">Mitä sisältyy</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", margin: "12px 0 32px", lineHeight: 1.1 }}>
              Ilmastointihuolto sisältää
            </h2>
            <div>
              {[
                ["Vanhan kylmäaineen talteenotto", "Ympäristöturvallinen käsittely sertifioidulla laitteistolla"],
                ["Järjestelmän tiiveystesti (UV-väriaine)", "Paikannamme vuodot ennen täyttöä"],
                ["Uuden kylmäaineen täyttö (R134a tai R1234yf)", "Oikea tyyppi rekisterinumerosi mukaan — aina"],
                ["Kompressorin öljy (tarvittaessa)", "Huolletaan samalla kertaa"],
                ["Kondensaattorin ja letkujen tarkistus", "Visuaalinen tarkistus vuotojen varalta"],
                ["Jäähdytystehon mittaus ennen ja jälkeen", "Näet konkreettisen tuloksen"],
                ["Desinfiointi (optio — suositeltu)", "Poistaa bakteerit ja homeen höyrystimestä"],
              ].map(([title, desc]) => (
                <div key={title} className="check-item">
                  {checkSvg}
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 5 }}>{title}</div>
                    <div style={{ fontSize: 15, color: "var(--ink-60)", fontWeight: 400 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: "var(--brand-l)", border: "1.5px solid rgba(232,137,10,0.25)", borderRadius: 20, padding: 32 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "var(--brand)", marginBottom: 12 }}>Tarkistus</div>
              <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 10 }}>Tarkistus ILMAINEN</h3>
              <p style={{ fontSize: 14, color: "var(--ink-60)", lineHeight: 1.65, marginBottom: 20, fontWeight: 300 }}>
                Diagnosoimme ongelman ennen täyttöä. Kerromme tarkan hinnan etukäteen.
              </p>
              <a href="/varaa" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: 13, gap: 8 }}>
                {calSvg} Varaa ilmastointihuolto
              </a>
            </div>
            <div style={{ background: "var(--surface)", borderRadius: 16, padding: 24, border: "1.5px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, background: "var(--adblue)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>AD-Valtuutettu</div>
                  <div style={{ fontSize: 14, color: "var(--ink-60)", fontWeight: 400 }}>Takuusi säilyy EU-lain mukaan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS / SYMPTOMS */}
      <section style={{ padding: "72px 24px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 32 }}>
            <p className="section-tag">Oireet</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: 10, marginBottom: 24 }}>
              Merkit että ilmastointi tarvitsee huoltoa
            </h2>
          </div>
          <div className="reveal" style={{ display: "grid", gap: 14 }}>
            {[
              "Jäähdytysteho heikentynyt selvästi — puhaltelee mutta ei tunnu kylmältä.",
              "Epämiellyttävä haju (märkärätti / homeen haju) ilmastoinnin käynnistyessä.",
              "Ikkunat huurtuvat normaalia helpommin.",
              "Kompressorin alueelta kuuluu outoja ääniä käynnistettäessä.",
              "Kosteutta tai tihkumista sisätiloissa.",
            ].map((txt) => (
              <div key={txt} className="check-item" style={{ background: "#fff", borderRadius: 12, padding: "14px 18px", border: "1.5px solid var(--border)" }}>
                {checkSvg}
                <p style={{ fontSize: 16, lineHeight: 1.6, fontWeight: 400 }}>{txt}</p>
              </div>
            ))}
          </div>
          <div className="alert-banner" style={{ marginTop: 24 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p style={{ fontSize: 15, lineHeight: 1.7, fontWeight: 400 }}>
              Useimmiten syy on yksinkertainen: kylmäainetta on haihtunut — täyttö riittää.
            </p>
          </div>
        </div>
      </section>

      {/* WHY REFRIGERANT EVAPORATES */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p className="section-tag">Tieto</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: 10, marginBottom: 24 }}>
            Miksi kylmäainetta haihtuu — vaikka ei ole vikaa?
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            {[
              "Kylmäaine haihtuu luonnostaan 10–15% vuodessa — myös käyttämättömästä järjestelmästä.",
              "Tiivisteet kuivuvat talven aikana jos AC on ollut pitkään pois käytöstä.",
              "Siksi ilmastointi kannattaa pitää päällä myös talvella (15 min viikossa).",
              "Vuotojen etsintä UV-väriaineella — jos systemaattinen vuoto, korjataan.",
            ].map((txt) => (
              <div key={txt} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                {checkSvg}
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-60)" }}>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R134a VS R1234yf */}
      <section style={{ padding: "72px 24px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p className="section-tag">Kylmäainetyypit</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: 10, marginBottom: 24 }}>
            R134a vs R1234yf — mitä eroa?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
            <div style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: 16, padding: 24 }}>
              <div style={{ fontWeight: 900, fontSize: 20, marginBottom: 10, color: "#0F172A" }}>R134a</div>
              <p style={{ fontSize: 15, color: "var(--ink-60)", lineHeight: 1.7 }}>
                Ennen 2017 valmistetut autot. Edullisempi kaasu — vakiintunut standardi vanhemmissa ajoneuvoissa.
              </p>
            </div>
            <div style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: 16, padding: 24 }}>
              <div style={{ fontWeight: 900, fontSize: 20, marginBottom: 10, color: "#0F172A" }}>R1234yf</div>
              <p style={{ fontSize: 15, color: "var(--ink-60)", lineHeight: 1.7 }}>
                Vuodesta 2017 eteenpäin. Ympäristöystävällisempi, kalliimpi. EU-laki vaatii uusissa autoissa.
              </p>
            </div>
          </div>
          <div className="alert-banner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, color: "var(--brand)" }}>TÄRKEÄÄ</div>
              <p style={{ fontSize: 14, color: "var(--ink-60)", lineHeight: 1.6, fontWeight: 300 }}>
                Väärän kaasun täyttäminen voi vaurioittaa kompressorin — tarkistamme aina oikean tyypin rekisterinumerostasi. Kukaan ei saa käsitellä kylmäaineita ilman asianmukaisia lupia ja laitteita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESINFIOINTI */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p className="section-tag">Sisäilma</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: 10, marginBottom: 24 }}>
            Ilmastoinnin desinfiointi — miksi se kannattaa?
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            {[
              "Kosteuden tiivistyminen höyrystimessä luo täydellisen ympäristön bakteereiden ja homeen kasvulle.",
              "Erityisesti astmaatikoille ja allergikoille sisäilman laatu on tärkeää.",
              "Pistävä haju = bakteerikertymä höyrystimessä.",
              "Desinfiointi poistaa bakteerit ja epämiellyttävät hajut kokonaan.",
              "Suositellaan vuosittain tai heti hajun ilmaannuttua.",
            ].map((txt) => (
              <div key={txt} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                {checkSvg}
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-60)" }}>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "72px 24px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="section-tag">Hinnoittelu</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: 10 }}>
              Hinnat
            </h2>
          </div>
          <div style={{ background: "#fff", border: "1.5px solid var(--border)", borderRadius: 20, padding: 32 }}>
            {[
              ["Ilmastoinnin tarkistus", "ILMAINEN"],
              ["AC-täyttö (R134a)", "79–99 €"],
              ["AC-täyttö (R1234yf)", "119–149 €"],
              ["AC-täyttö + desinfiointi", "130–190 €"],
              ["Desinfiointi erikseen", "59 €"],
              ["Kompressorin vaihto", "Tarjous pyynnöstä"],
            ].map(([label, price]) => (
              <div key={label} className="pricing-row">
                <span style={{ fontSize: 16, fontWeight: 500 }}>{label}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: label === "Ilmastoinnin tarkistus" ? "#16A34A" : "var(--ink)", whiteSpace: "nowrap" }}>{price}</span>
              </div>
            ))}
            <p style={{ fontSize: 14, color: "var(--ink-60)", marginTop: 20, fontStyle: "italic" }}>
              Kerromme tarkan hinnan ennen työtä.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="section-tag">FAQ</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: 10 }}>
              Usein kysyttyä
            </h2>
          </div>
          <div className="reveal">
            {[
              [
                "Ilmastointi puhaltaa mutta ei jäähdytä — mikä hätänä?",
                "Yleisin syy: kylmäainetta on hävinnyt liian vähäksi. Kompressori käynnistyy mutta ei pysty jäähdyttämään riittävästi. Yksinkertainen kylmäainetäyttö ratkaisee useimmiten. Tule tarkistukseen — diagnosoimme ongelman ennen täyttöä.",
              ],
              [
                "Kuinka usein ilmastointi pitää huoltaa?",
                "Suosittelemme huoltoa 2 vuoden välein tai heti kun havaitset heikentynyttä jäähdytystehoa tai hajuja. Kylmäaine haihtuu luonnostaan 10–15% vuodessa, joten säännöllinen huolto on edullisempaa kuin kompressorin uusiminen.",
              ],
              [
                "Voinko käyttää ilmastointia talvella?",
                "Kyllä — ja se kannattaa. Ilmastoinnin käyttö talvella kuivaa sisäilmaa ja poistaa tuulilasin huurtumisen nopeammin. Lisäksi tiivisteet pysyvät kunnossa kun järjestelmä on satunnaisessa käytössä.",
              ],
              [
                "Ilmastointi haisee homeelta — vaarallista?",
                "Ei hengenvaarallista, mutta bakteerikertymä höyrystimessä voi aiheuttaa allergiaoireita, päänsärkyä ja hengitysongelmia. Desinfiointi poistaa hajun ja bakteerit kokonaan.",
              ],
              [
                "Kuinka kauan ilmastoinnin huolto kestää?",
                "45–90 minuuttia. Voit odottaa meillä.",
              ],
              [
                "Miksi R1234yf täyttö on kalliimpi kuin R134a?",
                "R1234yf on uudempi, ympäristöystävällisempi kaasu, jonka tuotantokustannukset ovat korkeammat. EU-laki vaatii sen käytön kaikissa vuodesta 2017 eteenpäin valmistetuissa autoissa.",
              ],
              [
                "Voidaanko ilmastoinnin kompressori korjata?",
                "Riippuu viasta. Tarkistamme aina onko edullisempi korjaus mahdollinen ennen kompressorin vaihtoa. Kompressorin vaihto on kallis (400–900 €) — kerromme rehellisesti kaikki vaihtoehdot.",
              ],
              [
                "Vaikuttaako ilmastointihuolto takuuseen?",
                "Ei. AD-valtuutettuna teemme ilmastointihuollot valmistajan ohjeiden mukaisesti — takuu säilyy.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="faq-item">
                <summary>
                  <span>{q}</span>
                  {plusSvg}
                </summary>
                <div className="faq-a" style={{ padding: "0 0 18px", fontSize: 16, color: "var(--ink-60)", lineHeight: 1.8, fontWeight: 400 }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "var(--surface)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="section-tag">Google Reviews</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginTop: 10 }}>
              Mitä asiakkaamme sanovat
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {[
              [
                "AC ei jäähdyttänyt enää. Täyttö tehty tunnin sisällä varauksesta. Toimii täydellisesti. Hinta täsmälleen mitä lupasivat.",
                "Johanna M.",
                "Audi Q5 · Ilmastointihuolto",
                "J",
              ],
              [
                "Desinfiointi poisti sen ikävän märkärätinhajun täysin. Olisi pitänyt tehdä aiemmin!",
                "Mikko L.",
                "Toyota Corolla · Desinfiointi",
                "M",
              ],
              [
                "R1234yf täyttö — osasivat tarkistaa oikean kaasutyypin rekisterilistalta itse. Ei tarvinnut itse selvittää.",
                "Paula R.",
                "Volkswagen Tiguan 2019 · AC-täyttö",
                "P",
              ],
            ].map(([text, name, role, initial]) => (
              <div key={name} className="t-card">
                <div className="t-stars">★★★★★</div>
                <p className="t-text">{text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div className="t-avatar">{initial}</div>
                  <div>
                    <div className="t-name">{name}</div>
                    <div className="t-role">{role}</div>
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
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Toimiiko ilmastointisi ennen seuraavaa helleaaltoa?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32, fontWeight: 300 }}>
            Ilmastoinnin tarkistus on ilmainen. Tule tai varaa aika — huolto valmistuu saman päivän aikana.
          </p>
          <a
            href="/varaa"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--brand)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 36px", borderRadius: 100, textDecoration: "none", boxShadow: "0 4px 20px rgba(232,137,10,0.35)" }}
          >
            {calSvg}
            Varaa ilmastointihuolto
          </a>
        </div>
      </section>

      {/* AutoJerry */}
      <section style={{ padding: "56px 24px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#E8890A", marginBottom: 10 }}>
            ASIAKASARVOSTELUT
          </div>
          <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, color: "#0F172A", marginBottom: 8 }}>
            Mitä asiakkaamme sanovat
          </h2>
          <p style={{ fontSize: 15, color: "#64748B", marginBottom: 32 }}>
            Oikeat arvostelut — AutoJerry-palvelun kautta
          </p>
          <iframe
            src="https://autojerry.fi/arvostelut/upotus-2/8441/"
            style={{ width: "100%", border: "none", borderRadius: 16, minHeight: 500, display: "block" }}
            loading="lazy"
            title="AutoJerry Asiakasarvostelut"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "48px 24px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-grid" style={{ paddingBottom: 40 }}>
            {/* Brand */}
            <div>
              <img src="/logo/pomelli_bdna_image_0509.png" alt="3A Service Oy" style={{ height: 48, width: "auto", marginBottom: 14, display: "block" }} />
              <p style={{ fontSize: 14 }}>Luotettavaa autohuoltoa Espoossa.</p>
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                <a href="https://www.facebook.com/profile.php?id=61556218666083" target="_blank" rel="noopener noreferrer" style={{ width: 34, height: 34, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://www.instagram.com/3a_service_oy/" target="_blank" rel="noopener noreferrer" style={{ width: 34, height: 34, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /></svg>
                </a>
              </div>
            </div>
            {/* Services */}
            <div>
              <h4>Palvelut</h4>
              <a href="/services/maaraikaishuolto">Määräaikaishuolto</a>
              <a href="/services/jakohihna">Jakohihnan Vaihto</a>
              <a href="/services/oljynvaihto">Öljynvaihto</a>
              <a href="/services/jarrut">Jarrujen Vaihto</a>
              <a href="/services/ilmastointi" style={{ color: "var(--brand)" }}>Ilmastointi</a>
              <a href="/services/vaihteisto-kytkin">Vaihteisto &amp; Kytkin</a>
              <a href="/services/alusta">Alusta &amp; Jousitus</a>
              <a href="/services/katsastus">Katsastushuolto</a>
              <a href="/services/sahkotyot">Sähkötyöt</a>
              <a href="/services/vikadiagnostiikka">Vikadiagnostiikka</a>
              <a href="/services/renkaat">Renkaiden Palvelut</a>
              <a href="/services/pesula">Autopesula</a>
            </div>
            {/* Contact */}
            <div>
              <h4>Yhteystiedot</h4>
              <a href="tel:+358449773677">+358 44 977 3677</a>
              <a href="mailto:info@3aservice.fi">info@3aservice.fi</a>
              <a href="https://maps.app.goo.gl/68533AxtrqMYACAVA" target="_blank" rel="noopener noreferrer">Sillankorva 8, 02300 Espoo</a>
              <a href="/#contact">Ma–Pe 8:00–17:00</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "18px 0" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>© 2026 3A Service Oy | Autohuolto</p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div id="mobile-sticky">
        <a href="/varaa" className="btn-primary" style={{ flex: 1, justifyContent: "center", padding: 13, fontSize: 15, gap: 8 }}>
          {calSvg} Varaa aika
        </a>
        <a href="tel:+358449773677" style={{ width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid var(--border)", borderRadius: 8, color: "var(--ink-60)", flexShrink: 0 }} aria-label="+358 44 977 3677">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
          </svg>
        </a>
      </div>
    </>
  );
}
