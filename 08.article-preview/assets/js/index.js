const showInfoBtn = document.querySelector('.show-more-info')
const wrapperBox = document.querySelector('.wrapper-info')

showInfoBtn.addEventListener('click', () => {
  wrapperBox.classList.toggle('active')

  if ( wrapperBox.classList.contains('active') ) {
    wrapperBox.setAttribute('aria-label', 'false')
  }
  else {
    wrapperBox.setAttribute('aria-label', 'true')
  }
})