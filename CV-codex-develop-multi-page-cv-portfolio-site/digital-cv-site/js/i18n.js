const translations = {
  fr: {
    navHome: 'Accueil', navAbout: 'À propos', navExperience: 'Expériences', navSkills: 'Compétences', navProjects: 'Projets', navContact: 'Contact',
    heroTitle: 'Ingénieur Automatisme & SCADA orienté terrain',
    heroLead: 'Je conçois et déploie des solutions d’automatisation industrielles robustes, de l’étude à la mise en service client.',
    heroCtaPrimary: 'Me contacter', heroCtaSecondary: 'Voir mes projets',
    summaryTitle: 'Résumé professionnel',
    summaryText: 'Spécialisé en PLC/IHM, supervision SCADA et digitalisation industrielle, avec expérience sur Siemens, Allen-Bradley et Omron.',
    workingStyleTitle: 'Style de travail',
    workingStyleText: 'Pragmatique et orienté résultats : j’allie rigueur technique, exécution terrain (FAT/SAT) et communication claire avec les équipes client.',
    pageTitleAbout: 'À propos',
    aboutIntro: 'Ingénieur basé à Casablanca, j’interviens sur des projets d’automatisation, supervision et cybersécurité OT.',
    softTitle: 'Forces professionnelles',
    soft1: 'Mise en service & support client', soft2: 'Rigueur d’analyse', soft3: 'Coordination inter-équipes',
    educationTitle: 'Formation', languagesTitle: 'Langues',
    pageTitleExp: 'Expériences professionnelles',
    pageTitleSkills: 'Compétences techniques',
    pageTitleProjects: 'Projets sélectionnés',
    pageTitleContact: 'Contact',
    contactLead: 'Disponible pour des missions en automatisation, SCADA et digitalisation industrielle.',
    formName: 'Nom', formEmail: 'Email', formSubject: 'Sujet', formMessage: 'Message', formSend: 'Envoyer',
    formSuccess: 'Votre client email va s’ouvrir avec le message prérempli.',
    formError: 'Merci de remplir tous les champs avec une adresse email valide.',
    downloadCv: 'Télécharger CV',
    all: 'Tous',
    footerText: '© 2026 Ayyoub Azimat — Portfolio professionnel.'
  },
  en: {
    navHome: 'Home', navAbout: 'About', navExperience: 'Experience', navSkills: 'Skills', navProjects: 'Projects', navContact: 'Contact',
    heroTitle: 'Field-oriented Automation & SCADA Engineer',
    heroLead: 'I design and deploy robust industrial automation solutions, from engineering to customer commissioning.',
    heroCtaPrimary: 'Contact me', heroCtaSecondary: 'View projects',
    summaryTitle: 'Professional summary',
    summaryText: 'Specialized in PLC/HMI, SCADA supervision, and industrial digitalization with hands-on experience in Siemens, Allen-Bradley, and Omron ecosystems.',
    workingStyleTitle: 'Working style',
    workingStyleText: 'Pragmatic and results-focused: I combine technical rigor, on-site execution (FAT/SAT), and clear communication with client teams.',
    pageTitleAbout: 'About',
    aboutIntro: 'Engineer based in Casablanca, working on automation, supervision, and OT cybersecurity projects.',
    softTitle: 'Professional strengths',
    soft1: 'Commissioning & client support', soft2: 'Analytical rigor', soft3: 'Cross-team coordination',
    educationTitle: 'Education', languagesTitle: 'Languages',
    pageTitleExp: 'Professional experience',
    pageTitleSkills: 'Technical skills',
    pageTitleProjects: 'Selected projects',
    pageTitleContact: 'Contact',
    contactLead: 'Available for automation, SCADA, and industrial digitalization projects.',
    formName: 'Name', formEmail: 'Email', formSubject: 'Subject', formMessage: 'Message', formSend: 'Send',
    formSuccess: 'Your email client will open with a prefilled message.',
    formError: 'Please complete all fields with a valid email address.',
    downloadCv: 'Download CV',
    all: 'All',
    footerText: '© 2026 Ayyoub Azimat — Professional portfolio.'
  }
};

const LANG_KEY = 'cv-site-lang';

export function initI18n() {
  const switcher = document.querySelector('[data-lang-switch]');
  const saved = localStorage.getItem(LANG_KEY);
  const initial = saved || (navigator.language?.startsWith('fr') ? 'fr' : 'en');
  applyLanguage(initial);

  if (switcher) {
    switcher.addEventListener('click', () => {
      const current = document.documentElement.lang === 'fr' ? 'fr' : 'en';
      const next = current === 'fr' ? 'en' : 'fr';
      applyLanguage(next);
    });
  }
}

export function applyLanguage(lang) {
  const locale = translations[lang] ? lang : 'fr';
  document.documentElement.lang = locale;
  localStorage.setItem(LANG_KEY, locale);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[locale][key]) el.textContent = translations[locale][key];
  });

  const cvLink = document.querySelector('[data-cv-download]');
  if (cvLink) {
    cvLink.href = locale === 'fr' ? 'assets/cv_fr.pdf' : 'assets/cv_en.pdf';
    cvLink.setAttribute('download', locale === 'fr' ? 'Ayyoub_Azimat_CV_FR.pdf' : 'Ayyoub_Azimat_CV_EN.pdf');
  }

  const switcher = document.querySelector('[data-lang-switch]');
  if (switcher) switcher.textContent = locale === 'fr' ? 'FR / EN' : 'EN / FR';
}
