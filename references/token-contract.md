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

## 7. Data viz (required for themes that render charts)

`--chart-cat-1 … --chart-cat-8` categorical (identity), fixed order
`--chart-seq-1 … --chart-seq-8` sequential (magnitude), low → high, one hue
`--chart-div-1 … --chart-div-8` diverging, strong cool → weak cool | weak warm → strong warm

These are `@databricks/appkit-ui`'s own chart variables (its charts read them; so does `@genui/appkit`), set per
theme so a theme's charts match its mode — AppKit switches its chart palette on `.dark`, which a `data-theme` theme
never sets. `tokens.css` points AppKit's chart chrome (`--chart-grid --chart-axis-label --chart-axis-title
--chart-tooltip-bg`) at the theme's `--border --muted-foreground --foreground --popover`.

`--chart-1 … --chart-5` stay brand accents (section 1) for shadcn chart components that read them; a series palette
uses `--chart-cat-*`, never `--chart-1…5` (brand colours include the danger red and read as status).

**Rules** (validated with the dataviz method's palette validator — OKLab ΔE×100, Machado CVD simulation):

- categorical: every slot inside the mode's lightness band (OKLCH L 0.43–0.77 light, 0.48–0.67 dark) and above the
  chroma floor (C ≥ 0.10); adjacent pairs ΔE ≥ 8 under protan/deutan and ≥ 15 for normal vision; the first three
  slots clear the same gates for **all** pairs (scatter, maps: three series, then fold to "Other"); ≥ 3:1 against the
  theme's `--card`, or the chart ships visible labels / a table view; each slot ≥ 10 from every status colour
  (`--sev-*`, `--destructive --success --warning`), so a series never reads as a severity.
- sequential: one hue (the theme's primary when it is cool, else its slate), monotone lightness with steps ≥ 0.06
  apart; the lightest light-mode step may recede toward the surface (heatmaps, choropleths), so an *ordinal* ramp
  (stages, tiers) starts at the first step ≥ 2:1 against `--card` (below).
- diverging: a cool pole (blue, or the sequential hue when it is blue) against an orange pole — warm but not the danger
  red, and neither arm green, so neither side reads as good/bad; equal steps per arm, weakest beside the midpoint.
- dark themes get their own steps (validated against the dark `--card`), not a flipped light palette.

| Theme | Mode | Adjacent CVD / normal | First 3, all pairs | Contrast vs `--card` | Ordinal from |
|---|---|---|---|---|---|
| executive-telemetry | light | 21.8 / 25.4 | 8.3 / 24.1 | all ≥ 3:1 | seq-4 |
| midnight-telemetry | dark | 11.4 / 16.6 | 11.4 / 16.6 | all ≥ 3:1 | seq-3 |
| executive-ledger | light | 21.8 / 25.8 | 9.7 / 16.4 | slot 5 2.5:1 — labels or table view | seq-4 |
| terracotta-ink | light | 20.3 / 21.2 | 15.6 / 17.7 | all ≥ 3:1 | seq-4 |
| telemetry-studio | light | 21.5 / 23.1 | 15.6 / 18.0 | all ≥ 3:1 | seq-4 |

## Adding a theme

1. Copy the closest existing `themes/*.css`, set all seven sections above (validate §7's palettes; don't eyeball them).
2. Register it in `registry/themes.json` (id, label, mode, fonts, tokens path, concept ref).
3. Drop the source concept in `references/concepts/`.
4. Contrast-check: body text on --background ≥ 4.5, sidebar-muted on --sidebar ≥ 3.
