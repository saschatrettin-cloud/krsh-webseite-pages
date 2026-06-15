export const pilatesRegistrationConfig = {
  apiUrl: "",
  timeZone: "Europe/Berlin",
  courseLocation: "Studio A, Berliner Strasse 120, 10713 Berlin",
  capacityPerSlot: 10,
  resetTimeLabel: "13:30 Uhr",
  notes: [
    "Die Anmeldung gilt jeweils nur fuer den naechsten Kurstermin.",
    "Nach Kursende springt das System automatisch auf die Folgewoche um.",
    "Im Produktivbetrieb darf die Seite nur intern mit Zugriffsschutz freigeschaltet werden.",
  ],
  slots: [
    {
      id: "tuesday",
      label: "Dienstag",
      shortLabel: "Dienstagskurs",
      weekday: 2,
      courseTimeLabel: "12:30 Uhr",
      resetHour: 13,
      resetMinute: 30,
    },
    {
      id: "thursday",
      label: "Donnerstag",
      shortLabel: "Donnerstagskurs",
      weekday: 4,
      courseTimeLabel: "12:30 Uhr",
      resetHour: 13,
      resetMinute: 30,
    },
  ],
} as const;

export const pilatesRegistrationDemoState = {
  tuesday: [
    { name: "Anna Beispiel", createdAt: "2026-06-10T08:12:00+02:00" },
    { name: "Martin Beispiel", createdAt: "2026-06-10T08:24:00+02:00" },
    { name: "Clara Beispiel", createdAt: "2026-06-10T08:41:00+02:00" },
    { name: "Jonas Beispiel", createdAt: "2026-06-10T09:03:00+02:00" },
    { name: "Nina Beispiel", createdAt: "2026-06-10T09:18:00+02:00" },
    { name: "Lukas Beispiel", createdAt: "2026-06-10T09:26:00+02:00" },
  ],
  thursday: [
    { name: "Paula Beispiel", createdAt: "2026-06-11T10:02:00+02:00" },
    { name: "Tobias Beispiel", createdAt: "2026-06-11T10:19:00+02:00" },
    { name: "Mira Beispiel", createdAt: "2026-06-11T10:33:00+02:00" },
  ],
} as const;
