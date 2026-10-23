---
name: Telemetry Studio
colors:
  surface: '#fff8f7'
  surface-dim: '#e9d5d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#fee9ea'
  surface-container-high: '#f8e3e4'
  surface-container-highest: '#f2dedf'
  on-surface: '#23191a'
  on-surface-variant: '#3f4945'
  inverse-surface: '#3a2d2e'
  inverse-on-surface: '#ffeced'
  outline: '#6f7975'
  outline-variant: '#bec9c3'
  surface-tint: '#0e6b56'
  primary: '#005140'
  on-primary: '#ffffff'
  primary-container: '#0e6b56'
  on-primary-container: '#98e8ce'
  inverse-primary: '#86d6bc'
  secondary: '#006c47'
  on-secondary: '#ffffff'
  secondary-container: '#8af5be'
  on-secondary-container: '#00714b'
  tertiary: '#4f2aac'
  on-tertiary: '#ffffff'
  tertiary-container: '#6746c5'
  on-tertiary-container: '#dfd2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a2f2d7'
  primary-fixed-dim: '#86d6bc'
  on-primary-fixed: '#002018'
  on-primary-fixed-variant: '#005140'
  secondary-fixed: '#8df7c1'
  secondary-fixed-dim: '#71dba6'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005235'
  tertiary-fixed: '#e8ddff'
  tertiary-fixed-dim: '#cebdff'
  on-tertiary-fixed: '#20005e'
  on-tertiary-fixed-variant: '#4f2aab'
  background: '#fff8f7'
  on-background: '#23191a'
  surface-variant: '#f2dedf'
  canvas-base: '#f5f3f9'
  surface-card: '#ffffff'
  emerald-deep: '#0e6b56'
  emerald-vivid: '#00875a'
  text-primary: '#1b1112'
  text-secondary: '#5e5b66'
  border-subtle: '#e8e5ef'
  border-accent: rgba(14, 107, 86, 0.24)
  chip-dark: '#1e1415'
  track-bg: '#ece8f5'
typography:
  display-hero:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  metric-kpi:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  metric-kpi-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-default:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-muted:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  mono-data:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a refined, architectural approach to enterprise SaaS telemetry, operational analytics, and voice-of-customer (VOC) intelligence. The aesthetic merges precision minimalism with executive studio serenity. It is tailored for product leaders, data analysts, and executive teams who need rapid, fatigue-free data comprehension across complex data streams.

The emotional signature is composed, confident, and meticulously organized. Interfaces prioritize high information density without visual clutter, using breathable cool-lavender canvases, razor-sharp typographic hierarchies, and deep emerald teal anchors. Interaction states feel immediate and deliberate, borrowing visual restraint from high-end editorial layouts and technical workstation monitors.

## Colors

The palette balances soft, low-fatigue atmospheric tints with authoritative jewel-toned data marks:

- **Primary (`#0e6b56`):** Deep emerald teal, deployed for dominant data visualizations, active status badges, primary action triggers, and trajectory line pinnacles.
- **Secondary (`#00875a`):** Vibrant emerald green, reserved for positive delta tags, success confirmations, and trend vectors.
- **Tertiary (`#7c5cdb`):** Soft electric lilac, used sparingly for secondary comparative analytical dimensions and interactive focus indicators.
- **Neutral Canvas (`#f5f3f9` & `#ffffff`):** A cool lilac-tinted canvas backdrop offset by crisp, pure-white analytical card surfaces.
- **Charcoal Text (`#1b1112` & `#5e5b66`):** Near-black charcoal delivers superior optical legibility for numeric readouts over generic neutral grays, while muted slate provides clear hierarchy for metadata.

## Typography

The typographic structure balances corporate discipline with technical precision:

- **Hanken Grotesk** serves as the primary system face for display, headlines, and general interface text. Its modern proportions and crisp ink-traps deliver executive clarity across both large analytical figures and dense multi-line tables.
- **Geist** handles technical utility duties: tabular numerals, progress timestamps, metadata badges, and chart axis markers. It ensures strict numeric alignment across vertical comparison columns.
- **Metric Scaling:** Quantitative data points use the dedicated `metric-kpi` style, engineered with tighter letter-spacing to present high numbers compactly without line breaks.

## Layout & Spacing

The layout is built around a 12-column responsive fluid grid anchored by strict padding boundaries:

- **Canvas & Shell:** On viewports ≥ 1280px, layout sections use a maximum boundary of 1600px with a default outer canvas margin of `2.5rem` (`margin`) and `1.5rem` (`gutter`).
- **Breakpoints:**
  - **Desktop (1024px+):** Full 12-column structure; KPI metrics distribute in equal 4-up or 3-up spans. Sidebar panels lock to 280px fixed width.
  - **Tablet (768px - 1023px):** 6-column grid; KPI cards collapse to 2-column modules with `gutter: 1.25rem`.
  - **Mobile (< 768px):** Single-column stacked stream with `margin-mobile: 1.25rem` and internal element gaps driven by `space-md` (`1rem`).
- **Internal Density:** Analytical cards maintain uniform internal breathing room using `space-lg` (`1.5rem`), scaling down to `space-md` (`1rem`) on compact mobile views.

## Elevation & Depth

Visual hierarchy uses crisp surface contrast and hair-line separation over heavy drop shadows:

- **Hairline Outlines:** Cards and analytical containers sit on pure white (`#ffffff`) surfaces bounded by a crisp 1px hairline border (`#e8e5ef`). There are no heavy cast shadows; surfaces assert themselves cleanly over the soft lilac canvas (`#f5f3f9`).
- **Layered Containers:** Elevated flyouts, filter trays, and dropdown overlays use a subtle 1px border combined with an ambient blur: `box-shadow: 0 8px 24px -4px rgba(27, 17, 18, 0.06), 0 2px 6px -1px rgba(27, 17, 18, 0.03)`.
- **Active State Highlights:** Selected KPI modules or focused rows swap standard borders for a tinted teal perimeter (`rgba(14, 107, 86, 0.35)`), creating clear visual presence without altering element geometry.

## Shapes

The design system maintains geometric precision with moderate softening:

- **Cards & Data Modules:** Standard surfaces apply `0.5rem` (8px) corner curvature, delivering an architectural edge that preserves tabular grid alignment.
- **Interactive Buttons & Badges:** Primary and secondary actions, search bars, and filter toggles feature `0.5rem` (8px) borders.
- **Avatar Chips & Status Tags:** User tokens and contextual telemetry pills use full pill curvature (`rounded-full` or 9999px) to contrast with rectangular data containers.
- **Progress Trackers:** Horizontal track backgrounds and progress fills use rounded inner terminations of 4px to maintain consistent line terminal curves.

## Components

### Metric KPI Cards
- **Base:** Pure white background with a 1px solid border (`#e8e5ef`), `space-lg` padding, and `0.5rem` roundedness.
- **Header:** Uppercase category label (`label-caps`) in `#5e5b66` paired with an optional top-right contextual status indicator.
- **Value:** Dominant numerical display (`metric-kpi`) in `#1b1112`.
- **Footer:** Inline delta capsule: a subtle emerald tint (`rgba(0, 135, 90, 0.1)`) containing secondary emerald text (`#00875a`) with upward/downward direction glyphs.

### Buttons & Controls
- **Primary Button:** Solid deep emerald teal (`#0e6b56`), white label in `title-sm`, 8px border radius, 0 12px horizontal padding, 40px base height. Hover shifts to `#0b5544`.
- **Secondary / Ghost Button:** Transparent background, 1px border (`#e8e5ef`), text `#1b1112`. Hover triggers soft canvas tint (`#f5f3f9`).

### Avatar Chips
- **Profile Chips:** Pill-shaped dark charcoal shell (`#1e1415`) with crisp white or soft lavender text, accommodating a circular 24px inner image or monogram circle.
- **Context Chips:** Semi-transparent lilac (`rgba(124, 92, 219, 0.1)`) with tertiary purple typography for VOC sentiment labeling.

### Progress Meter Ranks
- **Track:** 6px tall continuous horizontal bar with `#ece8f5` background.
- **Indicator Fill:** Solid deep teal (`#0e6b56`) or vibrant emerald (`#00875a`), dynamically scaled to represent distribution percentages.
- **Metadata Alignment:** Geist monospace data label positioned flush right above or inline with the bar.

### Trajectory Line Charts
- **Canvas:** Transparent chart background with hairline grid markers (`#f0edf7`).
- **Stroke:** 2px solid deep emerald teal vector line without heavy gradient drop-shadows.
- **Data Points:** 6px circular nodes with a 2px white outline and `#0e6b56` core, appearing on hover states.
- **Tooltip:** Solid dark charcoal card (`#1b1112`) with white text and a single hairline border, showing exact numerical and delta telemetry.

### Input Fields & Search Bars
- **Surface:** White background, 1px border (`#e8e5ef`), 40px height, inset `space-md` horizontal padding. Focus state engages a 1px border in `#0e6b56` and an outer 3px ring (`rgba(14, 107, 86, 0.15)`).