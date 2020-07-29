// post page loading only
// Thx Sukka: https://blog.skk.moe/post/hello-darkmode-my-old-friend/

;(() => {
  function storageRemove(val) {
    try {
      localStorage.removeItem(DATA_NAME, val)
    } catch (e) {
      //
    }
  }

  function refreshCustomSettings() {
    if (getDefaultScheme() == storageRead()) {
      storageRemove()
    }
  }

  function setButtonHandler() {
    for (const i of [LIGHT, DARK]) {
      Array.from(document.getElementsByClassName(TOGGLE_BUTTON_ID[i])).forEach(
        (x) =>
          x.addEventListener('click', () => {
            forceColorScheme(i)
          })
      )
    }
  }

  refreshCustomSettings()
  setButtonHandler()
})()
