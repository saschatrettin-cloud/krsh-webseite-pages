# KRSH Website

Dieses Repository ist das alleinige Repository fuer die KRSH-Website.

## Struktur

- Das Root enthaelt den aktuell auszuliefernden statischen Stand fuer GitHub Pages.
- Der Unterordner `site/` enthaelt die Astro-Quellen.
- Die Unterordner `assets/`, `fileadmin/` und `_astro/` im Root bleiben das aktive Deployment-Ziel fuer `https://neu.krsh.de/`.

## Lokaler Pflegeablauf

```sh
cd site
npm install
npm run build:publish-root
```

Der Build laeuft in `site/dist/` und wird anschliessend kontrolliert in das Repository-Root synchronisiert, ohne `site/`, `.git/` und `.github/` zu entfernen.
