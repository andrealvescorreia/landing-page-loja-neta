import './style.css'
import Logo from '../../assets/logo.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={Logo} alt="Logo Neta Variedades" />
      </div>
      <small className="info">
        © Neta Variedades. Todos os direitos reservados. <br />
        Rua Nino Florêncio, 20 <br /> Água Branca - Paraíba <br /> CEP:
        58748-000
      </small>
      <div className="social-links">
        <a
          href="https://www.instagram.com/neta_variedades"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Ícone do Instagram" />
        </a>
        <a
          href="https://www.facebook.com/neta.variedades.gracinete/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Facebook} alt="Ícone do Facebook" />
        </a>
      </div>
      <small className="developer-credit">
        Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/andrealvescorreia/"
          target="_blank"
          rel="noreferrer"
        >
          @andrealvescorreia
        </a>
      </small>
    </footer>
  )
}
