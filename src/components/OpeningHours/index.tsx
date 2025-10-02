import Watch from '../../assets/watch.svg'
import './style.css'

export default function OpeningHours() {
  return (
    <div className="opening-hours">
      <span>
        <img src={Watch} alt="Ícone do Relógio" aria-hidden="true" />
        <small>SEG à SEX: 8h–12h | 14h–18h</small>
      </span>
      <span>
        <img src={Watch} alt="Ícone do Relógio" aria-hidden="true" />
        <small>SÁB: 8h–18h</small>
      </span>
    </div>
  )
}
