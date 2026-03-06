import styles from './Hero.module.css'
import { StarIcon, GoldDivider, CtaButton } from '../Shared.jsx'

const HOTMART_URL = 'https://pay.hotmart.com/W104663342F?off=em4hgv75'

const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 5}s`,
    size: `${2 + Math.random() * 3}px`,
}))

export default function Hero() {
    return (
        <section id="hero" className={`sparkle-bg ${styles.hero}`}>
            {/* Floating particles */}
            <div className={styles.particles} aria-hidden="true">
                {particles.map(p => (
                    <span
                        key={p.id}
                        className={styles.particle}
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                            width: p.size,
                            height: p.size,
                        }}
                    />
                ))}
            </div>

            <div className={styles.content}>
                <StarIcon size={72} />

                <p className={styles.eyebrow}>Jaqueline Salles · Instituto Novo Pensamento</p>

                <p className={styles.overline}>Personalizado para todos os seus momentos.</p>

                <h1 className={styles.headline}>
                    A IA que transforma sua vida com{' '}
                    <em>afirmações poderosas em segundos.</em>
                </h1>

                <GoldDivider />

                <p className={styles.subtitle}>
                    Junte o poder do Universo com a tecnologia e esteja sempre leve, tranquila e abundante.
                </p>

                <p className={styles.tagline}>
                    Digite o que você quer. A IA cria. A Lei da Atração age.
                </p>

                <CtaButton href={HOTMART_URL}>Gere sua afirmação agora</CtaButton>

                <p className={styles.cancelNote}>Cancele a qualquer momento.</p>
            </div>
        </section>
    )
}
