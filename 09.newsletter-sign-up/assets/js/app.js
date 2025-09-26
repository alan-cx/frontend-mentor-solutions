const form = document.querySelector('form');
      emailInput = document.getElementById('email'),
      closeBtn = document.querySelector('.close-btn'),
      showUserEmail = document.querySelector('.user-email'),
      warningMessage = document.querySelector('label span'),
      wrapper = document.querySelector('.wrapper'),
      successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = validEmail( emailInput.value );

  if ( !isValid ) {
    emailInput.classList.add('active');
    warningMessage.classList.add('active');
  }
  else {
    wrapper.classList.add('disabled');
    wrapper.setAttribute('aria-hidden', 'true');
    successMessage.classList.add('active');
    successMessage.setAttribute('aria-hidden', 'false');
    showUserEmail.innerText = `${ emailInput.value }`;
    emailInput.classList.remove('active');
    warningMessage.classList.remove('active');
  }
})

closeBtn.addEventListener('click', () => {
  wrapper.classList.remove('disabled');
  wrapper.setAttribute('aria-hidden', 'false');
  successMessage.classList.remove('active');
  successMessage.setAttribute('aria-hidden', 'true');
  emailInput.value = '';
})

function validEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}