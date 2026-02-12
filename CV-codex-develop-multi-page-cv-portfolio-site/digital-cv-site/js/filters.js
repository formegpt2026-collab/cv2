function setupFilter(groupSelector, itemSelector) {
  const group = document.querySelector(groupSelector);
  if (!group) return;

  const buttons = group.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll(itemSelector);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));

      items.forEach((item) => {
        const tags = item.dataset.tags || '';
        const show = filter === 'all' || tags.includes(filter);
        item.hidden = !show;
      });
    });
  });
}

export function initFilters() {
  setupFilter('[data-skill-filters]', '[data-skill-card]');
  setupFilter('[data-project-filters]', '[data-project-card]');
}
