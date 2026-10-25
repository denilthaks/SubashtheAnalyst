document.documentElement.classList.add('has-js');

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-nav');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('is-open', !open);
    menuButton.querySelector('.sr-only').textContent = open ? 'Open navigation' : 'Close navigation';
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      menuButton.querySelector('.sr-only').textContent = 'Open navigation';
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      menuButton.querySelector('.sr-only').textContent = 'Open navigation';
      menuButton.focus();
    }
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
