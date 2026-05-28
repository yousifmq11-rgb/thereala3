import { LanguageProvider } from "@/contexts/LanguageContext";
import BookingWizard from "@/components/BookingWizard";

const BLOG_POSTS = [
  {
    slug: "ilmastointihuolto-ennen-kesaa",
    title: "Ilmastointihuolto ennen kesää",
    excerpt: "Monet huomaavat ilmastointiongelman vasta helteellä. Näin vältät sen — ja saat huollon edullisemmin.",
    date: "15.4.2025",
    tag: "Ilmastointi",
    tagColor: "#0F4C81",
  },
  {
    slug: "katsastus-valmistautuminen",
    title: "Top 5 katsastushylkäyssyytä",
    excerpt: "Suurin osa hylkäyksistä on ennaltaehkäistävissä yksinkertaisella ennakkotarkistuksella.",
    date: "1.3.2025",
    tag: "Katsastus",
    tagColor: "#059669",
  },
  {
    slug: "talvirenkaat-milloin-vaihtaa",
    title: "Milloin talvirenkaat vaihdetaan?",
    excerpt: "Suomen laki, käytännön suositus ja mitä renkaan kunnosta kannattaa tarkistaa samalla.",
    date: "10.10.2025",
    tag: "Renkaat",
    tagColor: "#DC2626",
  },
];

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#F4F3EF]">
        <BookingWizard />
      </main>

      {/* BLOG SECTION */}
      <section style={{ background: "#F5F5F2", padding: "80px 24px", borderTop: "1.5px solid #E2E2DC" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#E8890A", marginBottom: "8px" }}>Ajankohtaista</p>
              <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Autohuollon vinkit
              </h2>
            </div>
            <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#E8890A", fontWeight: 700, fontSize: "14px", textDecoration: "none", flexShrink: 0 }}>
              Kaikki artikkelit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "24px" }}>
            {BLOG_POSTS.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ background: "#fff", border: "1.5px solid #E2E2DC", borderRadius: "20px", padding: "28px", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "14px", transition: "transform .2s,box-shadow .2s,border-color .2s" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: post.tagColor, background: `${post.tagColor}14`, padding: "4px 10px", borderRadius: "100px" }}>
                    {post.tag}
                  </span>
                  <span style={{ fontSize: "12px", color: "#94A3B8" }}>{post.date}</span>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A", lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7, flexGrow: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#E8890A", fontWeight: 700, fontSize: "13px" }}>
                  Lue artikkeli
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </LanguageProvider>
  );
}
