import { AnchorButton } from './components/AnchorButton'
import VideoPlayer from './components/VideoPlayer'
import FamilyImage from './assets/family.png'
import Video from './assets/video/store-showcase.mp4'
import VideoPoster from './assets/video/poster.jpg'
import Whatsapp from './assets/Whatsapp.svg'
import Watch from './assets/Watch.svg'
import './App.css'
import LogoSlider from './components/LogoSlider'
import { SecondaryButton } from './components/SecondaryButton'

function App() {

  return (
    <div className='app'>
      <section className='hero'>
        <div>
          <h1 className='nunito-bold'>Variedade, Qualidade E Atendimento Que Você <span className='accent-text'>Merece.</span></h1>
          <p >De roupas à artigos para sua casa, aqui você encontra de <strong>tudo em um só lugar.</strong> Estamos no Centro de Água Branca – PB. Venha nos visitar ou fale conosco pelo WhatsApp!</p>
          <AnchorButton href="https://api.whatsapp.com/send?phone=558399462141&text=Ol%C3%A1%2C%20venho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20loja" target="_blank" rel="noreferrer">
            <img src={Whatsapp} alt="Ícone do Whatsapp" />
            Falar no Whatsapp
          </AnchorButton>
          <div className='opening-hours'>
            <span>
              <img src={Watch} alt="Ícone do Relógio" />
              <small>
                SEG à SEX: 8h–12h | 14h–18h
              </small>
            </span>
            <span>
              <img src={Watch} alt="Ícone do Relógio" />
              <small>
                SÁB: 8h–18h
              </small>
            </span>
          </div>
        </div>
        <img src={FamilyImage} alt="Imagem de uma família brasileira sentada em um sofá" />
      </section>
      <LogoSlider />

      <section className="store-overview">
        <VideoPlayer
          src={Video}
          poster={VideoPoster}
          className="vertical"
          width="100%"
          height="auto"
          muted={true}
          autoPlay={true}
          pauseOnOutOfView={true}
        />
        <div>
          <h2 className='nunito-bold'>Encontre o que precisa.</h2>
          <p>Roupas para todas as idades, moda íntima, cosméticos, artigos para casa, cama, mesa, banho, brinquedos e muito mais. </p>
          <SecondaryButton className='view-products-button'>Ver Produtos</SecondaryButton>
        </div>
      </section>

    </div>
  )
}

export default App
