import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteNav from '@/components/SiteNav';

type Post = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: string;
  serviceLink: string;
  serviceName: string;
  intro: string;
  sections: { heading: string; body: string }[];
  ctaText: string;
};

const POSTS: Record<string, Post> = {
  'ilmastointihuolto-ennen-kesaa': {
    metaTitle: 'Ilmastointihuolto ennen kesää 2025 | 3A Service Espoo',
    metaDescription: 'Milloin ilmastointi kannattaa huoltaa? Opas kesään valmistautumiseen Espoossa. 3A Service Niittykumpu.',
    title: 'Ilmastointihuolto ennen kesää — miksi ja milloin?',
    date: '15.4.2025',
    readTime: '3 min',
    tag: 'Ilmastointi',
    tagColor: '#0F4C81',
    serviceLink: 'https://3aservice.fi/services/ilmastointi.html',
    serviceName: 'Ilmastointihuolto',
    intro: 'Monet autoilijat huomaavat ilmastointiongelman vasta 30 asteen helteellä. Silloin on jo myöhäistä — ja korjaamojonot ovat pisimmillään. Tässä oppaassa kerromme miksi ilmastointi kannattaa huoltaa juuri ennen kesää, mitkä ovat selkeät merkit huollon tarpeesta ja mitä huolto sisältää.',
    sections: [
      {
        heading: 'Miksi huolto ennen kesää?',
        body: 'Auton ilmastoinnin kylmäaine häviää luonnollisesti — jopa 10–15 % vuodessa on täysin normaalia. Kahden tai kolmen käyttämättömän talven jälkeen järjestelmä voi olla tyhjä. Lisäksi höyrystin — ilmastoinnin sisäinen osa — kerää bakteereja ja hometta kosteuden takia. Seurauksena on pistävä haju heti käynnistettäessä.\n\nParas aika varata huolto on maalis–huhtikuussa, ennen kiirehuipun alkamista. Tällöin varmistat toimivan ilmastoinnin juuri silloin kun sitä tarvitset — ja saat nopeamman ajan.',
      },
      {
        heading: 'Merkkejä huollon tarpeesta',
        body: '• Ilmastointi ei jäähdytä riittävästi tai vie kauan ennen kuin viilennys tuntuu\n• Sisätilassa on pistävä tai homeinen haju ilmastoinnin käynnistyessä\n• Tuulilasin huuruaminen hidastuu normaalista — kylmäaineesta voi olla pulaa\n• Kompressori käynnistyy ja sammuu epätasaisesti tai on äänekkäämpi kuin ennen\n\nJos tunnistat yhdenkin näistä merkeistä, huolto on ajankohtainen.',
      },
      {
        heading: 'Mitä huoltoon kuuluu?',
        body: '3A Servicen ilmastointihuolto sisältää kaiken oleellisen:\n\n1. Järjestelmän painetesti ja vuototarkistus elektronisesti\n2. Vanhan kylmäaineen tyhjennys ja kierrätys asianmukaisesti\n3. Täyttö oikealla kylmäaineella (R134a tai uudempi R1234yf vuoden 2017 jälkeen rekisteröidyissä autoissa)\n4. Raitisilmasuodattimen tarkistus ja vaihto tarpeen mukaan\n5. Järjestelmän desinfiointi — tuhoaa bakteerit ja homeen\n6. Toiminnan testaus — ilmastointi jäähdyttää jälleen tehokkaasti\n\nPerushuolto kylmäaineen täytöllä alkaen 79 €. Täydellinen paketti desinfioinnilla 120–150 €.',
      },
    ],
    ctaText: 'Varaa ilmastointihuolto Espoossa',
  },
  'katsastus-valmistautuminen': {
    metaTitle: 'Miten valmistaudutaan katsastukseen? | 3A Service Espoo',
    metaDescription: 'Top 5 syytä miksi autot hylätään katsastuksessa Suomessa ja miten Katsastus-Turva (29 €) auttaa läpäisemään sen ensimmäisellä kerralla.',
    title: 'Miten valmistaudutaan katsastukseen? Top 5 hylkäyssyytä',
    date: '1.3.2025',
    readTime: '4 min',
    tag: 'Katsastus',
    tagColor: '#059669',
    serviceLink: 'https://3aservice.fi/services/katsastus.html',
    serviceName: 'Katsastushuolto',
    intro: 'Katsastus on monen autoilijan stressaava asia — etenkin jos pelkää hylkäysleimaa ja lisäkuluja. Hyvä uutinen: suurin osa hylkäyssyistä on ennaltaehkäistävissä yksinkertaisella ennakkotarkistuksella. Tässä viisi yleisintä syytä hylkäykseen ja miten voit välttää ne.',
    sections: [
      {
        heading: 'Top 5 syytä hylkäykseen Suomessa',
        body: '1. Valaistuksen puutteet (noin 30 % hylkäyksistä)\nPalanut polttimo, väärä säätö tai viallinen xenon-järjestelmä. Tarkista etu- ja takavalot, jarruvalot, suuntavilkut ja peruutusvalot aina ennen katsastusta.\n\n2. Renkaat ja kuluminen (noin 25 %)\nLiian matala urasyvyys (alle 1,6 mm kesärenkailla tai alle 3 mm talvirenkailla) tai sivuseinämän vaurio on välitön hylkäyssyy.\n\n3. Jarrujen kuluminen (noin 20 %)\nJarrupalojen paksuus alle minimin tai jarrunesteen kostuminen. Katsastaja testaa jarrutehon rullapenkillä — tulos tallentuu järjestelmään.\n\n4. Alusta ja ohjaus (noin 15 %)\nKuluneet pallonivelet, löystyneet tukivarret tai ohjausvakaajat voivat aiheuttaa hylkäyksen — niistä ei aina saa etukäteen merkkejä ajossa.\n\n5. Pakokaasupäästöt (noin 10 %)\nLikaistunut katalysaattori tai tukkeutunut DPF-hiukkassuodatin voi aiheuttaa hylkäyksen päästötestauksessa.',
      },
      {
        heading: 'Katsastus-Turva 29 € — ennakkotarkistus ennen katsastusta',
        body: '3A Service tarjoaa Katsastus-Turva -ennakkotarkastuksen 29 eurolla. Käymme läpi kaikki tärkeimmät katsastuskohteet ennen katsastuspäivää:\n\n• Valot, heijastimet ja sähköjärjestelmä\n• Jarrut ja jarruneste\n• Renkaat ja vanteet — urasyvyysmittaus\n• Alusta, iskunvaimentimet ja tukivarret\n• Pakokaasujärjestelmä ja OBD-tarkistus\n\nJos löydämme puutteita, korjaamme ne samalla käynnillä — ennen katsastusta, ei sen jälkeen. Asiakkaat jotka käyvät meillä ensin läpäisevät katsastuksen ensimmäisellä kerralla.',
      },
      {
        heading: 'Katsastusaikataulu Suomessa',
        body: 'Uudet autot katsastetaan ensimmäisen kerran kolmen vuoden kuluttua käyttöönotosta. Sen jälkeen 2 vuoden välein enintään 10 vuoden ikään asti — sen jälkeen vuosittain. Myöhästyminen katsastuksesta on liikennerikkomus (sakko 100–200 €) ja auto kielletään liikenteestä.\n\nVaraa katsastushuolto hyvissä ajoin — varsinkin keväällä ja syksyllä jonot pitenevät.',
      },
    ],
    ctaText: 'Varaa Katsastus-Turva -tarkistus',
  },
  'talvirenkaat-milloin-vaihtaa': {
    metaTitle: 'Milloin talvirenkaat vaihdetaan 2025? | 3A Service Espoo',
    metaDescription: 'Suomen laki talvirenkaista, milloin täsmälleen vaihtaa ja mitä renkaan kunnosta kannattaa tarkistaa samalla. 3A Service Espoo.',
    title: 'Milloin talvirenkaat vaihdetaan 2025?',
    date: '10.10.2025',
    readTime: '3 min',
    tag: 'Renkaat',
    tagColor: '#DC2626',
    serviceLink: 'https://3aservice.fi/services/renkaat.html',
    serviceName: 'Renkaiden palvelut',
    intro: '"Milloin talvirenkaat vaihdetaan?" on yksi kysytyimmistä autoilukysymyksistä lokakuussa. Tässä selkeät vastaukset Suomen lain, turvallisuuden ja käytännön kannalta — sekä vinkit mitä kannattaa tarkistaa samalla.',
    sections: [
      {
        heading: 'Mitä Suomen laki sanoo?',
        body: 'Suomen tieliikennelaki edellyttää talvityypin renkaiden käyttöä 1. marraskuuta–31. maaliskuuta, jos sää sitä vaatii. Käytännössä: jos tiellä on lunta, jäätä tai on ollut pakkasta, talvirenkaat ovat pakollisia.\n\nSakko talvirenkaiden laiminlyönnistä on 100–200 €. Vakuutusyhtiö voi myös alentaa korvausta liikenneonnettomuudessa, jos renkaita ei ole vaihdettu sääolosuhteiden vaatimalla tavalla.',
      },
      {
        heading: 'Milloin vaihtaa käytännössä?',
        body: 'Suositus: vaihda talvirenkaisiin kun yölämpötilat lähestyvät pysyvästi 0°C — ei vasta silloin kun ensimmäinen lumi sataa. Etelä-Suomessa tämä on tyypillisesti lokakuun lopussa tai marraskuun alussa.\n\nKesärenkaiden pito on heikko jo alle +7°C lämpötiloissa — jopa kuivalla asfaltilla. Riskiä ei kannata ottaa.\n\nKeväällä: vaihda kesärenkaisiin kun yöpakkaset ovat pysyvästi ohitse ja lämpötila pysyy yli +7°C. Tyypillisesti huhtikuun lopussa tai toukokuussa. Talvirenkaat kestävät hyvin myös +10°C lämpötilassa, mutta kuluvat nopeammin lämpimällä asfaltilla.',
      },
      {
        heading: 'Mitä renkaan kunnosta kannattaa tarkistaa samalla?',
        body: '• Urasyvyys: talvirenkaat min 3 mm (suositus 4 mm), kesärenkaat min 1,6 mm (suositus 3 mm)\n• Rengaspaine: renkaat kovettuvat kylmässä — tarkista aina vaihdon yhteydessä oikea paine\n• Sivuseinämät: tarkista halkeamat tai pullistumat\n• Vanteiden kunto: tarkista reunahalkeamat tai väännöt\n\nMeillä renkaanvaihto alkaen 80 €, tasapainotuksen kanssa 99 €. Tarjoamme myös rengassäilytystä — ei tarvitse kantaa raskaita pyöriä itse.',
      },
    ],
    ctaText: 'Varaa renkaanvaihto Espoossa',
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

const CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1A1A1A;background:#F5F5F2;-webkit-font-smoothing:antialiased;padding-top:90px;}
  :root{--brand:#E8890A;--ink:#1A1A1A;--ink-60:rgba(26,26,26,0.6);--border:#E2E2DC;}
  .prose p{font-size:17px;color:#374151;line-height:1.85;margin-bottom:20px;}
  .prose h2{font-size:22px;font-weight:800;color:#0F172A;margin:36px 0 14px;letter-spacing:-0.01em;}
  .prose ul{padding-left:24px;margin-bottom:20px;}
  .prose li{font-size:17px;color:#374151;line-height:1.8;margin-bottom:8px;}
  footer{background:#1A1A1A;color:rgba(255,255,255,.7);padding:48px 24px 24px;}
  footer a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;transition:color .15s;display:block;margin-bottom:8px;}
  footer a:hover{color:#E8890A;}
`;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteNav active="blog" />

      {/* BREADCRUMB */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E2E2DC', padding: '12px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(26,26,26,0.6)' }}>
          <a href="https://3aservice.fi" style={{ color: 'rgba(26,26,26,0.6)', textDecoration: 'none' }}>Etusivu</a>
          <span>›</span>
          <a href="/blog" style={{ color: 'rgba(26,26,26,0.6)', textDecoration: 'none' }}>Ajankohtaista</a>
          <span>›</span>
          <span style={{ color: '#E8890A', fontWeight: 500 }}>{post.tag}</span>
        </div>
      </div>

      {/* ARTICLE HEADER */}
      <header style={{ background: '#fff', padding: '56px 24px 48px', borderBottom: '1.5px solid #E2E2DC' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: post.tagColor, background: `${post.tagColor}14`, padding: '4px 10px', borderRadius: '100px' }}>
              {post.tag}
            </span>
            <span style={{ fontSize: '13px', color: '#94A3B8' }}>{post.date}</span>
            <span style={{ fontSize: '13px', color: '#94A3B8' }}>· {post.readTime} lukuaika</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px,4.5vw,48px)', fontWeight: 900, color: '#0F172A', lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: '20px' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.75, maxWidth: '640px' }}>
            {post.intro}
          </p>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article style={{ padding: '56px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <div className="prose">
          {post.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: '40px' }}>
              <h2>{section.heading}</h2>
              {section.body.split('\n\n').map((paragraph, j) => {
                if (paragraph.startsWith('•') || paragraph.includes('\n•')) {
                  return (
                    <ul key={j} style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                      {paragraph.split('\n').filter(Boolean).map((item, k) => (
                        <li key={k} style={{ fontSize: '17px', color: '#374151', lineHeight: 1.8, marginBottom: '8px' }}>
                          {item.replace(/^•\s*/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                const lines = paragraph.split('\n');
                if (lines.length > 1 && /^\d\./.test(lines[0])) {
                  return (
                    <div key={j} style={{ marginBottom: '20px' }}>
                      {lines.filter(Boolean).map((line, k) => (
                        <p key={k} style={{ fontSize: '17px', color: '#374151', lineHeight: 1.85, marginBottom: '10px' }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  );
                }
                return <p key={j}>{paragraph}</p>;
              })}
            </div>
          ))}
        </div>

        {/* CTA BOX */}
        <div style={{ background: '#FEF3DC', border: '1.5px solid rgba(232,137,10,0.3)', borderRadius: '20px', padding: '32px', marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#E8890A', textTransform: 'uppercase', letterSpacing: '0.1em' }}>3A Service Espoo</p>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', lineHeight: 1.3 }}>
            {post.ctaText}
          </h3>
          <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.7 }}>
            AD-valtuutettu korjaamo Sillankorva 8, Espoo. Takuusi säilyy — hinta ei muutu kesken työn.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="/varaa" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E8890A', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '13px 28px', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(232,137,10,0.35)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Varaa aika
            </a>
            <a href={post.serviceLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#0F172A', fontWeight: 700, fontSize: '15px', padding: '12px 24px', borderRadius: '100px', textDecoration: 'none', border: '2px solid #0F172A' }}>
              Lue lisää — {post.serviceName}
            </a>
          </div>
        </div>

        {/* BACK LINK */}
        <div style={{ marginTop: '40px' }}>
          <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#64748B', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Takaisin artikkeleihin
          </a>
        </div>
      </article>

      <footer>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', paddingBottom: '24px' }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 900, fontSize: '16px', marginBottom: '8px' }}>3A Service Oy</p>
            <p>Sillankorva 8, 02300 Espoo</p>
            <p style={{ marginTop: '4px' }}>Ma–Pe 8:00–17:00</p>
          </div>
          <div>
            <a href="/blog">← Kaikki artikkelit</a>
            <a href="/varaa">Varaa aika</a>
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
