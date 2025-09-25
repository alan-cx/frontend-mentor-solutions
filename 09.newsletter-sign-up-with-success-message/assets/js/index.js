const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const warning = document.querySelector('span');
const popup = document.querySelector('.success-popup');
const wrapper = document.querySelector('.wrapper');
const userEmail = document.querySelector('.show-user-email');
const closePopupBtn = document.querySelector('.close-popup')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValidEmail = validEmail(emailInput.value);

  if ( !isValidEmail ) {
    warning.classList.add('active');
    emailInput.classList.add('active');
  }
  else {
    warning.classList.remove('active');
    emailInput.classList.remove('active');
    userEmail.innerHTML = `${ emailInput.value }`;
    popup.classList.add('active');
    wrapper.style.display = 'none';
    wrapper.setAttribute('aria-hidden', 'true');
    popup.setAttribute('aria-hidden', 'false');
    emailInput.value = '';
  }
})

closePopupBtn.addEventListener('click', () => {
  userEmail.innerHTML = "";
  warning.classList.remove('active');
  emailInput.classList.remove('active');
  popup.classList.remove('active');
  popup.setAttribute('aria-hidden', 'true');
  wrapper.setAttribute('aria-hidden', 'false');
  wrapper.style.display = 'flex';
})

function validEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}