const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Highlight the nav link for the section currently in view (progressive enhancement).
const navLinks = Array.from(document.querySelectorAll('#nav-menu a[href^="#"]'));
const linkBySection = new Map(
  navLinks.map((link) => [link.getAttribute('href').slice(1), link])
);
const sections = navLinks
  .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkBySection.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((other) => other.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'true');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((section) => observer.observe(section));
}
