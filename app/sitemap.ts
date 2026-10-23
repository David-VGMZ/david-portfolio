import type { MetadataRoute } from "next";

const siteUrl = process.env.SITE_URL ?? "https://davidvillagomez.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            changeFrequency: "monthly",
            priority: 1
        }
    ];
}