import { StarIcon, CtaButton } from '../Shared.jsx'
import styles from './FinalCta.module.css'

const HOTMART_URL = 'https://pay.hotmart.com/W104663342F?off=em4hgv75'

export default function FinalCta() {
    return (
        <section id="final-cta" className={`sparkle-bg ${styles.section}`}>
            <StarIcon size={72} />
            <h2 className={styles.headline}>
                Digite o seu desejo.<br />A Lei da Atração age.
            </h2>
            <p className={styles.sub}>
                A vida que você espera há tantos anos está a um desejo de distância.
            </p>
            <CtaButton href={HOTMART_URL} gold>Gere suas afirmações agora</CtaButton>
        </section>
    )
}
