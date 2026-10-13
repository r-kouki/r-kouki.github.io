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
    document.getAnimations().filter(animation => !(animation instanceof CSSAnimation)).forEach(animation => animation.cancel());
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

// A persistent visual rhythm, with the same pause control as entrance animations.
const ribbon = document.createElement('div');
ribbon.className = 'expertise-ribbon';
ribbon.setAttribute('aria-hidden', 'true');
const disciplines = english ? ['Applied AI','Software engineering','Data to product','MLOps','Client delivery'] : ['IA appliquée','Génie logiciel','Des données au produit','MLOps','Solutions métier'];
const ribbonGroup = `<div>${disciplines.map(label => `<span>${label}</span><b>✳</b>`).join('')}</div>`;
ribbon.innerHTML = `<div class="ribbon-track">${ribbonGroup}${ribbonGroup}</div>`;
document.querySelector('.hero').after(ribbon);
const progress = document.createElement('div');
progress.className = 'reading-progress';
progress.setAttribute('aria-hidden','true');
document.body.append(progress);
let scrollFrame = 0;
function updateScroll() {
  scrollFrame = 0;
  const extent = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${extent > 0 ? scrollY / extent : 0})`;
  if (motionAllowed()) {
    document.querySelector('.hero').style.setProperty('--scroll-shift', `${Math.min(scrollY * .12, 65)}px`);
  }
}
addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
}, { passive:true });
updateScroll();
document.addEventListener('visibilitychange', () => document.documentElement.classList.toggle('page-hidden', document.hidden));

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
// Animate the emphasized headline words without replacing their readable text.
const accents = document.querySelectorAll('h1 em, h2 em');
accents.forEach(accent => {
  const words = accent.textContent.trim().split(/\s+/);
  accent.replaceChildren();
  words.forEach((word, index) => {
    if (index) accent.append(document.createTextNode(' '));
    const span = document.createElement('span');
    span.className = 'accent-word';
    span.textContent = word;
    span.style.setProperty('--word-delay', `${index * .16}s`);
    accent.append(span);
  });
});
if ('IntersectionObserver' in window) {
  const accentObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('accent-visible');
      if (motionAllowed()) entry.target.querySelectorAll('.accent-word').forEach((word, index) => {
        word.animate([{opacity:0,translate:'0 16px',filter:'blur(4px)'},{opacity:1,translate:'0 0',filter:'blur(0)'}], {duration:850,delay:150+index*120,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'});
      });
      accentObserver.unobserve(entry.target);
    });
  }, {threshold:.4});
  accents.forEach(accent => accentObserver.observe(accent));
}
