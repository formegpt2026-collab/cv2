const THEME_KEY = 'cv-site-theme';

export function initTheme() {
  const btn = document.querySelector('[data-theme-toggle]');
  const saved = localStorage.getItem(THEME_KEY);
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (preferredDark ? 'dark' : 'light');
  applyTheme(initial);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
}

export function applyTheme(theme) {
  const resolved = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = resolved;
  localStorage.setItem(THEME_KEY, resolved);
  const btn = document.querySelector('[data-theme-toggle]');
  if (btn) btn.textContent = resolved === 'dark' ? '☀️' : '🌙';
}
