import './index.css'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'a'>

export function AnchorButton({ className, ...props }: ButtonProps) {
  return (
    <a
      className='custom-button'
      {...props}
    />
  )
}
