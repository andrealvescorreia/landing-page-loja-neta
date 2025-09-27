import './style.css'
import Logo from '../../assets/Logo.svg'
import Hamburger from '../../assets/hamburger.svg'
import X from '../../assets/xmark.svg'
import { useState } from 'react'


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <span>

      <nav className="navbar">
        <a href="#home"><img src={Logo} alt="Logo da Loja Neta Variedades" width={130} height={45} /></a>
        <button type='button' className="menu-button" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? X : Hamburger} alt="Ícone de menu" />
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#products">Produtos</a></li>
          <li><a href="#products">Sobre Nós</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

      </nav>
      <button
        type="button"
        className="overlay"
        aria-hidden="true"
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(false);
          }
        }}
        style={{ display: isOpen ? 'block' : 'none' }}
      />
    </span>
  )
}