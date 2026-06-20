// Env-driven analytics loaders. Each is a no-op when its ID is absent,
// so nothing loads until VITE_GTM_ID / VITE_META_PIXEL_ID are set in .env.

function initGTM(id) {
  if (!id) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`
  document.head.appendChild(script)

  // GTM <noscript> fallback for the (rare) no-JS case.
  const noscript = document.createElement('noscript')
  const iframe = document.createElement('iframe')
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`
  iframe.height = '0'
  iframe.width = '0'
  iframe.style.display = 'none'
  iframe.style.visibility = 'hidden'
  noscript.appendChild(iframe)
  document.body.appendChild(noscript)
}

function initMetaPixel(id) {
  if (!id) return
  /* Meta Pixel base code */
  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */
  window.fbq('init', id)
  window.fbq('track', 'PageView')
}

export function initAnalytics() {
  initGTM(import.meta.env.VITE_GTM_ID)
  initMetaPixel(import.meta.env.VITE_META_PIXEL_ID)
}
