// post page loading only
// some variables are exported to window. by color_pre.js
// Thx Sukka: https://blog.skk.moe/post/hello-darkmode-my-old-friend/

(() => {
  function storageRemove(val) {
    try {
      localStorage.removeItem(DATA_NAME, val)
    } catch (e) {
      //
    }
  }

  function setButtonHandler() {
    for (const i of [LIGHT, DARK]) {
      Array.from(document.getElementsByClassName(TOGGLE_BUTTON_ID[i])).forEach(
        (x) =>
          x.addEventListener('click', () => {
            forceColorScheme(i)
          }),
      )
    }
  }

  setButtonHandler()
  const removeStorage = postLoad()
  if (removeStorage) {
    storageRemove()
  }
})()
