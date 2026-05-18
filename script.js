
    let isDark = true

    const sunIconHTML = `
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    `
    const moonIconHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`

    const truckHTML = `
      <svg width="190" height="115" viewBox="0 0 200 130" fill="none">
        <ellipse cx="100" cy="120" rx="80" ry="7" fill="rgba(0,212,168,0.06)"/>
        <rect x="60" y="50" width="100" height="55" rx="6" fill="#2a2f45" stroke="#00d4a8" stroke-width="1.5" stroke-opacity="0.45"/>
        <rect x="20" y="62" width="45" height="43" rx="5" fill="#1e2236" stroke="#7c6af5" stroke-width="1.5" stroke-opacity="0.6"/>
        <rect x="25" y="67" width="35" height="22" rx="3" fill="#7c6af5" fill-opacity="0.25" stroke="#7c6af5" stroke-width="1" stroke-opacity="0.5"/>
        <text x="110" y="82" fill="#00d4a8" fill-opacity="0.55" font-size="8" letter-spacing="2" text-anchor="middle" font-family="Jost">ЛОГИСТИКА</text>
        <rect x="60" y="79" width="100" height="3" fill="#00d4a8" fill-opacity="0.35"/>
        <circle cx="38"  cy="107" r="12" fill="#161929" stroke="#00d4a8" stroke-width="2"/>
        <circle cx="38"  cy="107" r="5"  fill="#00d4a8" fill-opacity="0.5"/>
        <circle cx="90"  cy="107" r="12" fill="#161929" stroke="#00d4a8" stroke-width="2"/>
        <circle cx="90"  cy="107" r="5"  fill="#00d4a8" fill-opacity="0.5"/>
        <circle cx="148" cy="107" r="12" fill="#161929" stroke="#00d4a8" stroke-width="2"/>
        <circle cx="148" cy="107" r="5"  fill="#00d4a8" fill-opacity="0.5"/>
        <rect x="16" y="80" width="6" height="8" rx="2" fill="#ffd700" fill-opacity="0.9"/>
        <path d="M16 84 L2 80 L2 90 L16 88Z" fill="#ffd700" fill-opacity="0.12"/>
      </svg>
    `

    const barChartHTML = `
      <div class="flex items-end gap-3 h-28 animate-slideIn">
        <div class="flex items-end gap-1">
          <div class="w-5 rounded-t" style="height:48px;background:#0095a8;opacity:.5;transition:height .8s cubic-bezier(.34,1.56,.64,1)"></div>
          <div class="w-5 rounded-t" style="height:78px;background:#0095a8;opacity:.75;transition:height .8s .05s cubic-bezier(.34,1.56,.64,1)"></div>
        </div>
        <div class="flex items-end gap-1">
          <div class="w-5 rounded-t" style="height:62px;background:#6355e8;opacity:.5;transition:height .8s .1s cubic-bezier(.34,1.56,.64,1)"></div>
          <div class="w-5 rounded-t" style="height:102px;background:#6355e8;opacity:.8;transition:height .8s .15s cubic-bezier(.34,1.56,.64,1)"></div>
        </div>
        <div class="flex items-end gap-1">
          <div class="w-5 rounded-t" style="height:54px;background:#0095a8;opacity:.5;transition:height .8s .2s cubic-bezier(.34,1.56,.64,1)"></div>
          <div class="w-5 rounded-t" style="height:112px;background:#0095a8;opacity:.9;transition:height .8s .25s cubic-bezier(.34,1.56,.64,1)"></div>
        </div>
        <div class="flex items-end gap-1">
          <div class="w-5 rounded-t" style="height:38px;background:#6355e8;opacity:.5;transition:height .8s .3s cubic-bezier(.34,1.56,.64,1)"></div>
          <div class="w-5 rounded-t" style="height:84px;background:#6355e8;opacity:.7;transition:height .8s .35s cubic-bezier(.34,1.56,.64,1)"></div>
        </div>
      </div>
    `

    function toggleTheme() {
      isDark = !isDark

      const heroVisual = document.getElementById('heroVisual')
      if (isDark) {
        heroVisual.className = 'animate-float'
        heroVisual.innerHTML = truckHTML
      } else {
        heroVisual.className = ''
        heroVisual.innerHTML = barChartHTML
      }
    }

    function setActivePage(page) {
      const allPages = ['home', 'analytics', 'details']

      allPages.forEach(p => {
        const btn = document.getElementById(`nav-${p}`)
        const indicator = btn.querySelector('.nav-indicator')
        if (indicator) indicator.remove()
        btn.classList.remove('text-teal-400')
        btn.classList.add('text-white/40', 'hover:text-white', 'hover:bg-white/5')
      })

      const activeBtn = document.getElementById(`nav-${page}`)
      activeBtn.classList.add('text-teal-400')
      activeBtn.classList.remove('text-white/40', 'hover:text-white', 'hover:bg-white/5')

      const indicator = document.createElement('span')
      indicator.className = 'nav-indicator absolute left-0 top-1 bottom-1 w-0.5 bg-teal-400 rounded-r'
      indicator.style.boxShadow = '0 0 10px #00d4a8'
      activeBtn.prepend(indicator)
    }
  