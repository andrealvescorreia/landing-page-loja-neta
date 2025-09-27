import './style.css'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export function SecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`secondary-button ${className}`}
      {...props}
    />
  )
}