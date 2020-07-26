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

// Show url for links
if (
  !new URL(window.location).searchParams.get('hideurl') &&
  (window.innerWidth || 1024) < 1024
) {
  document
    .querySelectorAll('article a:not([data-hideurl])')
    .forEach(function (elem) {
      let mat = elem.href.match('^([A-Za-z]*://)?([^/]*)/?')
      if (mat[1] !== 'http://' && mat[1] !== 'https://') return
      if (mat.length == 3) {
        let small = document.createElement('small')
        small.innerText = '(' + mat[2] + ')'
        small.style.margin = '0 2px'
        if (mat[1] === 'http://') small.style.color = '#900'
        small.className = 'sLink'
        elem.after(small)
      }
    })
}
