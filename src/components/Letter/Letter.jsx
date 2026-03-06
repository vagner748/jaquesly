import { useFadeUp } from '../../hooks/useFadeUp.js'
import { GoldDivider } from '../Shared.jsx'
import styles from './Letter.module.css'

export default function Letter() {
    const ref = useFadeUp()

    return (
        <section id="letter" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Uma carta de Jaqueline</h2>
                <GoldDivider />
                <div className={`fade-up ${styles.content}`} ref={ref}>
                    <p>Sou Jaqueline Salles. Mentora e Especialista em Desenvolvimento Pessoal há mais de 10 anos.</p>
                    <p>Mas antes de ser mentora, eu fui a mulher que repetia afirmações na frente do espelho sentindo que estava me enganando.</p>
                    <p>Eu sabia que o pensamento tinha poder. Eu acreditava nisso. Mas as afirmações que eu encontrava não falavam com os meus desejos. Com a minha história. Com a minha espiritualidade.</p>
                    <p>Passei anos estudando neurociência e espiritualidade. Desenvolvendo uma fórmula que realmente funcionasse. Que chegasse no subconsciente de verdade. Testei com centenas de mulheres. Vi transformações que me emocionaram.</p>
                    <p>Já mentorei mais de 5 mil mulheres a chegarem nos seus objetivos.</p>
                    <p>E quando a inteligência artificial chegou, eu entendi: era a hora de colocar essa fórmula dentro de uma tecnologia que pudesse criar, para cada mulher, a afirmação exata que ela precisa. Em segundos. A partir do desejo dela.</p>
                    <p>Sendo 100% eficaz.</p>
                    <div className={styles.signature}>
                        Jaqueline Salles
                        <small>Fundadora do Instituto O Novo Pensamento</small>
                    </div>
                </div>
            </div>
        </section>
    )
}
