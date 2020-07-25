const hideBtn = document.querySelector('#btnHideToc')
const showBtn = document.querySelector('#btnShowToc')
const tocList = document.querySelector('#tocList')
;(() => {
  if (!hideBtn || !showBtn || !tocList) return
  hideBtn.addEventListener('click', () => {
    tocList.className += ' gone'
    hideBtn.style.display = 'none'
    showBtn.style.display = 'inline-flex'
  })
  showBtn.addEventListener('click', () => {
    tocList.className = tocList.className
      .split(' ')
      .filter((x) => x && x != 'gone')
      .join(' ')
    showBtn.style.display = 'none'
    hideBtn.style.display = 'inline-flex'
  })
})()
