import { useFadeUp } from '../../hooks/useFadeUp.js'
import { GoldDivider } from '../Shared.jsx'
import styles from './Pain.module.css'

const voices = [
    '"Eu repito, repito, repito... e nada muda."',
    '"Será que afirmação funciona mesmo? Ou é só coisa da minha cabeça?"',
    '"Já tentei tantas coisas. Por que pra mim não funciona?"',
    '"Vejo outras mulheres avançando. E eu aqui, no mesmo lugar."',
]

export default function Pain() {
    const ref = useFadeUp()

    return (
        <section id="pain" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Eu sei o que passa na sua cabeça...</h2>
                <GoldDivider />
                <div className={`fade-up ${styles.voices}`} ref={ref}>
                    {voices.map((v, i) => (
                        <div key={i} className={styles.voiceCard}>{v}</div>
                    ))}
                </div>
                <p className={styles.conclusion}>
                    Você não está errada. Você não é fraca.<br />
                    <strong>Você só estava usando a chave errada para uma porta que só você tem.</strong>
                </p>
            </div>
        </section>
    )
}
