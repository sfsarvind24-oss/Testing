const menuBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-project]');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');

    const value = button.dataset.filter;
    projects.forEach((project) => {
      const category = project.dataset.project;
      project.style.display = value === 'all' || value === category ? 'block' : 'none';
    });
  });
});
