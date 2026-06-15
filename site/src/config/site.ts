/**
 * Zentrale Konfiguration für SEO, Schema.org und Staging-Schutz.
 *
 * WICHTIG zum Go-Live:
 *   1. isStaging auf false setzen.
 *   2. public/robots.txt von "Disallow: /" auf "Disallow:" stellen.
 *   3. astro.config.mjs site-URL auf "https://www.krsh.de" prüfen.
 *
 * Solange isStaging === true ist, setzen alle Seiten via BaseLayout
 * automatisch <meta name="robots" content="noindex,nofollow,noarchive" />.
 */

export const isStaging = true;

export const SITE = {
  name: "Kühnel Rosenmüller & Kollegen",
  shortName: "KRSH",
  legalName: "Kühnel, Rosenmüller & Kollegen Rechtsanwälte und Notare",
  // Wird beim Go-Live in astro.config.mjs auf https://www.krsh.de gesetzt.
  // BaseLayout zieht die Canonical-URL primär aus Astro.site.
  url: isStaging ? "https://neu.krsh.de" : "https://www.krsh.de",
  productionUrl: "https://www.krsh.de",
  defaultDescription:
    "Kühnel, Rosenmüller & Kollegen — Rechtsanwälte und Notare. Schwerpunkte: Insolvenzverwaltung, Sanierung, StaRUG, Schutzschirm- und Eigenverwaltung, Wirtschaftsrecht. Standorte in Berlin, Hannover, Kassel und Halle.",
  defaultOgImage: "/assets/krsh/krsh_haus_front.jpg",
  locale: "de_DE",
  languages: ["de"] as const,
  founded: "1975",
  // Kontaktdaten der Kanzlei. Telefon/Fax/E-Mail sind die zentralen Werte
  // aus der Sidebar (RightColumn.astro) — siehe dort auch die Standort-
  // spezifischen Durchwahlen.
  contact: {
    telephone: "+49-30-89668-80",
    fax: "+49-30-89668-8100",
    email: "krsh@krsh.de",
  },
  // Hauptsitz Berlin und drei Niederlassungen. Adressen und Telefone aus
  // RightColumn.astro übernommen (Stand: laufender TYPO3-Betrieb).
  locations: [
    {
      id: "berlin",
      name: "Berlin",
      isMainBranch: true,
      streetAddress: "Berliner Straße 117",
      postalCode: "10713",
      addressLocality: "Berlin-Wilmersdorf",
      addressRegion: "BE",
      addressCountry: "DE",
      telephone: "+49-30-89668-80",
      email: "krsh@krsh.de",
    },
    {
      id: "hannover",
      name: "Hannover",
      isMainBranch: false,
      streetAddress: "Berliner Allee 13",
      postalCode: "30175",
      addressLocality: "Hannover",
      addressRegion: "NI",
      addressCountry: "DE",
      telephone: "+49-511-87458134",
    },
    {
      id: "kassel",
      name: "Kassel",
      isMainBranch: false,
      streetAddress: "Kölnische Straße 69",
      postalCode: "34117",
      addressLocality: "Kassel",
      addressRegion: "HE",
      addressCountry: "DE",
      telephone: "+49-561-71411",
    },
    {
      id: "halle",
      name: "Halle (Saale)",
      isMainBranch: false,
      streetAddress: "Kurallee 3",
      postalCode: "06114",
      addressLocality: "Halle (Saale)",
      addressRegion: "ST",
      addressCountry: "DE",
      telephone: "+49-345-21388529",
    },
  ],
  // Schwerpunktbereiche der Kanzlei (für LegalService-Schema und interne
  // Navigation). Reihenfolge entspricht der Kanzleidarstellung auf krsh.de.
  practiceAreas: [
    { slug: "insolvenzverwaltung", name: "Insolvenzverwaltung" },
    { slug: "sanierung", name: "Sanierung" },
    { slug: "starug", name: "StaRUG" },
    {
      slug: "schutzschirm-eigenverwaltung",
      name: "Schutzschirm- und Eigenverwaltung",
    },
    { slug: "arbeitsrecht", name: "Arbeitsrecht" },
    { slug: "gesellschaftsrecht", name: "Gesellschafts- und Wirtschaftsrecht" },
    { slug: "miet-wohnungseigentumsrecht", name: "Miet- und Wohnungseigentumsrecht" },
    { slug: "immobilienrecht", name: "Immobilienrecht" },
    { slug: "insolvenzanfechtungsrecht", name: "Insolvenzanfechtungsrecht" },
  ],
  // Externe Profile / Verzeichnisse für sameAs in Organization-Schema.
  sameAs: [
    // "https://www.linkedin.com/company/krsh", // sobald vorhanden
    // "https://www.xing.com/companies/krsh",   // sobald vorhanden
  ],
  // Zertifizierungen — werden im LegalService-Schema als hasCredential
  // oder im Fließtext der Startseite ausgezeichnet.
  certifications: [
    "DIN EN ISO 9001",
    "Gilde der Insolvenzverwalter Deutschlands e.V. (GOI)",
    "Verband Insolvenzverwalter und Sachwalter Deutschlands e.V. (VID)",
  ],
  // Verifikationscode für Google Search Console. Sobald die Property
  // angelegt ist, den content-Wert des bereitgestellten meta-Tags hier
  // eintragen — BaseLayout rendert automatisch das passende
  // <meta name="google-site-verification" content="..."> in den <head>.
  googleSiteVerification: "",
  // Verantwortliche externe Datenschutzbeauftragte ("Prinz", Anschrift am
  // Kurfürstendamm). Vollständige Angaben sind in der Datenschutz-
  // erklärung erforderlich. Werden separat in OFFENE_FRAGEN.md erfragt
  // und auf der Datenschutz-Seite gerendert — fließen NICHT in Schema.org
  // ein, damit keine inhaltlich falschen Werte indexiert werden.
  dataProtectionOfficer: {
    name: "", // TODO: vollständiger Name "Prinz"
    streetAddress: "", // TODO: Anschrift am Kurfürstendamm
    postalCode: "",
    addressLocality: "Berlin",
    email: "",
    telephone: "",
  },
} as const;

export type SiteConfig = typeof SITE;
export type LocationConfig = (typeof SITE.locations)[number];
export type PracticeArea = (typeof SITE.practiceAreas)[number];
