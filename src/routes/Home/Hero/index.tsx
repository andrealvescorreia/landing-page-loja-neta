import { AnchorButton } from '../../../components/AnchorButton'
import FamilyImage from '../../../assets/family.png'
import Whatsapp from '../../../assets/Whatsapp.svg'
import Watch from '../../../assets/Watch.svg'
import './style.css'
import OpeningHours from '../../../components/OpeningHours'

export default function HeroSection() {
  return (
    <section className="hero page-padding reveal-on-scroll">
      <div>
        <h1>
          Variedade, Qualidade E Atendimento Que Você{' '}
          <span className="accent-text">Merece.</span>
        </h1>
        <p>
          De roupas à artigos para sua casa, aqui você encontra de{' '}
          <strong>tudo em um só lugar.</strong> Estamos no Centro de Água Branca
          – PB. Venha nos visitar ou fale conosco pelo WhatsApp!
        </p>
        <AnchorButton
          href="https://api.whatsapp.com/send?phone=558399462141&text=Ol%C3%A1%2C%20venho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20loja"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Whatsapp} alt="Ícone do Whatsapp" />
          Falar no Whatsapp
        </AnchorButton>
        <OpeningHours />
      </div>
      <img
        src={FamilyImage}
        alt="Imagem de uma família brasileira sentada em um sofá"
        className="family-img"
        width={400}
        height={400}
      />
    </section>
  )
}
