import './style.css'
import Malwee from '../../assets/brands/malwee.svg'
import Brandili from '../../assets/brands/brandili.png'
import SaoCristovao from '../../assets/brands/sao-cristovao.svg'
import Saga from '../../assets/brands/saga.png'
import Ditongo from '../../assets/brands/ditongo.png'
import Alenice from '../../assets/brands/alenice.png'
import BellaJanela from '../../assets/brands/bella-janela.png'
import PrettyPatty from '../../assets/brands/pretty-patty.png'
import Marands from '../../assets/brands/marands.png'

export default function LogoSlider() {
  const logos = [{
    src: Malwee,
    alt: "Logo Malwee"
  }, {
    src: Brandili,
    alt: "Logo Brandili"
  }, {
    src: SaoCristovao,
    alt: "Logo São Cristóvão"
  }, {
    src: Saga,
    alt: "Logo Saga"
  }, {
    src: Ditongo,
    alt: "Logo Ditongo"
  }, {
    src: Alenice,
    alt: "Logo Alenice"
  }, {
    src: BellaJanela,
    alt: "Logo Bella Janela"
  }, {
    src: PrettyPatty,
    alt: "Logo Pretty Patty"
  }, {
    src: Marands,
    alt: "Logo Marands"
  }]

  return (
    <div className="logos">
      <div className='logos-slide'>
        {logos.map((logo, index) => (
          <img key={`${index}-${logo.alt}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>
      <div className='logos-slide' aria-hidden="true">
        {/* Duplicate logos for the infinite scroll illusion */}
        {logos.map((logo, index) => (
          <img key={`${index}-${logo.alt}`} src={logo.src} alt={logo.alt} aria-hidden="true" />
        ))}
      </div>

    </div>
  )
}