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

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-undef
  if (hljs) {
    // eslint-disable-next-line no-undef
    hljs.initHighlighting()
    document.querySelectorAll('pre > code').forEach((x) => {
      x.parentElement.style.borderRadius = '3px'
      x.parentElement.style.padding = '1.5px'
      x.parentElement.style.position = 'relative'
      const bgText = document.createElement('div')
      let langName = ''
      const langList = x.className
        .split(' ')
        .filter((x) => x.startsWith('language-'))
      if (langList.length) {
        langName = langList[0].replace(/^language-/, '')
      }
      if (langName === '') {
        langName = x.className.split(' ').filter((x) => x !== 'hljs')[0] || ''
      }
      bgText.className = 'bgText codeLang'
      bgText.innerText = langName
      x.parentElement.append(bgText)
    })
  }
})
