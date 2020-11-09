// Fixes for IPFS
if (
  window.location.pathname.startsWith('/ipfs/') ||
  window.location.pathname.startsWith('/ipns/')
) {
  // IPFS/IPFS simed website. CSS & JS needs reloading.
  console.log(
    '%cHello, IPFS!',
    'color: #fff; background-color: #469ea2; font-size: 18px; padding: 12px',
  )
  console.log('Applying fixes for IPFS...')
  let ipfs_domain = window.location.hostname
  let ipfs_hash = window.location.pathname.split('/')[2] // IPFS hash
  let ipfs_type = window.location.pathname.split('/')[1] // ipfs or ipns
  let ipfs_path_prefix = `/${ipfs_type}/${ipfs_hash}`
  // eslint-disable-next-line no-inner-declarations
  function IPFSFixPath(url) {
    let urlChunks = url.split('/')
    urlChunks.splice(3, 0, `${ipfs_type}/${ipfs_hash}`)
    return urlChunks.join('/')
  }
  let IPFSScript = document.createElement('script')
  IPFSScript.src = ipfs_path_prefix + `/js/main.js`
  let IPFSStyle = document.createElement('link')
  IPFSStyle.rel = 'stylesheet'
  IPFSStyle.href = ipfs_path_prefix + `/css/style.css`
  document.body.appendChild(IPFSScript)
  document.body.appendChild(IPFSStyle)
  document.querySelectorAll('a').forEach((x) => {
    if (x.href.split('/')[2] === ipfs_domain) {
      x.href = IPFSFixPath(x.href)
    }
  })
} //  Hello from Tor
if (window.location.hostname.endsWith('.onion')) {
  console.log(
    '%cHello, Tor!',
    'color: #fff; background-color: #59316B; font-size: 18px; padding: 12px',
  )
}
if (window.location.hostname.endsWith('.dn42')) {
  console.log(
    '%cHello, dn42!',
    'color: #fff; background-color: #59316B; font-size: 18px; padding: 12px',
  )
}
