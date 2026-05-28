import { MetadataRoute } from "next";

const BASE = "https://3aservice.fi";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/services/maaraikaishuolto.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/jakohihna.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/katsastus.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/sahkotyot.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/vikadiagnostiikka.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/renkaat.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/oljynvaihto.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/jarrut.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/ilmastointi.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/vaihteisto-kytkin.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/alusta.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/pesula.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `https://bucolic-bavarois-096a81.netlify.app`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/services/oljynvaihto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/services/jarrut`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/services/ilmastointi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/services/vaihteisto-kytkin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/services/alusta`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // Brand pages
    { url: `https://bucolic-bavarois-096a81.netlify.app/merkit/bmw`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/merkit/mercedes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/merkit/volvo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/merkit/toyota`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/merkit/audi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/merkit/volkswagen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // Blog
    { url: `https://bucolic-bavarois-096a81.netlify.app/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/blog/ilmastointihuolto-ennen-kesaa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/blog/katsastus-valmistautuminen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `https://bucolic-bavarois-096a81.netlify.app/blog/talvirenkaat-milloin-vaihtaa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Hinnasto
    { url: `https://bucolic-bavarois-096a81.netlify.app/huoltohinnasto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
