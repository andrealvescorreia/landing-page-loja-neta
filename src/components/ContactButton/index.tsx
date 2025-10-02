import type { ComponentProps } from 'react'
import './style.css'

interface ContactButtonProps {
  icon: string
  title: string
  description: string
}

type AnchorProps = ComponentProps<'a'>

export default function ContactButton({
  icon,
  title,
  description,
  ...props
}: AnchorProps & ContactButtonProps) {
  return (
    <div className="contact-button">
      <a {...props} target="_blank" rel="noreferrer">
        <img src={icon} alt={title} aria-hidden="true" />
      </a>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}
