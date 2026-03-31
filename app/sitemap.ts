import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://www.alasu.live";
    const now = new Date();

    return [
        { url: base,                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
        { url: `${base}/catalog`,           lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
        { url: `${base}/catalog/water`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/catalog/lemonade`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/catalog/energy`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/story`,             lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${base}/mission`,           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${base}/partners`,          lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${base}/ambassadors`,       lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${base}/contact`,           lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ];
}
