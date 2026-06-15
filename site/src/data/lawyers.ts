/**
 * Datenmodell für Berufsträger der Kanzlei KRSH.
 *
 * Pflichtfelder (slug, title, headline, paragraphs) bleiben aus Gründen der
 * Rückwärtskompatibilität mit den Listen- und Übersichtsseiten bestehen.
 * Optionale Felder werden für die Detailseite und das Person/Attorney-
 * JSON-LD-Schema ausgewertet.
 *
 * Vollständig gepflegt ist derzeit nur RA Sascha Trettin (Referenz-
 * implementierung). Die übrigen Berufsträger werden im Rahmen des Rollouts
 * sukzessive ergänzt. Die Detailseite blendet leere Sektionen automatisch
 * aus, daher entstehen durch unvollständige Datensätze keine kaputten
 * Layouts.
 */

export type Lawyer = {
  /** URL-Slug — entspricht 1:1 dem Pfad auf der bestehenden krsh.de-URL. */
  slug: string;
  /** Anzeige-Titel in Übersichten (z. B. "RA Sascha Trettin"). */
  title: string;
  /** Überschrift auf der Detailseite (i. d. R. identisch mit title). */
  headline: string;
  /** Freitextabsätze für die "Über mich"-Sektion. */
  paragraphs: string[];

  // --- Strukturierte Daten für Schema.org/Attorney & Detailseiten ---

  /** Vollständiger Name ohne RA-Präfix für Schema.org/name. */
  fullName?: string;
  /** Akademischer Grad / Anrede (Dr., Prof. Dr., …) für honorificPrefix. */
  honorificPrefix?: string;
  givenName?: string;
  familyName?: string;
  /** Funktionsbeschreibung (z. B. "Rechtsanwalt und Notar, Partner"). */
  role?: string;
  /** Fachanwaltschaften und vergleichbare Qualifikationen. */
  qualifications?: string[];
  /** Tätigkeitsschwerpunkte (für knowsAbout im Schema). */
  specializations?: string[];
  /** Vita-Stationen, jeweils eine Zeile (für den CV-Block). */
  cv?: string[];
  /** Mitgliedschaften (Verbände, Vereine). */
  memberships?: string[];
  /** Direktdurchwahl, falls vorhanden — sonst Kanzlei-Hauptnummer. */
  telephone?: string;
  /** Direkte E-Mail-Adresse. */
  email?: string;
  /** Sprachen für knowsLanguage. */
  languages?: string[];
  /** Pfad zum Porträtfoto (im public-Ordner). */
  photo?: string;
  /** Volle URL des Xing-Profils. */
  xing?: string;
  /** Volle URL des LinkedIn-Profils. */
  linkedin?: string;
  /** Optionale Meta-Description-Übersteuerung für die Detailseite. */
  metaDescription?: string;
};

export const lawyers: Lawyer[] = [
  {
    slug: "ra-christoph-rosenmueller",
    title: "RA Christoph Rosenmüller",
    headline: "RA Christoph Rosenmüller",
    paragraphs: [
      "Rechtsanwalt Christoph Rosenmüller ist Partner der Sozietät und Fachanwalt für Insolvenzrecht.",
    ],
    // TODO: vollständigen Datensatz von der bestehenden krsh.de-Seite migrieren
  },
  {
    slug: "ra-hartmut-schweigart",
    title: "RA Hartmut Schweigart",
    headline: "RA Hartmut Schweigart",
    paragraphs: [
      "Rechtsanwalt und Notar Hartmut Schweigart ist Partner der Sozietät.",
    ],
    // TODO: vollständigen Datensatz von der bestehenden krsh.de-Seite migrieren
  },
  {
    slug: "ra-dr-joachim-heitsch",
    title: "RA Dr. Joachim Heitsch",
    headline: "RA Dr. Joachim Heitsch",
    paragraphs: [
      "Rechtsanwalt Dr. Joachim Heitsch ist Partner der Sozietät und Fachanwalt für Insolvenzrecht.",
    ],
    // TODO: vollständigen Datensatz von der bestehenden krsh.de-Seite migrieren
  },
  {
    slug: "ra-juergen-nullmeier",
    title: "RA Jürgen Nullmeier",
    headline: "RA Jürgen Nullmeier",
    paragraphs: [
      "Rechtsanwalt Jürgen Nullmeier ist Partner der Sozietät und Fachanwalt für Arbeits- und Insolvenzrecht.",
    ],
    // TODO: vollständigen Datensatz von der bestehenden krsh.de-Seite migrieren
  },
  // ===================================================================
  // Referenz-Implementierung mit vollständigen SEO- und Schema-Feldern.
  // Vorlage für die nachfolgend zu pflegenden Berufsträger-Datensätze.
  // ===================================================================
  {
    slug: "ra-sascha-trettin",
    title: "RA Sascha Trettin",
    headline: "Sascha Trettin",
    fullName: "Sascha Trettin",
    givenName: "Sascha",
    familyName: "Trettin",
    role: "Rechtsanwalt und Notar, Partner der Sozietät",
    qualifications: [
      "Fachanwalt für Miet- und Wohnungseigentumsrecht",
      "Notar (seit 2019)",
      "Zwangsverwalter (seit 2010)",
      "Zertifikat Bundesverband Interessengemeinschaft Zwangsverwaltung e.V.",
    ],
    specializations: [
      "Immobilienrecht",
      "Gewerberaummietrecht",
      "Wohnungseigentumsrecht",
      "Vertragsrecht",
      "Handels- und Gesellschaftsrecht",
      "Zwangsverwaltung",
    ],
    cv: [
      "Notar (seit 2019)",
      "Fachanwalt für Miet- und Wohnungseigentumsrecht (seit 2012)",
      "Zwangsverwalter (seit 2010)",
      "Rechtsanwalt (seit 2007)",
      "2. Staatsexamen, Berlin, 2007",
      "1. Staatsexamen, Freie Universität Berlin, 2004",
      "Zertifikat Bundesverband Interessengemeinschaft Zwangsverwaltung e.V. (2013)",
    ],
    memberships: [
      "Bundesverband Interessengemeinschaft Zwangsverwaltung e.V.",
    ],
    paragraphs: [
      "Rechtsanwalt und Notar Sascha Trettin ist Partner der Sozietät Kühnel, Rosenmüller & Kollegen. Seine anwaltlichen Schwerpunkte liegen im Immobilienrecht — insbesondere im Gewerberaummietrecht, Wohnungseigentumsrecht und Vertragsrecht — sowie im Handels- und Gesellschaftsrecht.",
      "Als Notar betreut er Beurkundungen mit Schwerpunkt im Immobilien-, Erb- und Gesellschaftsrecht. Seit 2010 ist er zudem als Zwangsverwalter tätig.",
    ],
    telephone: "+49-30-2363060",
    email: "trettin@krsh.de",
    languages: ["de"],
    photo: "/assets/krsh/anwaelte/ra-sascha-trettin.jpg",
    // xing: "https://www.xing.com/profile/Sascha_Trettin",      // TODO: echte URL eintragen
    // linkedin: "https://www.linkedin.com/in/sascha-trettin/",  // TODO: echte URL eintragen
    metaDescription:
      "Sascha Trettin ist Rechtsanwalt, Notar und Partner bei KRSH. Fachanwalt für Miet- und Wohnungseigentumsrecht. Schwerpunkte: Immobilienrecht, Gewerberaummietrecht, WEG-Recht, Gesellschaftsrecht.",
  },
  {
    slug: "ra-oliver-ebersbach",
    title: "RA Oliver Ebersbach",
    headline: "RA Oliver Ebersbach",
    paragraphs: [
      "Rechtsanwalt Oliver Ebersbach ist Partner der Sozietät.",
    ],
    // TODO: vollständigen Datensatz von der bestehenden krsh.de-Seite migrieren
  },
  {
    slug: "ra-dirk-semmelmann",
    title: "RA Dirk Semmelmann",
    headline: "RA Dirk Semmelmann",
    paragraphs: [
      "Rechtsanwalt Dirk Semmelmann LL.M. ist Partner der Sozietät und Fachanwalt für Insolvenzrecht.",
    ],
    // TODO: vollständigen Datensatz von der bestehenden krsh.de-Seite migrieren
  },
  {
    slug: "ra-julian-schiefke",
    title: "RA Julian Schiefke",
    headline: "RA Julian Schiefke",
    paragraphs: [
      "Rechtsanwalt Julian Schiefke ist Partner der Sozietät.",
    ],
    // TODO: vollständigen Datensatz von der bestehenden krsh.de-Seite migrieren
  },
  {
    slug: "rain-geraldine-mocci",
    title: "RAin Geraldine Mocci",
    headline: "RAin Geraldine Mocci",
    paragraphs: [
      "Rechtsanwältin Geraldine Mocci ist Partnerin der Sozietät.",
    ],
    // TODO: vollständigen Datensatz von der bestehenden krsh.de-Seite migrieren
  },
];
