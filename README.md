# AppKit Design Library

System-level, app-agnostic design system for data + AI apps — tokenized themes,
a theme registry, and canonical references. Works with Databricks AppKit
(shadcn-style appkit-ui), plain React/Tailwind, and anything that reads CSS
custom properties.

## What's here

- `gallery.html` — open it in a browser: the full theme vocabulary (buttons,
  cards, tables, bars, heat ramps, wells, severity texture, overlays) with a
  switcher for all five themes (`?theme=<id>` deep-links).
- `themes/` — token maps per theme (`executive-telemetry`, `midnight-telemetry`,
  `executive-ledger`, `terracotta-ink`, `telemetry-studio`) plus `tokens.css`,
  the shared application layer (typography, sidebar/rail, top-nav, rail CTA).
- `registry/themes.json` — machine-readable theme registry (id, label, mode,
  fonts, token path, concept reference).
- `react/theme-init.js` — drop-in theme bootstrap (`initTheme`, `setTheme`,
  `THEME_FONTS_URL`).
- `references/token-contract.md` — the canonical token contract every theme
  must implement.
- `references/concepts/` — source design concepts the themes were mapped from.
- `skills/app-design-system/` — agent skill for consuming/extending the library.

## Quick start (consuming app)

```css
@import "@databricks/appkit-ui/styles.css"; /* if using appkit */
@import "<library>/themes/executive-telemetry.css";
@import "<library>/themes/midnight-telemetry.css";
@import "<library>/themes/tokens.css";
```

```js
import { initTheme, setTheme, THEME_FONTS_URL } from '<library>/react/theme-init.js';
initTheme(); // before first paint
```

Theme files only set CSS variables on `:root[data-theme="..."]`; `tokens.css`
applies them. Components must style against `references/token-contract.md`.

## Adding a theme

1. Drop the source concept into `references/concepts/`.
2. Create `themes/<id>.css` implementing every section of the contract.
3. Register it in `registry/themes.json`.
4. Contrast-check (body ≥ 4.5, sidebar-muted ≥ 3) and add it to a consuming app's
   theme menu.
