import LogoSlider from '../../components/LogoSlider'
import HeroSection from './Hero'
import StoreOverview from './Overview'
import Products from './Products'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoSlider />
      <StoreOverview />
      <Products />
    </div>
  )
}
