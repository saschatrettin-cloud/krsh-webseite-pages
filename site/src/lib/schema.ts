/**
 * Schema.org-Helfer für JSON-LD.
 *
 * Alle Funktionen geben einfache POJOs zurück, die in einem <script type=
 * "application/ld+json"> serialisiert werden. Die @id-URLs verklammern die
 * Entitäten miteinander, sodass Google Knowledge-Graphen die Organisation,
 * ihre Standorte und ihre Anwälte als zusammenhängenden Entity-Graph
 * versteht (Linked Data).
 *
 * Quellen / Begründung:
 *   - https://schema.org/LegalService
 *   - https://schema.org/Attorney
 *   - https://developers.google.com/search/docs/appearance/structured-data/local-business
 *   - https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */

import { SITE, type LocationConfig } from "../config/site";
import type { Lawyer } from "../data/lawyers";

const orgId = (url: string) => `${url.replace(/\/$/, "")}/#organization`;
const personId = (url: string, slug: string) =>
  `${url.replace(/\/$/, "")}/anwaelte-notare/anwaelte/${slug}/#person`;
const locationId = (url: string, locId: string) =>
  `${url.replace(/\/$/, "")}/#location-${locId}`;

/**
 * LegalService-Schema für die Organisation. Wird auf jeder Seite einmal
 * eingebunden (im BaseLayout). Enthält Adresse(n), Kontakt, Logo, sameAs.
 */
export function organizationSchema(baseUrl: string) {
  const cleanBase = baseUrl.replace(/\/$/, "");
  const mainLocation = SITE.locations.find((l) => l.isMainBranch);

  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "ProfessionalService"],
    "@id": orgId(cleanBase),
    name: SITE.name,
    alternateName: SITE.legalName,
    url: cleanBase + "/",
    logo: cleanBase + "/assets/krsh/krsh.jpg",
    image: cleanBase + (SITE.defaultOgImage ?? "/assets/krsh/krsh.jpg"),
    foundingDate: SITE.founded,
    description: SITE.defaultDescription,
    telephone: mainLocation?.telephone ?? SITE.contact.telephone,
    faxNumber: SITE.contact.fax,
    email: mainLocation?.email ?? SITE.contact.email,
    address: mainLocation
      ? {
          "@type": "PostalAddress",
          streetAddress: mainLocation.streetAddress,
          postalCode: mainLocation.postalCode,
          addressLocality: mainLocation.addressLocality,
          addressRegion: mainLocation.addressRegion,
          addressCountry: mainLocation.addressCountry,
        }
      : undefined,
    areaServed: SITE.locations.map((l) => ({
      "@type": "City",
      name: l.addressLocality,
    })),
    knowsAbout: SITE.practiceAreas.map((p) => p.name),
    sameAs: SITE.sameAs.length > 0 ? SITE.sameAs : undefined,
  };
}

/**
 * Eigenständiger LocalBusiness-Eintrag pro Standort. Für lokale Suchtreffer
 * deutlich besser als eine einzige Adresse für vier Standorte.
 */
export function localBusinessSchema(
  baseUrl: string,
  location: LocationConfig,
) {
  const cleanBase = baseUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "@id": locationId(cleanBase, location.id),
    name: `${SITE.name} — ${location.name}`,
    parentOrganization: { "@id": orgId(cleanBase) },
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      postalCode: location.postalCode,
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      addressCountry: location.addressCountry,
    },
    telephone: location.telephone ?? SITE.contact.telephone,
    email: location.email ?? SITE.contact.email,
  };
}

/**
 * Person-Schema für Berufsträger. Bevorzugter Typ ist Attorney (Subtyp von
 * Person). Verknüpfung zur Organisation per worksFor / @id.
 */
export function personSchema(baseUrl: string, lawyer: Lawyer) {
  const cleanBase = baseUrl.replace(/\/$/, "");
  const pageUrl = `${cleanBase}/anwaelte-notare/anwaelte/${lawyer.slug}/`;

  const sameAs = [lawyer.xing, lawyer.linkedin].filter(
    (u): u is string => typeof u === "string" && u.length > 0,
  );

  // Berechne ein hasOccupation-Objekt aus den vorhandenen Feldern.
  const occupationName = lawyer.role ?? "Rechtsanwalt";
  const qualifications = lawyer.qualifications ?? [];

  return {
    "@context": "https://schema.org",
    "@type": ["Attorney", "Person"],
    "@id": personId(cleanBase, lawyer.slug),
    name: lawyer.fullName ?? lawyer.title,
    givenName: lawyer.givenName,
    familyName: lawyer.familyName,
    honorificPrefix: lawyer.honorificPrefix,
    jobTitle: lawyer.role ?? "Rechtsanwalt",
    description: lawyer.metaDescription ?? lawyer.headline,
    url: pageUrl,
    image: lawyer.photo ? cleanBase + lawyer.photo : undefined,
    telephone: lawyer.telephone,
    email: lawyer.email,
    knowsLanguage: lawyer.languages,
    knowsAbout: lawyer.specializations,
    worksFor: { "@id": orgId(cleanBase) },
    memberOf:
      lawyer.memberships && lawyer.memberships.length > 0
        ? lawyer.memberships.map((m) => ({ "@type": "Organization", name: m }))
        : undefined,
    hasOccupation: {
      "@type": "Occupation",
      name: occupationName,
      occupationLocation: { "@id": orgId(cleanBase) },
      qualifications:
        qualifications.length > 0 ? qualifications.join("; ") : undefined,
    },
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };
}

/**
 * Breadcrumb-Schema. Items werden in Reihenfolge gegeben, Position
 * automatisch gesetzt.
 */
export function breadcrumbSchema(
  baseUrl: string,
  items: Array<{ name: string; url: string }>,
) {
  const cleanBase = baseUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : cleanBase + (item.url.startsWith("/") ? item.url : "/" + item.url),
    })),
  };
}

/**
 * Schema für ein einzelnes Rechtsgebiet (Service / LegalService-Sub-Eintrag).
 */
export function legalServiceSchema(
  baseUrl: string,
  area: { slug: string; name: string; description?: string },
) {
  const cleanBase = baseUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.name} — ${SITE.name}`,
    serviceType: area.name,
    url: `${cleanBase}/${area.slug}/`,
    provider: { "@id": orgId(cleanBase) },
    areaServed: SITE.locations.map((l) => ({
      "@type": "City",
      name: l.addressLocality,
    })),
    description: area.description,
  };
}

/**
 * Entfernt undefined-Werte rekursiv, damit das ausgegebene JSON-LD knapp
 * bleibt und nicht durch null/undefined-Felder verschmutzt wird.
 */
export function cleanSchema<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj
      .map((v) => cleanSchema(v))
      .filter((v) => v !== undefined && v !== null) as unknown as T;
  }
  if (obj && typeof obj === "object") {
    const result: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      const cleaned = cleanSchema(v);
      if (
        cleaned !== undefined &&
        cleaned !== null &&
        !(Array.isArray(cleaned) && cleaned.length === 0)
      ) {
        result[k] = cleaned;
      }
    }
    return result as T;
  }
  return obj;
}
