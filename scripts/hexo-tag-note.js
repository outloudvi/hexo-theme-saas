hexo.extend.tag.register(
  'note',
  function (args, content) {
    let htmlContent = hexo.render.renderSync({
      text: content,
      engine: 'markdown',
    })
    const classes = ['notification']
    for (const i of args) {
      classes.push(`is-${i}`)
    }
    if (classes.length == 1) {
      classes.push('is-info')
    }
    if (!classes.includes('is-dark')) {
      classes.push('is-light')
    } else {
      classes.splice(classes.indexOf('is-dark'), 1)
    }
    return `<div class="${classes.join(' ')}">
      ${htmlContent}
      </div>`
  },
  { ends: true },
)
