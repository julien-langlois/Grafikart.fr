import {randomBetween} from '@fn/math'

const lineHeight = 18 // Hauteur de ligne
const lineDuration = .4 // Durée d'animation pour une ligne
const screens = 3 // Nombre d'écran de code à remplire

export default class AnimatedEditor extends HTMLElement {

  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    this.width = parseInt(this.getAttribute('width'), 10)
    this.height = parseInt(this.getAttribute('height'), 10)
    this.style.display = 'block'
    const linesPerScreen = Math.floor(330 / lineHeight)
    this.root.innerHTML =
      this.drawSVG(this.drawLines(linesPerScreen)) +
      this.buildStyle(linesPerScreen)
  }

  drawSVG (code) {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 678 402">
  <g filter="url(#filter0_d)">
    <rect width="324" height="382" x="10" y="8" fill="#F7FAFB" rx="4"/>
    <rect width="323" height="381" x="10.5" y="8.5" stroke="#D5E3EC" rx="3.5"/>
  </g>
  <g filter="url(#filter1_d)">
    <path fill="#fff" d="M26 57a4 4 0 014-4h283a4 4 0 014 4v313a4 4 0 01-4 4H30a4 4 0 01-4-4V57z"/>
    <path stroke="#D5E3EC"
          d="M30 53.5h283a3.5 3.5 0 013.5 3.5v313a3.5 3.5 0 01-3.5 3.5H30a3.5 3.5 0 01-3.5-3.5V57a3.5 3.5 0 013.5-3.5z"/>
  </g>
  <g filter="url(#filter2_d)">
    <circle cx="32.5" cy="30.5" r="6.5" fill="#fff"/>
    <circle cx="32.5" cy="30.5" r="6" stroke="#D5E3EC"/>
  </g>
  <g filter="url(#filter3_d)">
    <circle cx="52.5" cy="30.5" r="6.5" fill="#fff"/>
    <circle cx="52.5" cy="30.5" r="6" stroke="#D5E3EC"/>
  </g>
  <g filter="url(#filter4_d)">
    <circle cx="72.5" cy="30.5" r="6.5" fill="#fff"/>
    <circle cx="72.5" cy="30.5" r="6" stroke="#D5E3EC"/>
  </g>
  <g stroke="#D5E3EC">
    <path fill="#F7FAFB"
          d="M46 69.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5V73a3.5 3.5 0 013.5-3.5z"/>
    <circle cx="75" cy="101" r="21.5" fill="#fff"/>
    <rect width="186" height="14" x="104.5" y="79.5" fill="#fff" rx="3.5"/>
    <rect width="137" height="14" x="104.5" y="102.5" fill="#fff" rx="3.5"/>
    <rect  width="155" height="14" x="104.5" y="125.5" fill="#fff" rx="3.5"/>
  </g>
  <g stroke="#D5E3EC">
    <path fill="#F7FAFB"
          d="M46 166.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5v-73a3.5 3.5 0 013.5-3.5z"/>
    <circle cx="75" cy="198" r="21.5" fill="#fff"/>
    <rect width="146" height="14" x="104.5" y="176.5" fill="#fff" rx="3.5"/>
    <rect width="77" height="14" x="104.5" y="199.5" fill="#fff" rx="3.5"/>
    <rect width="115" height="14" x="104.5" y="222.5" fill="#fff" rx="3.5"/>
  </g>
  <g id="Group 51" stroke="#D5E3EC">
    <path fill="#F7FAFB"
          d="M46 263.5h252a3.5 3.5 0 013.5 3.5v73a3.5 3.5 0 01-3.5 3.5H46a3.5 3.5 0 01-3.5-3.5v-73a3.5 3.5 0 013.5-3.5z"/>
    <circle id="Ellipse 18_3" cx="75" cy="295" r="21.5" fill="#fff"/>
    <rect width="96" height="14" x="104.5" y="273.5" fill="#fff" rx="3.5"/>
    <rect width="157" height="14" x="104.5" y="296.5" fill="#fff" rx="3.5"/>
    <rect width="145" height="14" x="104.5" y="319.5" fill="#fff" rx="3.5"/>
  </g>
  <g filter="url(#filter5_d)">
    <rect width="324" height="382" x="344" y="8" fill="#F7FAFB" rx="4"/>
    <rect width="323" height="381" x="344.5" y="8.5" stroke="#D5E3EC" rx="3.5"/>
  </g>
  <path fill="#E8F0F2" stroke="#D5E3EC"
        d="M348 8.5h47.5v381H348a3.5 3.5 0 01-3.5-3.5V12a3.5 3.5 0 013.5-3.5z"/>
  <path fill="#D5E3EC" d="M395 8h1v383h-1z"/>
  <path fill="#F7FAFB" d="M396 9h72v15h-72z"/>
  <circle id="Ellipse 19" cx="460.5" cy="16.5" r="1" fill="#E8F0F2" stroke="#D5E3EC"/>
  <path fill="#E8F0F2" stroke="#D5E3EC" d="M467.5 8.5h72v15h-72z"/>
  <path fill="#E8F0F2" stroke="#D5E3EC" d="M539.5 8.5h72v15h-72z"/>
  <circle id="Ellipse 20" cx="532.5" cy="16.5" r="1" fill="#E8F0F2" stroke="#D5E3EC"/>
  <circle id="Ellipse 21" cx="602.5" cy="16.5" r="1" fill="#E8F0F2" stroke="#D5E3EC"/>
  <rect width="50" height="4" x="404" y="14" fill="#E8F0F2" rx="2"/>
  ${code}
  <defs>
    <filter id="filter0_d" width="344" height="402" x="0" y="0" color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="5"/>
      <feColorMatrix values="0 0 0 0 0.847778 0 0 0 0 0.88184 0 0 0 0 0.908333 0 0 0 1 0"/>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <filter id="filter1_d" width="299" height="329" x="22" y="50" color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix values="0 0 0 0 0.847778 0 0 0 0 0.88184 0 0 0 0 0.908333 0 0 0 1 0"/>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <filter id="filter2_d" width="21" height="21" x="22" y="21" color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix values="0 0 0 0 0.847778 0 0 0 0 0.88184 0 0 0 0 0.908333 0 0 0 1 0"/>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <filter id="filter3_d" width="21" height="21" x="42" y="21" color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix values="0 0 0 0 0.847778 0 0 0 0 0.88184 0 0 0 0 0.908333 0 0 0 1 0"/>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <filter id="filter4_d" width="21" height="21" x="62" y="21" color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix values="0 0 0 0 0.847778 0 0 0 0 0.88184 0 0 0 0 0.908333 0 0 0 1 0"/>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <filter id="filter5_d" width="344" height="402" x="334" y="0" color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="5"/>
      <feColorMatrix values="0 0 0 0 0.847778 0 0 0 0 0.88184 0 0 0 0 0.908333 0 0 0 1 0"/>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
  </defs>
</svg>`
  }

  /**
   * Dessine une ligne de code
   *
   * @param {int} linesPerScreen
   * @return {string}
   */
  drawLines (linesPerScreen) {
    const lines = linesPerScreen * screens
    const screenWidth = 228
    const screenHeight = linesPerScreen * lineHeight
    let line = 0
    let currentIndent = 0 // Indentation
    let html = '<g style="transform: translate(407px, 37px)">'
    html += `<mask id="screenmask">
    <rect x="0" y="0" width="${screenWidth}" height="${screenHeight}" fill="white"/>
    </mask>`
    html += '<g mask="url(#screenmask)">'
    html += '<g class="screen">'
    while (line < lines) {
      const indent = randomBetween(currentIndent === 0 ? 0 : -1, currentIndent === 3 ? 0 : 1)
      currentIndent += indent
      html += this.drawLine(line, currentIndent, screenWidth)
      line++
    }
    html += `</g>`
    html += `</g>`
    html += `</g>`
    return html
  }

  /**
   * Dessine une ligne de code
   *
   * @param {int} line
   * @param {int} indent
   * @param {int} lineWidth
   * @return {string}
   */
  drawLine (line, indent, lineWidth) {
    const y = line * lineHeight
    const delay = line * lineDuration
    let html = ''
    let x = indent * 20
    html += `<mask id="line${line}">
    <rect x="0" y="${y}" width="${lineWidth}" height="10" fill="white" class="mask" style="transform-origin: ${x}px 0px; animation-delay: ${delay}s" rx="5"/>
    </mask>`
    while(x < lineWidth) {
      const width = randomBetween(20, 100)
      const color = width > 50 ? '#121C42' : '#5A63FF'
      if (width + x <= lineWidth) {
        html += `<rect width="${width}" height="10" x="${x}" y="${y}" fill="${color}" rx="5" mask="url(#line${line})"/>`
      }
      x += width + 4
    }
    return html
  }

  buildStyle (linesPerScreen) {
    const delay = (linesPerScreen - 1) * lineDuration
    return `<style>
      .mask  {
        animation: ${lineDuration}s moveRect both linear;
      }
      .screen {
        animation: moveScreen ${linesPerScreen * (screens - 1) * lineDuration}s ${delay}s both linear;
        transform-origin: 0 0;
      }
      @keyframes moveRect {
        0% { transform: scaleX(0) }
        100% { transform:scaleX(1) }
      }
      @keyframes moveScreen {
        0% { transform: translateY(0) }
        100% { transform:translateY(-${linesPerScreen * lineHeight * (screens - 1)}px) }
      }
    </style>`
  }
}

customElements.define('animated-editor', AnimatedEditor)
