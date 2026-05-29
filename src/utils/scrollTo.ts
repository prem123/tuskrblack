export function scrollToSection(selector: string) {
  const el = document.querySelector(selector)
  if (!el) return
  const navHeight = 80 // navbar height offset
  const top = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset - navHeight
  window.scrollTo({ top, behavior: 'smooth' })
}
