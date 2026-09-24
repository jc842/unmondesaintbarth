export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Un Monde Saint-Barth — Art de Vivre, Villas & Villégiature d'Exception à Saint-Barthélemy",
  siteName: "unmondesaintbarth.com",
  domain: "unmondesaintbarth.com",
  url: "https://unmondesaintbarth.com",
  siteUrl: "https://unmondesaintbarth.com",
  description: "Revue éditoriale et carnet d'adresses d'exception à Saint-Barthélemy : villas avec vue imprenable à Saint-Jean et Gustavia, gastronomie étoilée, plages secrètes de Colombier et Saline, et actualités insulaires.",
  siteDescription: "Revue éditoriale et carnet d'adresses d'exception à Saint-Barthélemy : villas avec vue imprenable à Saint-Jean et Gustavia, gastronomie étoilée, plages secrètes de Colombier et Saline, et actualités insulaires.",
  defaultAuthor: "La Rédaction Un Monde Saint-Barth",
  repo: "jc842/unmondesaintbarth",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-profoliox",
    fontFamily: "Playfair Display, serif",
    colorScheme: "amber",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "69",
    containerId: "LWOCa1b0",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 740, format: "mobileBanner" },
      inContent: { zoneId: 739, format: "mediumRectangle" },
      header: { zoneId: 738, format: "leaderboard" },
      halfPage: { zoneId: 736, format: "halfPage" },
      largeRectangle: { zoneId: 737, format: "largeRectangle" },
      skyscraper: { zoneId: 741, format: "skyscraper" },
    },
  },

  legal: {
    editor: "Éditions Un Monde Saint-Barth",
    address: "Rue du Roi Oscar II, Gustavia, 97133 Saint-Barthélemy",
    contactEmail: "contact@unmondesaintbarth.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "villas-prestige", label: "Villas de Prestige & Refuges" },
    { id: "gastronomie-epicurisme", label: "Gastronomie & Tables Étoilées" },
    { id: "plages-nature", label: "Plages Secrètes & Randonnées" },
    { id: "culture-evenements", label: "Bucket Regatta & Art Insulaire" },
  ],
};
