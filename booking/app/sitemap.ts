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
    { url: `https://timely-speculoos-505175.netlify.app`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
