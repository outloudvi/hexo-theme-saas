;(() => {
  const headerItems = document.querySelector('#headerItems')
  const progressBar = document.querySelector('#progressBar')

  if (!headerItems || !progressBar) return

  function handlerScroll() {
    const scrollY = window.scrollY
    if (scrollY > 180) {
      headerItems.classList.add('sticky')
    } else {
      headerItems.classList.remove('sticky')
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
