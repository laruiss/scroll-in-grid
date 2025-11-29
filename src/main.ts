import 'virtual:uno.css'
import './style.css'

document.querySelector('.c-sidebar')?.addEventListener('click', () => {
  document.querySelector('.c-main-grid')?.classList.toggle('c-main-grid--wosidebar')
})