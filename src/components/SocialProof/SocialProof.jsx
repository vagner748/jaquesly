import { useFadeUp } from '../../hooks/useFadeUp.js'
import { GoldDivider } from '../Shared.jsx'
import styles from './SocialProof.module.css'

const testimonials = [
    {
        text: '"Coloquei meu desejo de atrair prosperidade e a afirmação que saiu me arrepiou. Era exatamente o que eu precisava ouvir."',
        author: 'Ana Paula, 47 anos',
    },
    {
        text: '"Tentei de tudo. Nada tocava de verdade. Aqui, em segundos, recebi uma afirmação que parecia feita para a minha alma."',
        author: 'Carla, 52 anos',
    },
    {
        text: '"Uso todos os dias. Coloco meu desejo do dia e a afirmação que recebo me prepara para qualquer coisa."',
        author: 'Renata, 44 anos',
    },
    {
        text: '"Minha filha perguntou o que aconteceu comigo. Disse que eu estava diferente. Mais leve. Mais segura."',
        author: 'Márcia, 58 anos',
    },
]

export default function SocialProof() {
    const ref = useFadeUp()

    return (
        <section id="social-proof" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">O que elas estão sentindo</h2>
                <GoldDivider />
                <div className={`fade-up ${styles.grid}`} ref={ref}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
                            <p className={styles.text}>{t.text}</p>
                            <p className={styles.author}>— {t.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
