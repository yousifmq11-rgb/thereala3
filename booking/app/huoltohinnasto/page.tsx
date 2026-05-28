import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';

export const metadata: Metadata = {
  title: 'Huoltohinnasto Espoo | 3A Service — Selkeät Hinnat Etukäteen',
  description: '3A Service autohuollon hinnasto Espoossa. Öljynvaihto 110 €, jarrupalat alk. 189 €, katsastushuolto 29 €. Kaikki hinnat ALV sisältäen.',
};

const CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1A1A1A;background:#F5F5F2;-webkit-font-smoothing:antialiased;padding-top:90px;}
  :root{--brand:#E8890A;--brand-l:#FEF3DC;--ink:#1A1A1A;--border:#E2E2DC;}
  .price-section{background:#fff;border:1.5px solid var(--border);border-radius:20px;overflow:hidden;margin-bottom:24px;}
  .price-section-header{background:#F8FAFC;padding:18px 28px;border-bottom:1.5px solid var(--border);display:flex;align-items:center;gap:12px;}
  .price-section-title{font-size:16px;font-weight:800;color:#0F172A;letter-spacing:-0.01em;}
  .price-row{display:flex;align-items:center;justify-content:space-between;padding:16px 28px;border-bottom:1px solid var(--border);gap:16px;}
  .price-row:last-child{border-bottom:none;}
  .price-row:hover{background:#FAFAFA;}
  .price-name{font-size:15px;color:#0F172A;font-weight:500;}
  .price-note{font-size:12px;color:#94A3B8;margin-top:2px;}
  .price-value{font-size:16px;font-weight:800;color:#0F172A;white-space:nowrap;flex-shrink:0;}
  .price-value.free{color:#059669;}
  .price-value.ask{color:#64748B;font-size:14px;}
  .price-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:24px;}
  .trust-badge{display:flex;align-items:center;gap:10px;padding:14px 20px;background:var(--brand-l);border:1.5px solid rgba(232,137,10,0.25);border-radius:12px;font-size:13px;font-weight:600;color:#92400E;}
  footer{background:#1A1A1A;color:rgba(255,255,255,.7);padding:48px 24px 24px;}
  footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}
  footer a:hover{color:#E8890A;}
  @media(max-width:640px){.price-grid{grid-template-columns:1fr;}.price-row{padding:14px 20px;}}
`;

const SECTIONS = [
  {
    title: 'Perushuollot',
    icon: '🔧',
    items: [
      { name: 'Öljynvaihto + suodatin', price: 'alk. 110 €', note: 'Oikea öljy jokaiselle merkille' },
      { name: 'Määräaikaishuolto perus', price: 'alk. 189 €', note: 'Öljy, suodattimet, tarkistus' },
      { name: 'Määräaikaishuolto laaja', price: 'alk. 289 €', note: 'Sytytystulpat, nesteet, kaikki suodattimet' },
    ],
  },
  {
    title: 'Renkaat',
    icon: '🛞',
    items: [
      { name: 'Renkaiden vaihto (vanteille)', price: '80 €', note: '4 pyörää, noutokäynti sisältyy' },
      { name: 'Renkaiden vaihto + tasapainotus', price: '99 €', note: 'Paras vaihtoehto uusille renkaille' },
    ],
  },
  {
    title: 'Jarrut',
    icon: '⚙️',
    items: [
      { name: 'Jarrupalat etu', price: 'alk. 189 €', note: 'Työ + palat, OEM-laatu' },
      { name: 'Jarrupalat taka', price: 'alk. 170 €', note: 'Työ + palat' },
      { name: 'Jarrupalat etu + taka', price: 'alk. 320 €', note: 'Kokonaissetti, etu ja taka' },
      { name: 'Jarruneste vaihto', price: '65 €', note: 'Suositeltu 2 v välein' },
      { name: 'Jarrutarkistus', price: 'ILMAINEN', note: 'Kulumamittaus molemmilta akseleilta', free: true },
    ],
  },
  {
    title: 'Katsastus',
    icon: '✅',
    items: [
      { name: 'Katsastus-Turva tarkastus', price: '29 €', note: 'Ennakkotarkistus ennen katsastuspäivää' },
      { name: 'Katsastustarkastus', price: 'ILMAINEN', note: 'Jäsenille ja toistuvaisasiakkaille', free: true },
    ],
  },
  {
    title: 'Ilmastointi',
    icon: '❄️',
    items: [
      { name: 'AC-täyttö R134a', price: 'alk. 79 €', note: 'Vanhemmat autot (ennen 2017)' },
      { name: 'AC-täyttö R1234yf', price: 'alk. 119 €', note: 'Uudemmat autot (2017 →)' },
      { name: 'Desinfiointi', price: '59 €', note: 'Poistaa homeen ja bakteerit' },
    ],
  },
  {
    title: 'Vianhaku & Diagnostiikka',
    icon: '🔍',
    items: [
      { name: 'OBD-diagnostiikka', price: '95 €/h', note: 'Kaikki merkit, kirjallinen raportti' },
      { name: 'Työtuntihinta', price: '95 €/h', note: 'Kaikki korjaustyöt' },
    ],
  },
  {
    title: 'Muut korjaukset',
    icon: '🛠️',
    items: [
      { name: 'Kytkin (työ)', price: 'alk. 490 €', note: 'Kytkinlevy + painelevy + laakeri' },
      { name: 'Jakohihna', price: 'tarjous pyynnöstä', note: 'Vesipumppu + kiristinrullat suositellaan', ask: true },
      { name: 'Iskunvaimentimet etu (pari)', price: 'alk. 280 €', note: 'Osat + työ, akseleittain pareittain' },
      { name: 'Pallonivel (kpl)', price: 'alk. 120 €', note: 'Osat + työ' },
    ],
  },
];

export default function HuoltohinnastoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteNav active="hinnasto" />

      {/* HEADER */}
      <section style={{ background: '#fff', padding: '64px 24px 56px', borderBottom: '1.5px solid #E2E2DC' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FEF3DC', border: '1.5px solid rgba(232,137,10,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#E8890A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Hinnasto · Espoo · ALV 25,5% sisältäen</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '16px', lineHeight: 1.1 }}>
            Selkeät hinnat —<br /><span style={{ color: '#E8890A' }}>etukäteen.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.7, maxWidth: '560px', marginBottom: '32px' }}>
            Kaikki hinnat ALV 25,5 % sisältäen. Saat aina kirjallisen tarjouksen ennen töiden aloittamista — hinta ei muutu työn aikana.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <div className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              AD-valtuutettu — takuusi säilyy
            </div>
            <div className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Hinta ei muutu kesken työn
            </div>
            <div className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Nopea ajanvaraus verkossa
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLES */}
      <section style={{ padding: '64px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="price-grid">
          {SECTIONS.map((section) => (
            <div key={section.title} className="price-section">
              <div className="price-section-header">
                <span style={{ fontSize: '22px' }}>{section.icon}</span>
                <span className="price-section-title">{section.title}</span>
              </div>
              {section.items.map((item) => (
                <div key={item.name} className="price-row">
                  <div>
                    <div className="price-name">{item.name}</div>
                    <div className="price-note">{item.note}</div>
                  </div>
                  <div className={`price-value${(item as any).free ? ' free' : ''}${(item as any).ask ? ' ask' : ''}`}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div style={{ background: '#fff', border: '1.5px solid #E2E2DC', borderRadius: '20px', padding: '32px', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ width: '44px', height: '44px', background: '#FEF3DC', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1.5px solid rgba(232,137,10,0.2)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8890A" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div>
              <p style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Huomio hinnoista</p>
              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.75 }}>
                Kaikki hinnat sisältävät ALV 25,5 %. Hinta riippuu automallista ja osien valinnasta. Saat aina kirjallisen tarjouksen ennen töiden aloittamista — hinta ei muutu työn aikana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F172A', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Pyydä ilmainen tarjous
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.7 }}>
            Varaa aika verkossa tai soita — kerromme tarkan hinnan ennen töiden aloitusta.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#E8890A', color: '#fff', fontWeight: 700, fontSize: '16px', padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,137,10,0.4)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Varaa aika verkossa
            </a>
            <a href="tel:+358449773677" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#fff', fontWeight: 700, fontSize: '16px', padding: '15px 32px', borderRadius: '100px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.34a16 16 0 0 0 5.75 5.75l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z"/></svg>
              +358 44 977 3677
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', paddingBottom: '24px' }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 900, fontSize: '16px', marginBottom: '8px' }}>3A Service Oy</p>
            <p>Sillankorva 8, 02300 Espoo</p>
            <p style={{ marginTop: '4px' }}>Ma–Pe 8:00–17:00 · +358 44 977 3677</p>
          </div>
          <div>
            <a href="/varaa">Varaa aika</a>
            <a href="/blog">Ajankohtaista</a>
            <a href="https://3aservice.fi">Etusivu</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>© 2026 3A Service Oy | Autohuolto Espoo · Hinnat ALV 25,5 % sisältäen</p>
        </div>
      </footer>
    </>
  );
}
