const emailInput = document.querySelector('.input');
const container = document.querySelector('.input-container');
const message = document.querySelector('.input-container__message');
const submitBtn = document.querySelector('.button[type="submit"]');


const personalDomains = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
  'icloud.com',
  'live.com',
  'proton.me',
  'uol.com.br',
  'bol.com.br',
  'terra.com.br'
];

emailInput.addEventListener('input', (e) => {
  const value = e.target.value.trim();

  container.dataset.state = '';
  message.textContent = '';
  submitBtn.disabled = true;

  if (!value) return;

  const [, domain] = value.split('@');

  if (domain) {
    const isPersonal = personalDomains.some(d => domain.toLowerCase().endsWith(d));

    if (isPersonal) {
      container.dataset.state = 'error';
      message.textContent = "Please enter your business email address";
      return;
    }
  }

  const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (!isValidFormat) {
    if (value.includes('@')) {
      container.dataset.state = 'error';
      message.textContent = "Invalid email address";
    }
    return;
  }

  container.dataset.state = 'success';
  submitBtn.disabled = false;
});


/* Menu Mobile */
const mobileMenu = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('#menu-icon');

mobileMenu.addEventListener('toggle', () => {
  const isOpen = mobileMenu.matches(':popover-open');

  menuIcon.src = isOpen
    ? './src/assets/icons/menu-mobile-open.svg'
    : './src/assets/icons/menu-mobile.svg';
});

const menuLinks = mobileMenu.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.hidePopover();
  });
});


/* Footer Copyright */
const copyright = document.querySelector('.footer__copyright');
copyright.innerHTML = `<p>&copy; Finpay ${new Date().getFullYear()}. All Rights Reserved.</p>`