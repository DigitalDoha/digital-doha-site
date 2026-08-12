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
