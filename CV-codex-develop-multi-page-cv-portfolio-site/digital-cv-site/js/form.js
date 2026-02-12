export function initForm() {
  const form = document.querySelector('[data-contact-form]');
  const feedback = document.querySelector('[data-form-feedback]');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !subject || !message || !isEmailValid) {
      feedback.textContent = document.documentElement.lang === 'fr'
        ? 'Merci de remplir tous les champs avec une adresse email valide.'
        : 'Please complete all fields with a valid email address.';
      feedback.style.color = '#d14343';
      return;
    }

    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:ayyoubazimat@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    feedback.textContent = document.documentElement.lang === 'fr'
      ? 'Votre client email va s’ouvrir avec le message prérempli.'
      : 'Your email client will open with a prefilled message.';
    feedback.style.color = '#1f8f50';
    form.reset();
  });
}
