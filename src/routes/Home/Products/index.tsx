import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import ProductCard from "../../../components/ProductCard";
import { productsByCategory } from "./products";
import ProductCategory from "../../../components/ProductCategory";
import { useState } from "react";
import { categories, type CategoryType } from "./categories";

import Woman from '../../../assets/categories/fem.png'
import Man from '../../../assets/categories/masc.png'
import Kid from '../../../assets/categories/kids.png'
import Pillow from '../../../assets/categories/house.png'
import Cosmetic from '../../../assets/categories/cosmetics.png'


const categoryToImgMap = new Map<string, string>([
  ['Moda Feminina', Woman],
  ['Moda Masculina', Man],
  ['Kids', Kid],
  ['Casa', Pillow],
  ['Cosméticos', Cosmetic]
]);

export default function Products() {

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(categories[0]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value as CategoryType);
  };

  return (
    <form className="products-section">
      <h3>Produtos</h3>
      <p>Explore por categoria</p>
      <div className="categories">
        {categories.map((category) => (
          <ProductCategory
            img={categoryToImgMap.get(category) || ''}
            key={category}
            label={category}
            checked={selectedCategory === category}
            onChange={handleCategoryChange}
          />
        ))}
      </div>
      <ProductCarousel selectedCategory={selectedCategory} />
    </form>
  )
}

function ProductCarousel({ selectedCategory }: { selectedCategory: string }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const currentCategoryData = productsByCategory.find(cat => cat.category === selectedCategory);
  const products = currentCategoryData ? currentCategoryData.products : [];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={`${index}-${product.title}`}>
            <ProductCard
              img={product.img}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}