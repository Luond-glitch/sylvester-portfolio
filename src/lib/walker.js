export function initFx() {
  document.documentElement.classList.add('fx')
  document.querySelectorAll('h1,h2,.sub,.card h3').forEach(function (el) {
    if (el.dataset.s) return; el.dataset.s = 1; var k = 0
    ;(function w(n) {
      [].slice.call(n.childNodes).forEach(function (c) {
        if (c.nodeType == 3) {
          var f = document.createDocumentFragment()
          c.textContent.split(/(\s+)/).forEach(function (t) {
            if (!t) return
            if (/^\s+$/.test(t)) { f.appendChild(document.createTextNode(' ')); return }
            var s = document.createElement('span'); s.className = 'w'; s.textContent = t
            s.style.setProperty('--a', ((k % 2 ? 1 : -1) * (6 + Math.random() * 10)).toFixed(1) + 'deg')
            s.style.setProperty('--d', (k++ * 55) + 'ms'); f.appendChild(s)
          })
          c.replaceWith(f)
        } else if (c.nodeType == 1) w(c)
      })
    })(el)
  })
  document.querySelectorAll('.card').forEach(function (c, i) { c.style.setProperty('--ca', (i % 2 ? 2.5 : -2.5) + 'deg'); c.style.setProperty('--i', i % 4) })
  var io = new IntersectionObserver(function (a) { a.forEach(function (x) { if (x.isIntersecting) x.target.classList.add('in') }) }, { threshold: .06 })
  document.querySelectorAll('section').forEach(function (s) { io.observe(s) })
}
export function initWalker() {
  var $ = function (s) { return document.querySelector(s) }, wk = $('#wk'); if (!wk) return function () {}
  var inn = $('#wkin'), up = wk.querySelector('.up'), lL = wk.querySelector('.lgL'), lR = wk.querySelector('.lgR'), bub = $('#bub'), bench = wk.querySelector('.bench'), tg = $('#wkt')
  var mq = matchMedia('(prefers-reduced-motion:reduce)'), S = { x: 0, y: 0, tx: 0, ty: 0, ph: 0, sit: 0, act: 0, l: 0, sm: 0, last: performance.now(), la: performance.now() }, raf
  var G = ['Hello! 😊', 'Welcome to my portfolio', 'Nice to meet you 😊', 'Let’s connect!', 'Thanks for visiting 😊']
  function place() { var s = $('#slot'), r = s ? s.getBoundingClientRect() : { left: innerWidth * .7, width: 0, bottom: innerHeight * .9 }; S.x = S.tx = r.left + r.width / 2; S.y = S.ty = Math.min(r.bottom, innerHeight - 14) }
  function aim(x, y) { S.act = 1; wk.classList.add('on'); S.tx = x; S.ty = Math.min(Math.max(y, innerHeight * .35), innerHeight - 8); S.la = performance.now() }
  function smile() { S.act = 1; wk.classList.add('on'); S.la = performance.now(); S.sm = 1700; bub.textContent = G[Math.random() * G.length | 0]; bub.classList.add('on') }
  var lastScroll = 0
  var ev = [
    ['mousemove', function (e) { aim(e.clientX, e.clientY) }],
    ['touchstart', function (e) { var t = e.touches[0]; aim(t.clientX, t.clientY) }],
    ['touchmove', function (e) { var t = e.touches[0]; aim(t.clientX, t.clientY) }],
    ['click', function (e) { aim(e.clientX, e.clientY); smile() }],
    ['keydown', smile],
    ['scroll', function () { S.la = performance.now(); if (performance.now() - lastScroll > 4000) { lastScroll = performance.now(); smile() } }],
  ]
  ev.forEach(function (p) { addEventListener(p[0], p[1], { passive: true }) })
  tg.onclick = function () { wk.style.display = wk.style.display == 'none' ? '' : 'none' }
  place()
  function tick(now) {
    var dt = Math.min(50, now - S.last); S.last = now
    if (!S.act) place()
    var dx = S.tx - S.x, dy = S.ty - S.y, d = Math.hypot(dx, dy), mode = 'idle', H = wk.offsetHeight
    if (d > 55 && !mq.matches) { mode = d > 340 ? 'run' : 'walk'; var sp = Math.min(d, (mode == 'run' ? .65 : .26) * dt); S.x += dx / d * sp; S.y += dy / d * sp }
    else if (now - S.la > 7000) mode = 'sit'
    var run = mode == 'run', mv = mode == 'run' || mode == 'walk'
    S.sit += ((mode == 'sit' ? 1 : 0) - S.sit) * Math.min(1, dt * .006)
    S.l += ((mv ? (dx > 0 ? 1 : -1) * (run ? 7 : 3) : 0) - S.l) * .15
    S.ph += dt * (run ? .016 : .009)
    var s = mv ? Math.sin(S.ph) : 0, amp = run ? 26 : 15, lift = H * (run ? .07 : .04)
    var bob = mv ? Math.abs(Math.cos(S.ph)) * H * (run ? .025 : .012) : Math.sin(now / 700) * H * .003
    var sh = S.sit * .216 * H, jump = 0
    if (S.sm > 0) { jump = Math.abs(Math.sin(S.sm / 130)) * H * .05 * Math.min(1, S.sm / 600); S.sm -= dt; if (S.sm <= 0) bub.classList.remove('on') }
    var sc = 1 - .45 * S.sit, k = 1 - S.sit
    lL.style.transform = 'translateY(' + (sh - Math.max(0, s) * lift) + 'px) rotate(' + (s * amp * k) + 'deg) scaleY(' + sc + ')'
    lR.style.transform = 'translateY(' + (sh - Math.max(0, -s) * lift) + 'px) rotate(' + (-s * amp * k) + 'deg) scaleY(' + sc + ')'
    up.style.transform = 'translateY(' + (sh - bob - jump) + 'px)'
    inn.style.transform = 'rotate(' + S.l + 'deg)'
    bench.style.opacity = S.sit
    var z = .6 + .4 * Math.min(1, S.y / innerHeight)
    wk.style.transform = 'translate3d(' + (S.x - wk.offsetWidth / 2) + 'px,' + (S.y - H) + 'px,0) scale(' + z + ')'
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
  return function () { cancelAnimationFrame(raf); ev.forEach(function (p) { removeEventListener(p[0], p[1]) }) }
}
