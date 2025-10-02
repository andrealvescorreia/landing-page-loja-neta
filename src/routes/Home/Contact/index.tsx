import './style.css'
import OpeningHours from '../../../components/OpeningHours'
import ContactButton from '../../../components/ContactButton'
import WhatsappColored from '../../../assets/whatsapp-colored.svg'
import InstagramColored from '../../../assets/instagram-colored.svg'

export default function Contact() {
  return (
    <section className="contact-section page-padding reveal-on-scroll">
      <h3>Gostou de algo ou não encontrou o que procurava?</h3>
      <p>Entre em contato conosco e confirme a disponibilidade de produtos.</p>
      <OpeningHours />
      <div className="contact-buttons">
        <ContactButton
          icon={WhatsappColored}
          title="Whatsapp"
          description="(83) 9 9946-2141"
          href="https://api.whatsapp.com/send?phone=558399462141&text=Ol%C3%A1%2C%20venho%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20loja"
        />
        <ContactButton
          icon={InstagramColored}
          title="Instagram"
          description="@neta_variedades"
          href="https://ig.me/m/neta_variedades"
        />
      </div>
    </section>
  )
}
