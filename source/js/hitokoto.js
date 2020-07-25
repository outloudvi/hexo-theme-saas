fetch('https://v1.hitokoto.cn/')
  .then((x) => x.json())
  .then((x) => {
    let url = `https://hitokoto.cn/?uuid=${x.uuid}`
    let text = x.hitokoto + ' - '
    let text_with_url =
      (x.from_who ? x.from_who + ', ' : '') + '《' + x.from + '》'
    let hito = document.createElement('span')
    hito.innerText = text
    let koto = document.createElement('a')
    koto.href = url
    koto.innerText = text_with_url
    koto.target = '_blank'
    document.querySelector('#hitoLoading').style.display = 'none'
    document.querySelector('#hitokotoQuote').append(hito, koto)
  })
