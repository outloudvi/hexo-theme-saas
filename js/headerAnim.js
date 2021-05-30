;(() => {
  const headerBar = document.querySelector('#headerBar')
  const progressBar = document.querySelector('#progressBar')

  if (!headerBar || !progressBar) return

  function handlerScroll() {
    const scrollY = window.scrollY
    if (scrollY > 180) {
      headerBar.classList.add('sticky')
    } else {
      headerBar.classList.remove('sticky')
    }
    const perc = window.scrollY / window.scrollMaxY
    progressBar.style.marginRight = `${String((1 - perc) * 100)}vw`
  }

  progressBar.style.display = 'block'

  document.addEventListener('scroll', () => {
    handlerScroll()
  })

  handlerScroll()
})()
