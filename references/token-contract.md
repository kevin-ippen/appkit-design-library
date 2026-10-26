# Token Contract (canonical)

Every theme in `themes/*.css` sets the same variable contract on
`:root[data-theme="<id>"]`. Consuming apps style against these variables only —
never hardcode palette values in components.

## 1. shadcn/appkit contract (required)

`--background --foreground --card --card-foreground --popover --popover-foreground
--muted --muted-foreground --border --input --radius
--primary --primary-foreground --secondary --secondary-foreground
--accent --accent-foreground --destructive --destructive-foreground
--success --success-foreground --warning --warning-foreground
--ring --chart-1 … --chart-5`

These are what `@databricks/appkit-ui` (shadcn-style) components consume. A theme
that sets these gets the whole component library for free.

## 2. Brand extension (required)

`--brand-navy` authority/primary surfaces
`--brand-crimson` intervention / primary action / alerts
`--brand-blue` analytics accents
`--brand-cyan` secondary accent
`--brand-gold` highlight / premium

Used by charts, inline styles, SVGs (e.g. `fill="var(--brand-blue)"`).

## 3. Severity ramp (required)

`--sev-critical --sev-high --sev-watch --sev-ok --sev-info --sev-neutral`

Severity semantics are theme-controlled so brand red and danger red never collide.

## 4. Chrome tokens (required)

`--sidebar --sidebar-foreground --sidebar-muted --sidebar-primary
--sidebar-primary-foreground --sidebar-border --sidebar-hover`

Executive sidebar / collapsible rail surfaces.

## 5. Domain tokens (recommended)

`--map-land --map-land-stroke --map-coastline` — choropleth basemap
`--card-shadow --alert-shadow` — elevation

## 6. Typography (required)

`--font-headline` (h1–h4, .font-headline)
`--font-body`
`--font-mono` (data figures, .tabular-nums)

## 7. Signature flourishes (required)

Geometry & texture — what makes a theme *itself* rather than a recolor.

`--radius-card` card/container corner (ledger: 4px book-bound; studio: 8px; terracotta: 10px soft)
`--radius-control` buttons/inputs corner
`--card-border-w` + `--card-border-c` hairline outline (set width 0 for shadow-only surfaces)
`--card-shadow` (section 5) — elevation strategy: outline vs double-stop shadow vs none
`--accent-bar-w` + `--accent-bar-c` left accent bar on highlight/critical cards (0 = off)
`--active-ring-c` perimeter highlight on selected/active surfaces (studio: tinted teal)
`--chart-bar-h` bar/meter thickness (ledger: slender 4px; terracotta: tactile 10px)
`--chart-bar-gap` spacing between bar rows
`--chart-grid-c` gridline/zero-line color
`--chart-area-opacity` area fill under line charts

Theme authors: don't just recolor section 1 — change at least three of these so the
theme reads differently at arm's length.

## Adding a theme

1. Copy the closest existing `themes/*.css`, set all six sections above.
2. Register it in `registry/themes.json` (id, label, mode, fonts, tokens path, concept ref).
3. Drop the source concept in `references/concepts/`.
4. Contrast-check: body text on --background ≥ 4.5, sidebar-muted on --sidebar ≥ 3.
