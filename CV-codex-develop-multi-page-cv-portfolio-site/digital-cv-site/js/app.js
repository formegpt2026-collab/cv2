import { initTheme } from './theme.js';
import { initI18n } from './i18n.js';
import { initFilters } from './filters.js';
import { initAnimations } from './animations.js';
import { initForm } from './form.js';

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const active = link.getAttribute('href') === path;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initI18n();
  initFilters();
  initAnimations();
  initForm();
  setActiveNav();

  const modal = document.querySelector('[data-project-modal]');
  if (modal) {
    document.querySelectorAll('[data-open-modal]').forEach((button) => {
      button.addEventListener('click', () => modal.showModal());
    });
    const close = modal.querySelector('[data-close-modal]');
    if (close) close.addEventListener('click', () => modal.close());
  }
});
