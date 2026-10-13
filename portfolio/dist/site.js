// Progressive enhancement: all content and disclosures work without JavaScript.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const english = document.documentElement.lang === 'en';
let paused = false;
try { paused = localStorage.getItem('portfolio-motion') === 'off'; } catch {}
const motionAllowed = () => !reducedMotion.matches && !paused;
const toggle = document.createElement('button');
toggle.className = 'motion-toggle';
toggle.type = 'button';
document.querySelector('.nav-actions').append(toggle);
function syncMotion() {
  const enabled = motionAllowed();
  document.documentElement.classList.toggle('motion-enabled', enabled);
  toggle.textContent = enabled ? (english ? 'Motion on' : 'Animation active') : (english ? 'Motion off' : 'Animation arrêtée');
  toggle.setAttribute('aria-pressed', String(enabled));
  toggle.setAttribute('aria-label', english ? 'Enable animations' : 'Activer les animations');
  if (!enabled) {
    document.getAnimations().forEach(animation => animation.cancel());
    document.querySelectorAll('[data-tilt]').forEach(el => el.style.removeProperty('transform'));
  }
}
toggle.addEventListener('click', () => {
  paused = !paused;
  try { localStorage.setItem('portfolio-motion', paused ? 'off' : 'on'); } catch {}
  syncMotion();
});
reducedMotion.addEventListener('change', syncMotion);
syncMotion();

const orbit = document.createElement('div');
orbit.className = 'hero-orbit';
orbit.setAttribute('aria-hidden', 'true');
orbit.innerHTML = '<i></i><i></i><i></i><span>✳</span>';
document.querySelector('.hero-portrait').prepend(orbit);

function enter(element, delay = 0) {
  if (!motionAllowed()) return;
  element.animate([
    { opacity: 0, transform: 'translateY(28px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], { duration: 800, delay, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
}
document.querySelectorAll('.hero-copy > *').forEach((el, i) => enter(el, i * 90));
enter(document.querySelector('.hero-portrait'), 180);
if (motionAllowed()) orbit.animate([{transform:'rotate(-28deg) scale(.8)',opacity:0},{transform:'rotate(0) scale(1)',opacity:1}],{duration:1500,easing:'cubic-bezier(.16,1,.3,1)'});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      enter(el);
      if (el.matches('.case')) {
        el.querySelectorAll('.pipeline > span').forEach((step, i) => enter(step, 160 + i * 110));
      }
      observer.unobserve(el);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading,.proof-strip > div,.case,.lab-heading,.project-grid article,.timeline article,.education,.about > div:first-child,.brief-section .split > div,.contact > *').forEach(el => observer.observe(el));
}

document.querySelectorAll('.hero-portrait,.case-visual').forEach(el => {
  el.dataset.tilt = '';
  let frame = 0;
  el.addEventListener('pointermove', event => {
    if (!motionAllowed() || !finePointer.matches) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (!motionAllowed()) return;
      const box = el.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      el.style.setProperty('--pointer-x', `${x * 100}%`);
      el.style.setProperty('--pointer-y', `${y * 100}%`);
      el.style.transform = `perspective(1000px) rotateX(${(0.5-y)*4}deg) rotateY(${(x-0.5)*4}deg)`;
    });
  });
  el.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame);
    el.style.removeProperty('transform');
  });
});

document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const symbol = detail.querySelector('summary span');
    if (symbol) symbol.textContent = detail.open ? '−' : '+';
    if (detail.open && motionAllowed()) {
      const body = detail.querySelector('summary + div');
      if (body) enter(body);
    }
  });
});
