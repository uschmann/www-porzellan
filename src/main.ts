import './style.css'

const year = document.querySelector<HTMLSpanElement>('#year')
if (year) year.textContent = String(new Date().getFullYear())

// Glanz über die Silhouetten: läuft bei Maus-Hover oder Fingertipp einmal durch
const silhouetten = document.querySelector<SVGSVGElement>('#silhouetten')
if (silhouetten) {
  const glaenzen = () => silhouetten.classList.add('is-glaenzend')

  silhouetten.addEventListener('pointerenter', glaenzen)
  silhouetten.addEventListener('animationend', (event) => {
    // Die Einblend-Animationen der Silhouetten blubbern hier ebenfalls hoch
    if (event.animationName === 'sil-glanz') silhouetten.classList.remove('is-glaenzend')
  })

  // Einmal glänzen, sobald die Silhouetten beim Seitenstart eingeblendet sind
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setTimeout(glaenzen, 2600)
  }
}
