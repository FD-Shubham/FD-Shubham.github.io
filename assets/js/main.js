// Theme toggle — persists to localStorage
(function () {
  const stored = localStorage.getItem('ss-theme');
  if (stored) document.body.setAttribute('data-theme', stored);

  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('ss-theme', next);
    });
  }
})();

// Scroll-in animations
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.animationDelay = (i * 0.07) + 's';
      e.target.classList.add('animate-in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stack-item, .project-row, .stat-item, .project-detail, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  obs.observe(el);
});

// Skill bars (about page)
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const skillsList = document.getElementById('skillsList');
if (skillsList) barObs.observe(skillsList);
