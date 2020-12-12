// Show url for links
if (
  !new URL(window.location).searchParams.get('hideurl') &&
  (window.innerWidth || 1024) < 1024
) {
  document
    .querySelectorAll('article a:not([data-hideurl])')
    .forEach(function (elem) {
      if (elem.innerText.length === 0) return
      let mat = elem.href.match('^([A-Za-z]*://)?([^/]*)/?')
      if (new URL(elem.href).hostname == window.location.hostname) return
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
