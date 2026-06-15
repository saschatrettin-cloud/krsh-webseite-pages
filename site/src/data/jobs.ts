export type Job = {
  slug: string;
  title: string;
  location?: string;
  employment?: string;
  start?: string;
  active: boolean;
  linkLabel: string;
  keyword: string;
  summary: string[];
  details: string[];
};

export const jobs: Job[] = [
  {
    slug: "insolvenzsachbearbeiter-berlin",
    title: "Insolvenzsachbearbeiterin / Insolvenzsachbearbeiter (w/m/d)",
    location: "Berlin",
    employment: "unbefristet",
    start: "gern sofort",
    active: true,
    linkLabel: "Link zum Stellenangebot",
    keyword: "Insolvenzsachbearbeiter/in Berlin",
    summary: [
      "Schließen Sie sich unserem Team in der überregionalen Insolvenzverwaltung an und erleben Sie eine anspruchsvolle, gut vergütete Karriere in einem arbeitnehmerfreundlichen Umfeld. Wir bieten eine Position als Insolvenzsachbearbeiter(in), die durch abwechslungsreiche Aufgaben besticht. Profitieren Sie von familienfreundlichen Arbeitszeiten und einem top-modernen Arbeitsplatz, inklusive fortschrittlichem Dokumenten-Managementsystem. Wir freuen uns darauf, Sie in unserem Team willkommen zu heißen!",
      "Auf Wunsch kann nach Abstimmung eine Wohnung gestellt oder bei der provisionsfreien Vermittlung unterstützt werden.",
    ],
    details: [
      "Schließen Sie sich unserem Team in der überregionalen Insolvenzverwaltung an und erleben Sie eine anspruchsvolle, gut vergütete Karriere in einem arbeitnehmerfreundlichen Umfeld.",
      "Bei Interesse freuen wir uns über Ihre aussagekräftige Bewerbung. Richten Sie diese bitte unter Angabe Ihres frühestmöglichen Eintrittstermins, Ihrer Gehaltsvorstellung und des Stichworts „Insolvenzsachbearbeiter/in Berlin“ ausschließlich per E-Mail an personalabteilung@krsh.de.",
    ],
  },
  {
    slug: "sachbearbeiter-insolvenztabelle",
    title: "Sachbearbeiterin / Sachbearbeiter Insolvenztabelle (w/m/d)",
    location: "Berlin",
    employment: "unbefristet",
    start: "gern sofort",
    active: true,
    linkLabel: "Link zum Stellenangebot",
    keyword: "Sachbearbeiter/in Insolvenztabelle",
    summary: [
      "In der Abteilung Insolvenztabelle profitieren Sie von strukturierten digitalen Abläufen und moderner technischer Unterstützung, insbesondere bei der Erfassung und Vorprüfung angemeldeter Forderungen.",
      "Zur Verstärkung unserer Abteilung Insolvenztabelle suchen wir eine sorgfältige und strukturierte Persönlichkeit, die nach entsprechender Einarbeitung Gläubigerdaten pflegt, Fristen überwacht, Forderungsanmeldungen prüft und mit Verfahrensbeteiligten sowie Gerichten korrespondiert.",
    ],
    details: [
      "In der Abteilung Insolvenztabelle profitieren Sie von strukturierten digitalen Abläufen und moderner technischer Unterstützung, insbesondere bei der Erfassung und Vorprüfung angemeldeter Forderungen.",
      "Bei Interesse freuen wir uns über Ihre aussagekräftige Bewerbung. Richten Sie diese bitte unter Angabe Ihres frühestmöglichen Eintrittstermins, Ihrer Gehaltsvorstellung und des Stichworts „Sachbearbeiter/in Insolvenztabelle“ ausschließlich per E-Mail an personalabteilung@krsh.de.",
    ],
  },
  {
    slug: "associate-insolvenzverwaltung",
    title: "Associate (m/w/d) Insolvenzverwaltung",
    location: "Berlin",
    employment: "unbefristet",
    start: "gern sofort",
    active: true,
    linkLabel: "Link zum Stellenangebot",
    keyword: "Associate",
    summary: [
      "Zur Verstärkung unseres Teams in Berlin suchen wir einen Associate (m/w/d), der u.a. die Ermittlungen in Insolvenzverfahren mit juristischer Präzision und wirtschaftlichem Verständnis führt – strukturiert, digital und mit Blick für das Wesentliche. Bei entsprechender Eignung und Neigung können Sie auch die weitere Betreuung der Verfahren übernehmen.",
      "Auf Wunsch kann nach Abstimmung eine Wohnung gestellt oder bei der provisionsfreien Vermittlung unterstützt werden.",
    ],
    details: [
      "Zur Verstärkung unseres Teams in Berlin suchen wir einen Associate (m/w/d), der u.a. die Ermittlungen in Insolvenzverfahren mit juristischer Präzision und wirtschaftlichem Verständnis führt – strukturiert, digital und mit Blick für das Wesentliche.",
      "Weitere Einzelheiten, insbesondere das Gehalt und Ihre guten Aufstiegsmöglichkeiten in unserer Sozietät mit überschaubarer Größe, sollten wir persönlich erörtern. Bei Interesse schicken Sie bitte Ihre Bewerbung unter Angabe Ihres frühestmöglichen Eintrittstermins, Ihrer Gehaltsvorstellung und des Stichworts „Associate“ ausschließlich per E-Mail an personalabteilung@krsh.de.",
    ],
  },
  {
    slug: "referendar",
    title: "Referendarin / Referendar (m/w/d)",
    location: "Berlin",
    employment: "unbefristet",
    start: "gern sofort",
    active: true,
    linkLabel: "Link zur Stellenbeschreibung",
    keyword: "Referendar/in",
    summary: ["Wir suchen ab sofort eine Referendarin oder einen Referendar (m/w/d)."],
    details: [
      "Wir suchen ab sofort eine Referendarin oder einen Referendar (m/w/d).",
      "Bei Interesse freuen wir uns über Ihre aussagekräftige Bewerbung! Richten Sie diese bitte unter Angabe Ihres frühestmöglichen Eintrittstermins, Ihrer Gehaltsvorstellung und des Stichworts „Referendar/in“ ausschließlich per E-Mail an personalabteilung@krsh.de.",
    ],
  },
  {
    slug: "werkstudent",
    title: "Werkstudentin / Werkstudent (w/m/d)",
    location: "Berlin",
    employment: "unbefristet",
    start: "gern sofort",
    active: true,
    linkLabel: "Link zum Stellenangebot",
    keyword: "Werkstudent/in",
    summary: [
      "Für unseren Standort in Berlin suchen wir zur Verstärkung unseres Teams ab sofort Werkstudenten (w/m/d).",
      "Sie studieren Rechtswissenschaften (mit dem Ziel Examen oder Bachelor) und suchen eine Nebentätigkeit?",
      "Dann kommt eine Mitarbeit bei uns, insbesondere in unserer Insolvenzverwaltung, in Frage.",
    ],
    details: [
      "Für unseren Standort in Berlin suchen wir zur Verstärkung unseres Teams ab sofort Werkstudenten (w/m/d).",
      "Sie studieren Rechtswissenschaften (mit dem Ziel Examen oder Bachelor) und suchen eine Nebentätigkeit? Dann kommt eine Mitarbeit bei uns, insbesondere in unserer Insolvenzverwaltung, in Frage.",
      "Wir erbitten Ihre Bewerbung ausschließlich per Email an: personalabteilung@krsh.de",
    ],
  },
];

export const activeJobs = jobs.filter((job) => job.active);
