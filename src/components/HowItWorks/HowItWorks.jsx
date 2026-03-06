import { useEffect, useRef } from 'react'
import { GoldDivider } from '../Shared.jsx'
import styles from './HowItWorks.module.css'

const steps = [
    { icon: '✍️', title: 'Digite o seu desejo', text: 'Prosperidade, amor, saúde, autoconfiança, paz. O que você quer agora.' },
    { icon: '✨', title: 'A IA cria sua afirmação', text: 'Em poucos segundos. Única, exclusiva, baseada na fórmula que une neurociência e espiritualidade para ativar a Lei da Atração no seu favor.' },
    { icon: '📖', title: 'Leia. Sinta.', text: 'Receba sua afirmação. Feita especialmente para o seu desejo. Nenhuma outra mulher recebe a mesma.' },
    { icon: '⭐', title: 'A Lei da Atração age', text: 'Use todos os dias. Deixe as palavras certas atravessarem. Deixe a Lei da Atração trabalhar por você.' },
]

function StepItem({ step, index }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(styles.stepVisible)
                    observer.disconnect()
                }
            },
            { threshold: 0.25 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={styles.step}
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            <div className={styles.iconWrapper}>
                <span className={styles.icon}>{step.icon}</span>
                {index < steps.length - 1 && <span className={styles.line} />}
            </div>
            <div className={styles.content}>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepText}>{step.text}</p>
            </div>
        </div>
    )
}

export default function HowItWorks() {
    return (
        <section id="how" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Como funciona</h2>
                <p className="section-sub">Mais simples do que você imagina.</p>
                <GoldDivider />
                <div className={styles.steps}>
                    {steps.map((s, i) => (
                        <StepItem key={i} step={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
