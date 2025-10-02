import './style.css'
import Photo from '../../../assets/about-us-photo.png'

export default function About() {
  return (
    <section className="about-section">
      <div className="bg-image" aria-hidden="true"></div>
      <div className="about-content page-padding reveal-on-scroll">
        <div>
          <h3>Sobre Nós</h3>
          <p>
            Há <strong>mais de 17 anos </strong> em Água Branca – Paraíba, a
            Neta Variedades, administrada por <strong>Neta e família</strong>,
            oferece um ambiente de compras acolhedor, com bom atendimento, ampla
            variedade de produtos, qualidade garantida e preços que cabem no seu
            bolso.
          </p>
        </div>
        <img src={Photo} alt="Foto dos membros da loja Neta Variedades." />
      </div>
    </section>
  )
}
