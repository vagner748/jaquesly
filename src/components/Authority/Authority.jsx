import { useEffect, useRef, useState } from 'react'
import { GoldDivider } from '../Shared.jsx'
import styles from './Authority.module.css'

const stats = [
    { num: 10, suffix: '+', label: 'anos como mentora' },
    { num: 5000, suffix: '+', label: 'mulheres transformadas', display: '5mil+' },
    { num: 12, suffix: '+', label: 'anos na Hotmart' },
]

function AnimatedCounter({ num, suffix, display }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true
                const target = display ? null : num
                if (!target) { setCount(num); return }
                let start = 0
                const step = Math.ceil(num / 40)
                const timer = setInterval(() => {
                    start += step
                    if (start >= num) { setCount(num); clearInterval(timer) }
                    else setCount(start)
                }, 40)
            }
        }, { threshold: 0.5 })
        observer.observe(el)
        return () => observer.disconnect()
    }, [num, display])

    return (
        <span ref={ref} className={styles.num}>
            {display || `${count}${suffix}`}
        </span>
    )
}

export default function Authority() {
    return (
        <section id="authority" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Quem é Jaqueline Salles</h2>
                <GoldDivider />
                <div className={styles.stats}>
                    {stats.map((s, i) => (
                        <div key={i} className={styles.statBox}>
                            <AnimatedCounter {...s} />
                            <span className={styles.label}>{s.label}</span>
                        </div>
                    ))}
                </div>
                <p className={styles.bio}>
                    Fundadora do Instituto O Novo Pensamento. Uma fórmula validada que une neurociência e
                    espiritualidade. Uma tecnologia que coloca essa fórmula na palma da sua mão.
                </p>
                <a
                    href="https://go.hotmart.com/W104663342F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta"
                >
                    Quero minhas afirmações agora
                </a>
            </div>
        </section>
    )
}
