import './style.css'
import { SecondaryButton } from '../../../components/SecondaryButton'
import VideoPlayer from '../../../components/VideoPlayer'
import Video from '../../../assets/video/store-showcase.mp4'
import VideoPoster from '../../../assets/video/poster.jpg'

export default function StoreOverview() {
  return (
    <section className="store-overview page-padding reveal-on-scroll">
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
        <h2>Encontre o que precisa.</h2>
        <p>
          Roupas para todas as idades, moda íntima, cosméticos, artigos para
          casa, cama, mesa, banho, brinquedos e muito mais.{' '}
        </p>
        <SecondaryButton>Ver Produtos</SecondaryButton>
      </div>
    </section>
  )
}
