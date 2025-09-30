import type { ComponentProps } from 'react'
import { useState, useId, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { SecondaryButton } from '../SecondaryButton'
import './style.css'
type DivProps = ComponentProps<'div'>

export interface ProductCardProps {
  img: string
  title: string
  description: string
}

export default function ProductCard({
  img,
  title,
  description,
  ...divProps
}: ProductCardProps & DivProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const modalTitleId = useId()

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isImageExpanded) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isImageExpanded])

  const handleImageClick = () => {
    setIsImageExpanded(true)
  }

  const handleCloseModal = () => {
    setIsImageExpanded(false)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsImageExpanded(false)
    }
  }

  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsImageExpanded(false)
    }
  }

  return (
    <>
      <div className="product-card" {...divProps}>
        <button
          type="button"
          className="product-image-container"
          onClick={handleImageClick}
          aria-label={`Expandir imagem de ${title}`}
        >
          <img src={img} loading="lazy" alt={title} className="product-image" />
        </button>
        <p>{title}</p>
        <small>{description}</small>
        <SecondaryButton>Eu quero</SecondaryButton>
      </div>

      {isImageExpanded &&
        createPortal(
          <div
            className="image-modal-overlay"
            onClick={handleOverlayClick}
            onKeyDown={handleOverlayKeyDown}
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            tabIndex={-1}
          >
            <div className="image-modal">
              <button
                type="button"
                className="close-button"
                onClick={handleCloseModal}
                aria-label="Fechar imagem expandida"
              >
                ×
              </button>
              <img src={img} alt={title} className="expanded-image" />
              <div className="image-info">
                <h3 id={modalTitleId}>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
