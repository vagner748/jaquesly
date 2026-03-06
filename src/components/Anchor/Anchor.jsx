import { useFadeUp } from '../../hooks/useFadeUp.js'
import { GoldDivider, CtaButton } from '../Shared.jsx'
import styles from './Anchor.module.css'

const HOTMART_URL = 'https://go.hotmart.com/W104663342F'

const rows = [
    { label: 'Sessão com mentora de mindset', price: 'R$ 300 – R$ 800' },
    { label: 'Programa de desenvolvimento pessoal', price: 'R$ 1.500 – R$ 5.000' },
    { label: 'Afirmações genéricas de livros e YouTube', price: 'Não funcionam' },
]

export default function Anchor() {
    const ref = useFadeUp()

    return (
        <section id="anchor" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Menos de R$ 1,20 por dia</h2>
                <GoldDivider />
                <div className={`fade-up ${styles.comparison}`} ref={ref}>
                    {rows.map((r, i) => (
                        <div key={i} className={styles.row}>
                            <span className={styles.label}>{r.label}</span>
                            <span className={styles.price}>{r.price}</span>
                        </div>
                    ))}
                    <div className={`${styles.row} ${styles.highlight}`}>
                        <span className={styles.label}>Afirmações Positivas Personalizadas</span>
                        <span className={styles.price}>R$ 432 / ano</span>
                    </div>
                </div>
                <p className={styles.note}>Menos do que um café por dia. Com o poder de transformar a sua vida.</p>
                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                    <CtaButton href={HOTMART_URL}>Quero minhas afirmações agora</CtaButton>
                </div>
            </div>
        </section>
    )
}
