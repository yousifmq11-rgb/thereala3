import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';

export const metadata: Metadata = {
  title: 'Ajankohtaista | 3A Service Espoo — Autohuollon vinkit ja uutiset',
  description: 'Autohuollon vinkit, kausittaiset neuvot ja uutiset 3A Serviceltä Espoossa. Milloin vaihtaa renkaat, miten valmistautua katsastukseen ja muuta hyödyllistä.',
};

const POSTS = [
  {
    slug: 'ilmastointihuolto-ennen-kesaa',
    title: 'Ilmastointihuolto ennen kesää — miksi ja milloin?',
    excerpt: 'Monet autoilijat huomaavat ilmastointiongelman vasta 30 asteen helteellä. Näin vältät sen — ja saat huollon edullisemmin ennen kiirehuippua.',
    date: '15.4.2025',
    readTime: '3 min',
    tag: 'Ilmastointi',
    tagColor: '#0F4C81',
  },
  {
    slug: 'katsastus-valmistautuminen',
    title: 'Miten valmistaudutaan katsastukseen? Top 5 hylkäyssyytä',
    excerpt: 'Suurin osa katsastushylkäyksistä on ennaltaehkäistävissä yksinkertaisella ennakkotarkistuksella. Tässä tärkeimmät asiat joihin kiinnittää huomio.',
    date: '1.3.2025',
    readTime: '4 min',
    tag: 'Katsastus',
    tagColor: '#059669',
  },
  {
    slug: 'talvirenkaat-milloin-vaihtaa',
    title: 'Milloin talvirenkaat vaihdetaan 2025?',
    excerpt: 'Suomen laki, käytännön suositus ja mitä renkaan kunnosta kannattaa tarkistaa samalla — kaikki selkeästi yhdessä paikassa.',
    date: '10.10.2025',
    readTime: '3 min',
    tag: 'Renkaat',
    tagColor: '#DC2626',
  },
];

const CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1A1A1A;background:#F5F5F2;-webkit-font-smoothing:antialiased;padding-top:90px;}
  :root{--brand:#E8890A;--ink:#1A1A1A;--ink-60:rgba(26,26,26,0.6);--surface:#F5F5F2;--border:#E2E2DC;}
  .post-card{background:#fff;border:1.5px solid var(--border);border-radius:20px;padding:32px;transition:border-color .2s,transform .2s,box-shadow .2s;text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:16px;}
  .post-card:hover{border-color:rgba(232,137,10,0.4);transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,0.08);}
  .posts-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:28px;}
  footer{background:#1A1A1A;color:rgba(255,255,255,.7);padding:48px 24px 24px;}
  footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}
  footer a:hover{color:var(--brand);}
  @media(max-width:640px){.posts-grid{grid-template-columns:1fr;}}
`;

export default function BlogPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteNav active="blog" />

      {/* HEADER */}
      <section style={{ background: '#fff', padding: '64px 24px 56px', borderBottom: '1.5px solid #E2E2DC' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FEF3DC', border: '1.5px solid rgba(232,137,10,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#E8890A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Ajankohtaista</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '16px', lineHeight: 1.1 }}>
            Autohuollon vinkit<br /><span style={{ color: '#E8890A' }}>Espoossa</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.7, maxWidth: '560px' }}>
            Kausittaiset neuvot, katsastusvinkit ja teknistä tietoa joka auttaa pitämään autosi kunnossa.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section style={{ padding: '64px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="posts-grid">
          {POSTS.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: post.tagColor, background: `${post.tagColor}14`, padding: '4px 10px', borderRadius: '100px' }}>
                  {post.tag}
                </span>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>{post.date}</span>
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                {post.title}
              </h2>
              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.7, flexGrow: 1 }}>
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E8890A', fontWeight: 700, fontSize: '14px', marginTop: '4px' }}>
                Lue artikkeli
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F172A', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Valmis varaamaan ajan?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.7 }}>
            AD-valtuutettu autokorjaamo Espoossa. Takuusi säilyy, hinta ei muutu.
          </p>
          <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#E8890A', color: '#fff', fontWeight: 700, fontSize: '16px', padding: '16px 40px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,137,10,0.4)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Varaa aika verkossa
          </a>
        </div>
      </section>

      <footer>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '32px', paddingBottom: '32px' }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 900, fontSize: '16px', marginBottom: '8px' }}>3A Service Oy</p>
            <p>Sillankorva 8, 02300 Espoo</p>
            <p style={{ marginTop: '4px' }}>Ma–Pe 8:00–17:00</p>
          </div>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Artikkelit</p>
            {POSTS.map(p => <a key={p.slug} href={`/blog/${p.slug}`}>{p.title.split('—')[0].trim()}</a>)}
          </div>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Palvelut</p>
            <a href="https://3aservice.fi/services/oljynvaihto.html">Öljynvaihto</a>
            <a href="https://3aservice.fi/services/jarrut.html">Jarruhuolto</a>
            <a href="https://3aservice.fi/services/katsastus.html">Katsastushuolto</a>
            <a href="/huoltohinnasto">Hinnasto</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>© 2026 3A Service Oy | Autohuolto Espoo</p>
        </div>
      </footer>
    </>
  );
}
