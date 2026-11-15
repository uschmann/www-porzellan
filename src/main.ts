import './style.css'

const year = document.querySelector<HTMLSpanElement>('#year')
if (year) year.textContent = String(new Date().getFullYear())

// Glanz über die Silhouetten: läuft bei Maus-Hover oder Fingertipp einmal durch
const silhouetten = document.querySelector<SVGSVGElement>('#silhouetten')
if (silhouetten) {
  silhouetten.addEventListener('pointerenter', () => silhouetten.classList.add('is-glaenzend'))
  silhouetten.addEventListener('animationend', () => silhouetten.classList.remove('is-glaenzend'))
}
