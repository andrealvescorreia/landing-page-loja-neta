import { useEffect } from 'react'
import LogoSlider from '../../components/LogoSlider'
import About from './About'
import GiftSection from './GIft'
import HeroSection from './Hero'
import StoreOverview from './Overview'
import Products from './Products'

export default function Home() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
    })
  })

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.reveal-on-scroll')
    hiddenElements.forEach((el) => {
      el.classList.add('hidden')
      observer.observe(el)
    })
  }, [observer])

  return (
    <div>
      <HeroSection />
      <LogoSlider />
      <StoreOverview />
      <GiftSection />
      <Products />
      <About />
    </div>
  )
}
