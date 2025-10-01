import LogoSlider from '../../components/LogoSlider'
import About from './About'
import GiftSection from './GIft'
import HeroSection from './Hero'
import StoreOverview from './Overview'
import Products from './Products'

export default function Home() {
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
