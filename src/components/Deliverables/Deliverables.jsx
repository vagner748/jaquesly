import { useFadeUp } from '../../hooks/useFadeUp.js'
import { GoldDivider } from '../Shared.jsx'
import styles from './Deliverables.module.css'

const items = [
    'Acesso à plataforma de Afirmações Positivas Personalizadas',
    'IA treinada com a fórmula que une neurociência, espiritualidade e Lei da Atração',
    'Afirmações geradas em poucos segundos a partir do seu desejo',
    'Afirmações únicas e exclusivas para você — sempre que quiser, quantas vezes quiser',
    'Acesso 24 horas por dia, 7 dias por semana, direto no seu celular',
    'Novas afirmações sempre que seu desejo mudar',
]

export default function Deliverables() {
    const ref = useFadeUp()

    return (
        <section id="deliverables" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">O que você recebe</h2>
                <GoldDivider />
                <ul className={`fade-up ${styles.list}`} ref={ref}>
                    {items.map((item, i) => (
                        <li key={i} className={styles.item} style={{ transitionDelay: `${i * 0.08}s` }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
