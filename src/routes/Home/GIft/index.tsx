import './style.css'
import Gift from '../../../assets/gift.png'

export default function GiftSection() {
  return (
    <section className="gift-section page-padding reveal-on-scroll">
      <div className="gift-content">
        <div>
          <h2>Presenteie alguém especial.</h2>
          <p>
            Nós fazemos embrulhos de presente para qualquer compra na loja e
            também criamos kits personalizados a seu pedido.{' '}
            <strong> Tudo por conta da casa</strong>.
          </p>
        </div>
        <img
          src={Gift}
          alt="Imagem de um jogo de toalhas em uma embalagem de presente customizada da loja Neta Variedades."
          width={400}
          height={400}
        />
      </div>
    </section>
  )
}
