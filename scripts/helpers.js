hexo.extend.helper.register('dedup', function (items) {
  return items.filter((item, key) => items.indexOf(item) === key)
})

hexo.extend.helper.register('leftpadZeroForTwo', function (str) {
  str = String(str)
  return str.length === 1 ? '0' + str : str
})

hexo.extend.helper.register('sortByKey', function (items, key) {
  let keys = items.map((x) => x[key])
  keys.sort()
  let ret = []
  for (const i of keys) {
    ret.push(...items.filter((x) => x[key] == i))
  }
  return ret
})
