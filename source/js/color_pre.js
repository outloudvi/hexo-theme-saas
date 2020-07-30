// Thx Sukka: https://blog.skk.moe/post/hello-darkmode-my-old-friend/

(() => {
  const LIGHT = 'light'
  const DARK = 'dark'

  const CSS_BASE_ELEMENT = document.documentElement // <html>
  const CSS_SCHEME_KEY = '--preferred-color-theme'
  const DATA_NAME = 'data-color-scheme'
  const TOGGLE_BUTTON_ID = {}
  TOGGLE_BUTTON_ID[LIGHT] = 'btnToggleLight'
  TOGGLE_BUTTON_ID[DARK] = 'btnToggleDark'

  function storageRead() {
    try {
      return localStorage[DATA_NAME]
    } catch (e) {
      return null
    }
  }

  function storageWrite(val) {
    try {
      localStorage.setItem(DATA_NAME, val)
    } catch (e) {
      //
    }
  }

  function getDefaultScheme() {
    const res = getComputedStyle(CSS_BASE_ELEMENT).getPropertyValue(
      CSS_SCHEME_KEY,
    )
    if (res.length)
      return res.replace(/\"/g, '').trim() === 'dark' ? DARK : LIGHT
    return res === 'dark' ? DARK : LIGHT
  }

  function hideClass(cls) {
    Array.from(document.getElementsByClassName(cls)).forEach(
      (x) => (x.style.display = 'none'),
    )
  }

  function showClass(cls) {
    Array.from(document.getElementsByClassName(cls)).forEach(
      (x) => (x.style.display = 'block'),
    )
  }

  function setButtonVisibility(light) {
    if (light === LIGHT) {
      hideClass(TOGGLE_BUTTON_ID[LIGHT])
      showClass(TOGGLE_BUTTON_ID[DARK])
    } else {
      hideClass(TOGGLE_BUTTON_ID[DARK])
      showClass(TOGGLE_BUTTON_ID[LIGHT])
    }
  }
  function changeBulmaTheme(light) {
    if (light == LIGHT) {
      document.querySelectorAll('.is-light-but-not-now').forEach((node) => {
        let classes = node.className
          .split(' ')
          .filter((x) => x && x !== 'is-light-but-not-now')
        classes.push('is-light')
        node.className = classes.join(' ')
      })
    } else {
      document.querySelectorAll('.is-light').forEach((node) => {
        let classes = node.className
          .split(' ')
          .filter((x) => x && x !== 'is-light')
        classes.push('is-light-but-not-now')
        node.className = classes.join(' ')
      })
    }
  }

  function forceColorScheme(light, write = true) {
    if (light !== LIGHT && light !== DARK) return
    CSS_BASE_ELEMENT.setAttribute(DATA_NAME, light)
    if (write) storageWrite(light)
    setButtonVisibility(light)
    changeBulmaTheme(light)
    console.log(`You are now at the ${light} side!`)
  }

  let defaultScheme = getDefaultScheme()
  if (defaultScheme == DARK) {
    console.log(
      'You are at the %cdark%c side!',
      'color: #fff; background-color: #222;',
      '',
    )
    CSS_BASE_ELEMENT.setAttribute(DATA_NAME, 'dark')
  } else {
    console.log(
      'You are at the %clight%c side!',
      'color: #22966e; background-color: #eee;',
      '',
    )
    CSS_BASE_ELEMENT.setAttribute(DATA_NAME, 'light')
  }

  let currentTheme = defaultScheme
  let storageTheme = storageRead()

  if (storageTheme) {
    forceColorScheme(storageTheme, false)
    currentTheme = storageTheme
  } else {
    forceColorScheme(defaultScheme, false)
  }

  // Exports for color_post.js
  window.DATA_NAME = DATA_NAME
  window.LIGHT = LIGHT
  window.DARK = DARK
  window.TOGGLE_BUTTON_ID = TOGGLE_BUTTON_ID
  window.forceColorScheme = forceColorScheme
  window.postLoad = () => {
    setButtonVisibility(currentTheme)
    changeBulmaTheme(currentTheme)
    return defaultScheme == storageTheme
  }
})()
