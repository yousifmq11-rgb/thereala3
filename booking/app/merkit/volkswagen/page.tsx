import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';

export const metadata: Metadata = {
  title: 'Volkswagen Huolto Espoo | 3A Service — DSG & TSI Osaajat',
  description: 'Volkswagen huolto Espoossa. AD-valtuutettu. DSG-öljy, TSI-moottorit, DPF-huolto, kaikki VW-mallit. Varaa aika verkossa.',
};

const CSS = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1A1A1A;background:#F5F5F2;-webkit-font-smoothing:antialiased;padding-top:90px;}.service-row{display:flex;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid #E2E2DC;gap:16px;}.service-row:last-child{border-bottom:none;}.issue-item{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid #E2E2DC;}.issue-item:last-child{border-bottom:none;}.issue-dot{width:8px;height:8px;border-radius:50%;background:#E8890A;flex-shrink:0;margin-top:6px;}footer{background:#1A1A1A;color:rgba(255,255,255,.7);padding:48px 24px 24px;}footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}footer a:hover{color:#E8890A;}.main-grid{display:grid;grid-template-columns:1fr 340px;gap:48px;align-items:start;}@media(max-width:900px){.main-grid{grid-template-columns:1fr;}}`;

export default function VolkswagenPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteNav />
      <section style={{ background: '#fff', padding: '72px 24px 64px', borderBottom: '1.5px solid #E2E2DC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F4C81', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Volkswagen Huolto · Espoo · DSG &amp; TSI Osaajat</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '20px', maxWidth: '720px' }}>
            Volkswagen huolto<br />Espoossa —{' '}
            <span style={{ color: '#E8890A' }}>Golf, Passat, Tiguan.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginBottom: '36px' }}>
            Kaikki VW-mallit — Golf, Passat, Polo, Tiguan, T-Roc ja Transporter. DSG-vaihteistohuolto, TSI/TDI-moottorit ja DPF-palvelut.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0F4C81', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none' }}>Varaa VW-huolto</a>
            <a href="tel:+358449773677" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0F4C81', fontWeight: 700, fontSize: '15px', padding: '13px 24px', borderRadius: '100px', textDecoration: 'none', border: '2px solid #0F4C81' }}>+358 44 977 3677</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="main-grid">
          <div>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0F172A', marginBottom: '16px' }}>VW öljyvaatimukset</h2>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8, marginBottom: '16px' }}>
                Volkswagen-öljyspesifikaatiot ovat koko VW-konsernin laajuisia. Oikean öljyn käyttö on erityisen tärkeää DPF-hiukkassuodattimella varustetuissa TDI-malleissa — väärä öljy voi nopeuttaa DPF:n tukkeutumista.
              </p>
              {[
                { spec: 'VW 504.00', desc: 'TSI/TFSI-bensiinimoottorit. 5W-30 täyssynteettinen. Golf, Passat, Tiguan bensiinikäyttöiset.' },
                { spec: 'VW 507.00', desc: 'TDI-diesel-moottorit. 5W-30 DPF-yhteensopiva. Golf TDI, Passat TDI, Tiguan TDI.' },
                { spec: 'VW 508.00 / 509.00', desc: 'Uudet mallit 2016 →. 0W-20 matalaviskoottinen öljy. Golf 8, Tiguan 2 jne.' },
              ].map(item => (
                <div key={item.spec} style={{ background: '#fff', border: '1.5px solid #E2E2DC', borderRadius: '12px', padding: '16px 20px', marginBottom: '10px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>{item.spec}</p>
                  <p style={{ fontSize: '14px', color: '#64748B' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>TSI-moottoreiden yleisviat</h2>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8, marginBottom: '16px' }}>
                VW:n TSI/TFSI-moottorit ovat tehokkaita mutta vaativat huolellista hoitoa. Suosittelemme öljynvaihtoa 10 000 km välein Suomen olosuhteissa — vaikka VW suosittaa 30 000 km, lyhyet kaupunkiajot ja kylmäkäynnistykset kuluttavat öljyä nopeammin.
              </p>
              <div>
                {[
                  { title: 'Öljykulutus (EA113 2.0 TFSI)', desc: 'Vanhoissa 2.0 TFSI -moottoreissa (Golf 5/6 GTI, Passat B6) normaali kulutus voi olla 0,5–1 l/1000 km. Tarkista öljytaso joka tankkaus.' },
                  { title: 'Jakoketjun venyminen (EA888 Gen 1/2)', desc: 'Golf 6, Passat B7 (2007–2012). Kilisevä ääni kylmäkäynnistyksessä. Vaatii ketjukorjauksen — älä lykkää.' },
                  { title: 'DPF-tukkeutuminen (TDI kaupunkiajo)', desc: 'Lyhyet kaupunkiajot (<15 km) estävät DPF:n itsepuhdistuksen. DPF-puhdistus tai pitkä moottoritieajo auttaa.' },
                  { title: 'DSG DQ200 -värinä', desc: '7-nopeus kuivakytkentä. Värinä kylmästä lähdettäessä. Usein korjataan DSG-öljynvaihdolla tai kytkennän uudelleenopetuksella.' },
                ].map(issue => (
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
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>DSG-vaihteiston huolto</h2>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8 }}>
                VW:n DSG (kaksoiskytkentävaihteisto, DQ200 tai DQ250) vaatii öljynvaihdon 60 000 km välein. Moni VW-omistaja laiminlyö tämän — se on virhe. DSG-öljynvaihto meillä 180–220 €. Teemme myös kytkennän adaptiiviset opetukset uuden öljyn jälkeen.
              </p>
            </div>
          </div>
          <div>
            <div style={{ background: '#fff', border: '1.5px solid #E2E2DC', borderRadius: '20px', padding: '28px', marginBottom: '20px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#E8890A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>VW huoltohinnat Espoossa</p>
              {[
                { name: 'Öljynvaihto (VW-spesifinen)', price: 'alk. 130 €' },
                { name: 'DSG-öljynvaihto', price: '180–220 €' },
                { name: 'Määräaikaishuolto', price: 'alk. 249 €' },
                { name: 'Jarrupalat etu', price: 'alk. 189 €' },
                { name: 'DPF-puhdistus', price: 'tarjous' },
              ].map(item => (
                <div key={item.name} className="service-row">
                  <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>{item.name}</span>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>{item.price}</span>
                </div>
              ))}
              <a href="/varaa" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E8890A', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '12px', textDecoration: 'none', marginTop: '20px' }}>Varaa aika</a>
            </div>
            <div style={{ background: '#FEF3DC', border: '1.5px solid rgba(232,137,10,0.3)', borderRadius: '16px', padding: '20px 24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#92400E', marginBottom: '8px' }}>🔒 Takuu säilyy</p>
              <p style={{ fontSize: '13px', color: '#78350F', lineHeight: 1.7 }}>EU-lain mukaan VW:n takuu ei katoa AD-valtuutetussa korjaamossa. 3A Service on AD-valtuutettu.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#0F172A', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: '16px' }}>Varaa VW-huolto Espoossa</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>DSG & TSI osaajat · DPF-huolto · VCDS-diagnostiikka · Takuu säilyy</p>
          <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#E8890A', color: '#fff', fontWeight: 700, fontSize: '16px', padding: '16px 40px', borderRadius: '100px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Varaa aika verkossa
          </a>
        </div>
      </section>
      <footer>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', paddingBottom: '24px' }}>
          <div><p style={{ color: '#fff', fontWeight: 900, marginBottom: '8px' }}>3A Service Oy</p><p>Sillankorva 8, 02300 Espoo</p></div>
          <div><a href="/merkit/audi">Audi</a><a href="/merkit/bmw">BMW</a><a href="/merkit/mercedes">Mercedes-Benz</a><a href="/merkit/volvo">Volvo</a></div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}><p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>© 2026 3A Service Oy | Volkswagen Huolto Espoo</p></div>
      </footer>
    </>
  );
}
