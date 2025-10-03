import './style.css'
import Logo from '../../assets/Logo.svg'
import Hamburger from '../../assets/hamburger.svg'
import X from '../../assets/xmark.svg'
import { useEffect, useState } from 'react'
import { scrollToElement } from '../../utils/scroll-to-element'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const [heroElement, setHeroElement] = useState<Element | null>(null)
  const [productsElement, setProductsElement] = useState<Element | null>(null)
  const [aboutElement, setAboutElement] = useState<Element | null>(null)
  const [contactElement, setContactElement] = useState<Element | null>(null)

  useEffect(() => {
    setHeroElement(document.getElementsByClassName('hero')[0])
    setProductsElement(document.getElementsByClassName('products-section')[0])
    setAboutElement(document.getElementsByClassName('about-section')[0])
    setContactElement(document.getElementsByClassName('contact-section')[0])
  }, [])

  return (
    <span>
      <nav className="navbar">
        <button
          type="button"
          onClick={() => {
            setIsOpen(false)
            scrollToElement(heroElement)
          }}
        >
          <img
            src={Logo}
            alt="Logo da Loja Neta Variedades"
            width={130}
            height={45}
          />
        </button>
        <button
          type="button"
          className="menu-button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={isOpen ? X : Hamburger} alt="Ícone de menu" />
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false)
                scrollToElement(productsElement)
              }}
            >
              Produtos
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false)
                scrollToElement(aboutElement)
              }}
            >
              Sobre Nós
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false)
                scrollToElement(contactElement)
              }}
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className="overlay"
        aria-hidden="true"
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(false)
          }
        }}
        style={{ display: isOpen ? 'block' : 'none' }}
      />
    </span>
  )
}
