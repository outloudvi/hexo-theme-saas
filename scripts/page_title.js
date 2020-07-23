hexo.extend.helper.register('page_title', function () {
  return (this.page.title ? this.page.title + ' |' : '') + this.config.title
})
