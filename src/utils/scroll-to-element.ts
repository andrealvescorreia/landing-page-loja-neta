export function scrollToElement(element: Element | null) {
  if (element) {
    const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0
    const rect = element.getBoundingClientRect()
    const elementTop = rect.top + window.scrollY
    const offset = navbarHeight + 20 // navbar height + extra padding

    window.scrollTo({
      top: elementTop - offset,
      behavior: 'smooth',
    })
  }
}
