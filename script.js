const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const glow = document.getElementById('cursorGlow');
const quoteForm = document.getElementById('quoteForm');
const processTrack = document.getElementById('processTrack');
const processProgress = document.getElementById('processProgress');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
  if (processTrack && processProgress) {
    const rect = processTrack.getBoundingClientRect();
    const viewport = window.innerHeight;
    const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height * 0.55)));
    processProgress.style.width = `${progress * 100}%`;
  }
}, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('pointermove', (event) => {
  if (!glow || window.matchMedia('(max-width: 760px)').matches) return;
  glow.style.opacity = '1';
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

document.addEventListener('pointerleave', () => { if (glow) glow.style.opacity = '0'; });

quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const name = data.get('name') || '';
  const company = data.get('company') || '';
  const email = data.get('email') || '';
  const phone = data.get('phone') || '';
  const service = data.get('service') || '';
  const message = data.get('message') || '';
  const subject = `Premier website inquiry — ${service}`;
  const body = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    '',
    'Requirement:',
    message
  ].join('\n');
  window.location.href = `mailto:info@ptcqtr.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();

// Unified brand logo supplied by Premier.
(() => {
  const logoUrl = 'https://imgpx.com/en/O6UYtcruhodw.png';
  const alt = 'Premier Projects for Food Trading & Services';

  const makeLogo = (className) => {
    const img = document.createElement('img');
    img.src = logoUrl;
    img.alt = alt;
    img.className = className;
    img.loading = 'eager';
    img.decoding = 'async';
    return img;
  };

  const headerBrand = document.querySelector('.site-header .brand');
  if (headerBrand) {
    headerBrand.replaceChildren(makeLogo('external-brand-logo external-brand-logo--header'));
  }

  const heroPlaque = document.querySelector('.plaque-inner');
  if (heroPlaque) {
    heroPlaque.replaceChildren(makeLogo('external-brand-logo external-brand-logo--hero'));
    heroPlaque.classList.add('external-logo-plaque');
  }

  const footerBrand = document.querySelector('.footer-logo');
  if (footerBrand) {
    footerBrand.replaceChildren(makeLogo('external-brand-logo external-brand-logo--footer'));
  }

  const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = logoUrl;
  if (!favicon.parentNode) document.head.appendChild(favicon);

  const style = document.createElement('style');
  style.textContent = `
    .external-brand-logo{display:block;object-fit:contain;background:#fff;border-radius:8px}
    .external-brand-logo--header{width:245px;max-width:42vw;height:50px}
    .external-logo-plaque{display:flex!important;align-items:center!important;justify-content:center!important;grid-template-columns:1fr!important;padding:42px!important}
    .external-brand-logo--hero{width:min(100%,610px);max-height:300px;border-radius:16px;box-shadow:0 26px 60px rgba(0,0,0,.2)}
    .external-brand-logo--footer{width:290px;max-width:100%;height:auto;border-radius:10px}
    @media(max-width:760px){
      .external-brand-logo--header{width:190px;max-width:62vw;height:42px}
      .external-logo-plaque{min-height:230px!important;padding:26px 20px!important}
      .external-brand-logo--hero{max-height:220px;border-radius:12px}
      .external-brand-logo--footer{width:240px}
    }
  `;
  document.head.appendChild(style);
})();
