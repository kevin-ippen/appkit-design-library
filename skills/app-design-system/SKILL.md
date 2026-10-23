---
name: app-design-system
description: "Apply the appkit-design-library token system when theming data + AI apps. Covers consuming registered themes, styling against the token contract, and adding new themes."
---

# App Design System

Canonical home: `kevin-ippen/appkit-design-library`.

## Consuming a theme in an app

1. Import the theme CSS file(s) plus `themes/tokens.css` (shared application layer).
2. Call `initTheme()` from `react/theme-init.js` before first paint (sets `data-theme`
   on `<html>`; honors `?theme=` URL param and localStorage).
3. Load `THEME_FONTS_URL` (Google Fonts covering every registered theme).
4. Style components against the token contract (`references/token-contract.md`) —
   shadcn vars for components, `--brand-*` for charts, `--sev-*` for severity,
   `--sidebar-*` for rail/sidebar, `--map-*` for basemaps, `--font-*` for type.
5. Theme selection UI: read `registry/themes.json`; set with `setTheme(id)`.

## Adding a theme

Follow `references/token-contract.md` § Adding a theme. Every section of the
contract is required; missing tokens silently fall back to browser defaults and
produce broken surfaces. Dark themes must also re-tune `--sev-*` (soft pastels,
not the light-theme hot ramp) and `--sidebar-*`.

## Rules

- Never hardcode hex in app components — reference tokens (`var(--sev-critical)`).
- New shared primitives belong in `themes/tokens.css`, not in app CSS.
- Theme concepts from design tools go to `references/concepts/` first, then get
  mapped to a `themes/*.css` token file, then registered in `registry/themes.json`.
