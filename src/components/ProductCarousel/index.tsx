import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
import Slider from 'react-slick'
import type { ProductCardProps } from '../ProductCard'
import ProductCard from '../ProductCard'
import { useState, useEffect, useRef } from 'react'
import { scrollToElement } from '../../utils/scroll-to-element'

export default function ProductCarousel({
  products,
}: {
  products: ProductCardProps[]
}) {
  const [contactElement, setContactElement] = useState<Element | null>(null)
  const sliderRef = useRef<Slider>(null)

  useEffect(() => {
    setContactElement(document.getElementsByClassName('contact-section')[0])
  }, [])

  // Reset slider to first slide when products change (category change)
  useEffect(() => {
    if (sliderRef.current && products.length > 0) {
      sliderRef.current.slickGoTo(0)
    }
  }, [products.length])

  const getSlidesToShow = () => {
    const windowWidth = window.innerWidth
    if (windowWidth <= 360) return 1
    if (windowWidth <= 980) return 2
    if (windowWidth <= 1300) return 3
    return 4
  }

  const slidesToShow = getSlidesToShow()

  const settings = {
    lazyload: 'ondemand' as const,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow >= 3 ? slidesToShow : 1,
    initialSlide: 0,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 3800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={`${index}-${product.title}`}>
            <ProductCard
              img={product.img}
              title={product.title}
              description={product.description}
              onClickAction={() => {
                scrollToElement(contactElement)
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
