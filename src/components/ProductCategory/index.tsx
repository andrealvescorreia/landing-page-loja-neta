import type { ComponentProps } from "react";
import "./style.css"

type InputProps = ComponentProps<'input'>


export interface ProductCategoryProps {
  label: string;
  img: string;
}

export default function ProductCategory({ label, img, ...inputProps }: ProductCategoryProps & InputProps) {
  return (
    <div className="product-category">
      <input type="radio" id={label} name="category" value={label} {...inputProps} />
      <label htmlFor={label}>{label}</label>
      <img src={img} aria-hidden="true" alt={label} />
    </div>
  )
}