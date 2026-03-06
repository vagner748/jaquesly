import { useFadeUp } from '../../hooks/useFadeUp.js'
import { GoldDivider } from '../Shared.jsx'
import styles from './ForWho.module.css'

const yes = [
    'Você acredita no poder da Lei da Atração e quer usá-la com mais precisão',
    'Você já tentou afirmações genéricas e sentiu que não funcionaram',
    'Você tem desejos claros e quer uma ferramenta que trabalhe com você todos os dias',
    'Você quer algo simples, rápido e poderoso que respeite o seu tempo',
]

const no = [
    'Você não acredita no poder do pensamento e da reprogramação mental',
    'Você quer resultados sem nenhum comprometimento com a sua própria transformação',
]

export default function ForWho() {
    const ref = useFadeUp()

    return (
        <section id="for-who" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Esse produto é para você?</h2>
                <GoldDivider />
                <div className={`fade-up ${styles.grid}`} ref={ref}>
                    <div className={styles.box}>
                        <h4 className={styles.boxTitle}>✦ É para você se:</h4>
                        <ul className={styles.list}>
                            {yes.map((item, i) => (
                                <li key={i} className={styles.item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${styles.box} ${styles.noBox}`}>
                        <h4 className={styles.boxTitle}>✗ Não é para você se:</h4>
                        <ul className={styles.list}>
                            {no.map((item, i) => (
                                <li key={i} className={`${styles.item} ${styles.itemNo}`}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
