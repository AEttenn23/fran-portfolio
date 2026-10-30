// Shared behaviour: header shrink on scroll, mobile menu, works grid and work detail page.

const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const nav = document.querySelector('.nav');
document.querySelector('.menu-toggle').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));

const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const linkify = (s) => escapeHtml(s).replace(/https?:\/\/[^\s]+/g, (url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`);

// ---------- Home: works grid + active nav link ----------

const worksGrid = document.getElementById('works');
if (worksGrid) {
  worksGrid.innerHTML = PROJECTS.map((p) => `
    <a class="thumb" href="work.html?id=${p.id}">
      <img src="${p.cover}" alt="${escapeHtml(p.title)}" loading="lazy">
      <div class="thumb-overlay">
        <div>
          <div class="thumb-sep"></div>
          <div class="thumb-title">${escapeHtml(p.title)}</div>
        </div>
      </div>
    </a>`).join('');

  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => s && observer.observe(s));
}

// ---------- Work detail page ----------

const workRoot = document.getElementById('work');
if (workRoot) {
  const id = new URLSearchParams(location.search).get('id');
  const index = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
  const p = PROJECTS[index];
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const artstationUrl = `https://www.artstation.com/artwork/${p.id}`;

  document.title = `${p.title} | Francisco Rodriguez Morales`;
  workRoot.innerHTML = `
    <section class="work-hero">
      <h1>${escapeHtml(p.title)}</h1>
      <p class="description">${linkify(p.description)}</p>
      ${p.hasVideo ? `<p class="video-note">This project includes video turntables, <a href="${artstationUrl}" target="_blank" rel="noopener">watch them on ArtStation</a>.</p>` : ''}
      <div class="divider"></div>
    </section>
    <div class="gallery">
      ${p.images.map((src) => `<img src="${src}" alt="${escapeHtml(p.title)}" loading="lazy">`).join('')}
    </div>
    <nav class="work-nav">
      <a class="prev" href="work.html?id=${prev.id}"><span class="label">&larr; Previous</span><span class="title">${escapeHtml(prev.title)}</span></a>
      <a class="next" href="work.html?id=${next.id}"><span class="label">Next &rarr;</span><span class="title">${escapeHtml(next.title)}</span></a>
    </nav>`;

  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('img');
  workRoot.querySelectorAll('.gallery img').forEach((im) => im.addEventListener('click', () => {
    lightboxImg.src = im.src;
    lightbox.classList.add('open');
  }));
  lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && lightbox.classList.remove('open'));
}
