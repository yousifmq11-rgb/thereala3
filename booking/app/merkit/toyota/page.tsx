import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';

export const metadata: Metadata = {
  title: 'Toyota & Lexus Huolto Espoo | 3A Service — Hybridiosaaminen',
  description: 'Toyota ja Lexus huolto Espoossa. AD-valtuutettu. Hybridit, 0W-20 öljy, kaikki mallit Yarisista RAV4:ään. Varaa aika verkossa.',
};

const CSS = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1A1A1A;background:#F5F5F2;-webkit-font-smoothing:antialiased;padding-top:90px;}.service-row{display:flex;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid #E2E2DC;gap:16px;}.service-row:last-child{border-bottom:none;}.issue-item{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid #E2E2DC;}.issue-item:last-child{border-bottom:none;}.issue-dot{width:8px;height:8px;border-radius:50%;background:#E8890A;flex-shrink:0;margin-top:6px;}footer{background:#1A1A1A;color:rgba(255,255,255,.7);padding:48px 24px 24px;}footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}footer a:hover{color:#E8890A;}.main-grid{display:grid;grid-template-columns:1fr 340px;gap:48px;align-items:start;}@media(max-width:900px){.main-grid{grid-template-columns:1fr;}}`;

export default function ToyotaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteNav />
      <section style={{ background: '#fff', padding: '72px 24px 64px', borderBottom: '1.5px solid #E2E2DC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ECFDF5', border: '1.5px solid #6EE7B7', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#065F46', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Toyota &amp; Lexus · Espoo · Hybridiosaaminen</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '20px', maxWidth: '720px' }}>
            Toyota ja Lexus huolto<br />Espoossa —{' '}
            <span style={{ color: '#E8890A' }}>myös hybridit.</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginBottom: '36px' }}>
            Kaikki Toyota- ja Lexus-mallit. Toyota Hybrid System (THS) -osaaminen, 0W-20 öljy, OEM-varaosat.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0F4C81', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none' }}>Varaa Toyota-huolto</a>
            <a href="tel:+358449773677" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0F4C81', fontWeight: 700, fontSize: '15px', padding: '13px 24px', borderRadius: '100px', textDecoration: 'none', border: '2px solid #0F4C81' }}>+358 44 977 3677</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="main-grid">
          <div>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#0F172A', marginBottom: '16px' }}>Hybrid-osaaminen</h2>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8, marginBottom: '16px' }}>
                Toyota Hybrid System (THS) toimii eri tavalla kuin tavallinen bensiinauto. Olemme perehtyneet hybridimallien erityispiirteisiin — Prius, Auris Hybrid, Corolla Hybrid, RAV4 Hybrid, Yaris Hybrid ja Lexus-hybridit.
              </p>
              {[
                { point: 'Hybridijärjestelmän akku', info: 'Akkua ei huolleta normaalisti — se on erittäin luotettava. Toyota-takuu 8 vuotta tai 160 000 km. Diagnostiikka voi tarkistaa kennojännitteen.' },
                { point: 'Regeneratiivinen jarrutus', info: 'Hybridien jarrupalat kuluvat huomattavasti vähemmän kuin tavallisessa autossa. Jarruntarkistus on silti tärkeä — voidaan tehdä meidän huollossa.' },
                { point: 'Öljynvaihto on tärkeä', info: 'Hybrid-auto tarvitsee öljynvaihdon samoin kuin tavallinen auto — usein kylmäkäynnistyksiä, koska moottori sammuu usein liikenteessä.' },
              ].map(item => (
                <div key={item.point} style={{ background: '#ECFDF5', border: '1.5px solid #6EE7B7', borderRadius: '12px', padding: '16px 20px', marginBottom: '10px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#065F46', marginBottom: '4px' }}>{item.point}</p>
                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7 }}>{item.info}</p>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>Toyota 0W-20 öljy</h2>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8, marginBottom: '12px' }}>
                Uudemmat Toyota-bensiinimoottorit (1ZR-FE, 2ZR-FE, A25A-FKS jne.) vaativat 0W-20 täyssynteettistä öljyä ACEA C5 tai API SN PLUS -luokituksella. Tämä öljy on ohuempaa kuin tavallinen 5W-30 — älä korvaa väärällä öljyllä.
              </p>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8 }}>Meillä on aina varastossa oikea Toyota-öljy. Kerrot vain mallin ja vuosimerkin.</p>
            </div>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>Yleisimmät Toyota/Lexus viat</h2>
              <div>
                {[
                  { title: 'Polttoainepumpun viat (1ZR-FE)', desc: 'Toyota Yaris, Auris, Corolla 2007–2018. Pumppu voi pettää ilman varoitusta. Diagnoosi paljastaa painekatkon.' },
                  { title: 'EGR-venttiili D-4D diesel (2.0 D-4D)', desc: 'Tukkeutuu kaupunkiajossa. Aiheuttaa tehonlaskua ja savutusta.' },
                  { title: 'Etuiskunvaimentimet (RAV4, Auris)', desc: 'Kuluvat aikaisin Suomen olosuhteissa. Vaihdetaan pareittain.' },
                  { title: 'Invertterin jäähdytys (hybridit)', desc: 'Vanha jäähdytysneste invertteripiirissä. Vaihdetaan 100 000 km välein Toyota-spesifikaation mukaan.' },
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
          </div>
          <div>
            <div style={{ background: '#fff', border: '1.5px solid #E2E2DC', borderRadius: '20px', padding: '28px', marginBottom: '20px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#E8890A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Toyota / Lexus huoltohinnat</p>
              {[
                { name: 'Öljynvaihto (0W-20)', price: 'alk. 120 €' },
                { name: 'Määräaikaishuolto', price: 'alk. 229 €' },
                { name: 'Jarrupalat etu', price: 'alk. 189 €' },
                { name: 'Renkaanvaihto', price: '80 €' },
                { name: 'OBD-diagnostiikka', price: '95 €/h' },
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
              <p style={{ fontSize: '13px', color: '#78350F', lineHeight: 1.7 }}>EU-laki takaa Toyotan takuun säilymisen AD-valtuutetussa korjaamossa. 3A Service on AD-valtuutettu.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#0F172A', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: '16px' }}>Varaa Toyota / Lexus -huolto Espoossa</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>AD-valtuutettu · Hybrid-osaaminen · 0W-20 öljy · Takuu säilyy</p>
          <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#E8890A', color: '#fff', fontWeight: 700, fontSize: '16px', padding: '16px 40px', borderRadius: '100px', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Varaa aika verkossa
          </a>
        </div>
      </section>
      <footer>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', paddingBottom: '24px' }}>
          <div><p style={{ color: '#fff', fontWeight: 900, marginBottom: '8px' }}>3A Service Oy</p><p>Sillankorva 8, 02300 Espoo</p></div>
          <div><a href="/merkit/bmw">BMW</a><a href="/merkit/mercedes">Mercedes-Benz</a><a href="/merkit/volvo">Volvo</a><a href="/merkit/audi">Audi</a></div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}><p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>© 2026 3A Service Oy | Toyota &amp; Lexus Huolto Espoo</p></div>
      </footer>
    </>
  );
}
