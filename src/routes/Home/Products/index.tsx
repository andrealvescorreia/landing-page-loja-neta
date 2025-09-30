import './style.css'
import { productsByCategory } from './products'
import ProductCategory from '../../../components/ProductCategory'
import { useState } from 'react'
import { categories, type CategoryType } from './categories'

import Woman from '../../../assets/categories/fem.png'
import Man from '../../../assets/categories/masc.png'
import Kid from '../../../assets/categories/kids.png'
import Pillow from '../../../assets/categories/house.png'
import Cosmetic from '../../../assets/categories/cosmetics.png'
import ProductCarousel from '../../../components/ProductCarousel'

const categoryToImgMap = new Map<string, string>([
  ['Moda Feminina', Woman],
  ['Moda Masculina', Man],
  ['Kids', Kid],
  ['Casa', Pillow],
  ['Cosméticos', Cosmetic],
])

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    categories[0]
  )

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value as CategoryType)
  }

  const currentCategoryData = productsByCategory.find(
    (cat) => cat.category === selectedCategory
  )
  const products = currentCategoryData ? currentCategoryData.products : []

  return (
    <section className="products-section page-padding">
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
      <ProductCarousel products={products} />
    </section>
  )
}
