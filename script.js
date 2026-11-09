(() => {
  'use strict';

  const config = window.SITE_CONFIG || {};
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-navigation');
  const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];

  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Otwórz menu');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-is-open');
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const shouldOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(shouldOpen));
      menuButton.setAttribute('aria-label', shouldOpen ? 'Zamknij menu' : 'Otwórz menu');
      nav.classList.toggle('is-open', shouldOpen);
      document.body.classList.toggle('menu-is-open', shouldOpen);
    });
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 880) closeMenu();
    });
  }

  document.querySelectorAll('[data-current-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });

  const city = String(config.city || '').trim();
  document.querySelectorAll('[data-contact-city]').forEach(node => {
    node.textContent = city || 'Do uzupełnienia';
  });

  const address = String(config.address || '').trim();
  document.querySelectorAll('[data-contact-address]').forEach(node => {
    const container = node.closest('[data-optional-address]');
    if (address) {
      node.textContent = address;
      if (container) container.hidden = false;
    } else if (container) {
      container.hidden = true;
    }
  });

  const email = String(config.email || '').trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  document.querySelectorAll('[data-contact-email]').forEach(node => {
    node.textContent = validEmail ? email : 'Do uzupełnienia przed publikacją';
  });
  document.querySelectorAll('[data-email-link]').forEach(node => {
    node.hidden = !validEmail;
    if (validEmail) node.href = `mailto:${email}`;
  });
  document.querySelectorAll('[data-email-fallback]').forEach(node => {
    node.hidden = validEmail;
  });

  const phone = String(config.phone || '').trim();
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  document.querySelectorAll('[data-contact-phone]').forEach(node => {
    node.textContent = phone || 'Do uzupełnienia przed publikacją';
  });
  document.querySelectorAll('[data-phone-link]').forEach(node => {
    node.hidden = !phone;
    if (phone) node.href = `tel:${cleanPhone}`;
  });
})();