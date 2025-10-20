const ratingBtns = document.querySelectorAll('.rating-btn'),
submitBtn = document.querySelector('.submit-btn'),
showUserRating = document.querySelector('.user-value'),
mainCard = document.querySelector('.card'),
thanksCard = document.querySelector('.thanks-card')

let userRating;

ratingBtns.forEach((btn, i) => {
  btn.addEventListener('click', (e) => {
    ratingBtns.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-checked', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-checked', 'true');
    userRating = +e.target.value;
  });
});


submitBtn.addEventListener('click', () => {
  mainCard.classList.add('hidden');
  thanksCard.classList.add('show');
  thanksCard.setAttribute('aria-hidden', 'false');
  mainCard.setAttribute('aria-hidden', 'true');
  showUserRating.innerText = userRating;
  thanksCard.querySelector('h2').focus();
})