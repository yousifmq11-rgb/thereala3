import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';

export const metadata: Metadata = {
  title: 'BMW Huolto Espoo | 3A Service — AD-Valtuutettu Niittykumpu',
  description: 'BMW huolto Espoossa. AD-valtuutettu — takuu säilyy. Kaikki BMW-mallit. Oikeat BMW-hyväksytyt öljyt. Varaa aika verkossa.',
};

const BRAND_CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1A1A1A;background:#F5F5F2;-webkit-font-smoothing:antialiased;padding-top:90px;}
  :root{--brand:#E8890A;--brand-l:#FEF3DC;--ink:#1A1A1A;--border:#E2E2DC;}
  .service-row{display:flex;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border);gap:16px;}
  .service-row:last-child{border-bottom:none;}
  .spec-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:20px 24px;margin-bottom:12px;}
  .spec-card h4{font-size:14px;font-weight:700;color:#0F172A;margin-bottom:6px;}
  .spec-card p{font-size:14px;color:#64748B;line-height:1.7;}
  .issue-item{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid var(--border);}
  .issue-item:last-child{border-bottom:none;}
  .issue-dot{width:8px;height:8px;border-radius:50%;background:#E8890A;flex-shrink:0;margin-top:6px;}
  footer{background:#1A1A1A;color:rgba(255,255,255,.7);padding:48px 24px 24px;}
  footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}
  footer a:hover{color:#E8890A;}
  .main-grid{display:grid;grid-template-columns:1fr 340px;gap:48px;align-items:start;}
  @media(max-width:900px){.main-grid{grid-template-columns:1fr;}}
`;

export default function BMWPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BRAND_CSS }} />
      <SiteNav />

      {/* HERO */}
      <section style={{ background: '#fff', padding: '72px 24px 64px', borderBottom: '1.5px solid #E2E2DC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F4C81', letterSpacing: '0.08em', textTransform: 'uppercase' }}>BMW Huolto · Espoo · AD-Valtuutettu</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '20px', maxWidth: '720px' }}>
            BMW huolto Espoossa —<br /><span style={{ color: '#E8890A' }}>asiantunteva ja edullinen.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginBottom: '36px' }}>
            AD-valtuutettu korjaamo Espoon Niittykummussa. BMW:n tehdastakuu säilyy EU-lain mukaisesti. Oikeat BMW-hyväksytyt öljyt ja OEM-varaosat.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0F4C81', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(15,76,129,0.3)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Varaa BMW-huolto
            </a>
            <a href="tel:+358449773677" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#0F4C81', fontWeight: 700, fontSize: '15px', padding: '13px 24px', borderRadius: '100px', textDecoration: 'none', border: '2px solid #0F4C81' }}>
              +358 44 977 3677
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '64px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="main-grid">

          {/* LEFT */}
          <div>
            {/* Miksi 3A Service */}
            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8890A', marginBottom: '12px' }}>Miksi valita meidät</p>
              <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0F172A', marginBottom: '20px', letterSpacing: '-0.02em' }}>Miksi 3A Service BMW:lle?</h2>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8, marginBottom: '16px' }}>
                EU:n ryhmäpoikkeusasetus (2010/461/EU) takaa, että BMW:n tehdastakuu säilyy voimassa, kun käytät AD-valtuutettua korjaamoa ja BMW-hyväksyttyjä osia ja öljyjä. Et tarvitse kalliita merkkikorjaamoja takuun säilyttämiseksi.
              </p>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8 }}>
                3A Service on AD-valtuutettu korjaamo. Käytämme aina BMW Longlife-spesifikaation mukaista öljyä (Longlife-04 tai uudempi) ja OEM-hyväksyttyjä varaosia. Huoltokirja päivitetään — takuu ei katkea.
              </p>
            </div>

            {/* Yleisimmät viat */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '20px', letterSpacing: '-0.01em' }}>BMW-erityisosaaminen</h2>
              <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '20px', lineHeight: 1.7 }}>Tunnetut BMW-viat Suomessa — osaamme diagnosoida ja korjata ne:</p>
              <div>
                {[
                  { title: 'N47 dieselmoottorin jakoketju (2007–2013)', desc: 'Oireilee kierrosmittarin tärinänä kylmäkäynnistyksessä. Vaatii varhaisen korjauksen ennen moottorihajoamista. Tunnistamme oireen diagnostiikalla.' },
                  { title: 'Injektorivuodot (N47, B47 diesel)', desc: 'Dieselpolttoaine pilaantuu öljyyn. Aiheuttaa öljytason nousua ja moottoriöljyn ohentumista. Vaatii injektorikorjauksen ja öljynvaihdon.' },
                  { title: 'EGR-venttiilin tukkeutuminen', desc: 'Tyypillinen diesel-BMW-ongelma. Aiheuttaa mustaa savua ja suorituskyvyn heikkenemistä. EGR-puhdistus tai -vaihto.' },
                  { title: 'Ilmajousituksen kompressoriviat (X5, X6)', desc: 'Ajoneuvo roikkuu alhaalla tai kompressori käy jatkuvasti. Tunnistamme vian diagnostiikalla.' },
                ].map((issue) => (
                  <div key={issue.title} className="issue-item">
                    <div className="issue-dot" />
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>{issue.title}</p>
                      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.7 }}>{issue.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BMW öljy */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.01em' }}>BMW Longlife-öljy — mikä se on?</h2>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8, marginBottom: '16px' }}>
                BMW vaatii useimmissa nykymalleissa Longlife-04 tai Longlife-17 FE+ -luokituksen öljyn (tyypillisesti 5W-30 tai 0W-20). Tämä on matalaviskositeettinen täyssynteettinen öljy, joka on suunniteltu BMW:n pitkille huoltoväleille (15 000–30 000 km).
              </p>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8 }}>
                Väärä öljy voi johtaa moottorivaurioon pitkällä tähtäimellä — erityisesti N47 ja B47 dieseleillä. Meillä on aina varastossa BMW-spesifikaation mukainen öljy.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <div style={{ background: '#fff', border: '1.5px solid #E2E2DC', borderRadius: '20px', padding: '28px', marginBottom: '20px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#E8890A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>BMW huoltohinnat Espoossa</p>
              {[
                { name: 'Öljynvaihto (Longlife-öljy)', price: 'alk. 140 €' },
                { name: 'Määräaikaishuolto', price: 'alk. 289 €' },
                { name: 'Jarrupalat etu', price: 'alk. 189 €' },
                { name: 'OBD-diagnostiikka', price: '95 €/h' },
                { name: 'Jakoketjukorjaus N47', price: 'tarjous' },
              ].map((item) => (
                <div key={item.name} className="service-row">
                  <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>{item.name}</span>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', whiteSpace: 'nowrap' }}>{item.price}</span>
                </div>
              ))}
              <a href="/varaa" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#E8890A', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '12px', textDecoration: 'none', marginTop: '20px', boxShadow: '0 4px 16px rgba(232,137,10,0.3)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Varaa BMW-huolto
              </a>
            </div>

            <div style={{ background: '#FEF3DC', border: '1.5px solid rgba(232,137,10,0.3)', borderRadius: '16px', padding: '20px 24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#92400E', marginBottom: '8px' }}>🔒 Takuu säilyy</p>
              <p style={{ fontSize: '13px', color: '#78350F', lineHeight: 1.7 }}>
                EU:n ryhmäpoikkeusasetus 2010/461/EU takaa oikeuden huoltaa BMW missä tahansa AD-valtuutetussa korjaamossa ilman takuun menettämistä. 3A Service on AD-valtuutettu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F172A', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Varaa BMW-huolto Espoossa
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.7 }}>
            AD-valtuutettu korjaamo Sillankorva 8, Espoo. Oikeat öljyt, OEM-osat, takuu säilyy.
          </p>
          <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#E8890A', color: '#fff', fontWeight: 700, fontSize: '16px', padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,137,10,0.4)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Varaa aika verkossa
          </a>
        </div>
      </section>

      <footer>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', paddingBottom: '24px' }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 900, fontSize: '16px', marginBottom: '8px' }}>3A Service Oy</p>
            <p>Sillankorva 8, 02300 Espoo</p>
            <p style={{ marginTop: '4px' }}>Ma–Pe 8:00–17:00</p>
          </div>
          <div>
            <a href="/merkit/mercedes">Mercedes-Benz huolto</a>
            <a href="/merkit/volvo">Volvo huolto</a>
            <a href="/merkit/toyota">Toyota huolto</a>
            <a href="/merkit/audi">Audi huolto</a>
            <a href="/merkit/volkswagen">VW huolto</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>© 2026 3A Service Oy | BMW Huolto Espoo</p>
        </div>
      </footer>
    </>
  );
}
