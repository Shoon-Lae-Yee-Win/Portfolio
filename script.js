const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

themeToggle?.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.querySelector('span').textContent = dark ? '☀' : '☾';
});
