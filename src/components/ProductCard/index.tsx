import type { ComponentProps } from 'react';
import { SecondaryButton } from '../SecondaryButton';
import './style.css'
type DivProps = ComponentProps<'div'>

export interface ProductCardProps {
  img: string;
  title: string;
  description: string;
}

export default function ProductCard({ img, title, description, ...divProps }: ProductCardProps & DivProps) {
  return (
    <div className="product-card" {...divProps}>
      <img src={img} alt="Product" />
      <p>{title}</p>
      <small>{description}</small>
      <SecondaryButton>Eu quero</SecondaryButton>
    </div>
  )
}