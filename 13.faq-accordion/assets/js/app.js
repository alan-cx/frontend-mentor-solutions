const faqs = document.querySelectorAll('.faq')
const images = document.querySelectorAll('.faq img')


faqs.forEach((faq, i) => {
  faq.addEventListener('click', () => {
    images.forEach(img => {
      img.setAttribute('src', './assets/images/icon-plus.svg')
    })
    faqs.forEach(faq => faq.classList.remove('active'))

    faqs[i].classList.add('active')
    images[i].setAttribute('src', './assets/images/icon-minus.svg')
  })
})

