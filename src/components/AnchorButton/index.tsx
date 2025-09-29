import './index.css'
import type { ComponentProps } from 'react'

type AnchorProps = ComponentProps<'a'>

export function AnchorButton({ className, ...props }: AnchorProps) {
  return (
    <a
      className='anchor-button'
      {...props}
    />
  )
}
