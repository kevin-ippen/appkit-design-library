/**
 * Theme init for any consuming app. Run before first paint.
 * Priority: ?theme= URL param > localStorage > registry default.
 * Sets data-theme on <html>; theme files scope tokens to :root[data-theme="..."].
 */
export function initTheme({ storageKey = 'appkit-theme', defaultTheme = 'executive-telemetry' } = {}) {
  try {
    const q = new URLSearchParams(location.search).get('theme');
    const t = q || localStorage.getItem(storageKey) || defaultTheme;
    document.documentElement.setAttribute('data-theme', t);
    return t;
  } catch {
    document.documentElement.setAttribute('data-theme', defaultTheme);
    return defaultTheme;
  }
}

export function setTheme(id, { storageKey = 'appkit-theme' } = {}) {
  document.documentElement.setAttribute('data-theme', id);
  try {
    localStorage.setItem(storageKey, id);
  } catch {
    /* private mode */
  }
}

/** Google Fonts URL covering every registered theme's font families. */
export const THEME_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Geist+Mono:wght@400;500;600&display=swap';
