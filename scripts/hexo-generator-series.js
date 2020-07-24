hexo.extend.generator.register('series', function (locals) {
  if (locals.data.series)
    return {
      path: `series/index.html`,
      data: {
        series: locals.data.series,
        title: `Series List`,
      },
      layout: ['series_list'],
    }
  return {}
})
