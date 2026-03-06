import { useFadeUp } from '../../hooks/useFadeUp.js'
import { CtaButton } from '../Shared.jsx'
import Countdown from '../Countdown/Countdown.jsx'
import styles from './PriceBox.module.css'

const HOTMART_URL = 'https://go.hotmart.com/W104663342F'

// Lista unificada de features — mesma em todos os planos
const ALL_FEATURES = [
    { bold: 'Acesso completo', text: 'Afirmações 24 horas por dia' },
    { bold: 'Comunidade exclusiva', text: 'dos acervos de Lei da Atração' },
    { bold: '21 áudios', text: 'de desbloqueio de prosperidade' },
    {
        bold: 'Mulher de 100 mil',
        text: 'Treinamento para você juntar 100 mil reais em 1 ano com a Lei da Atração.',
    },
    {
        bold: '11 pensamentos milionários',
        text: '11 frases que ativam recebimento de grandes quantias de dinheiro.',
    },
]

const plans = [
    {
        id: 'mensal',
        badge: null,
        name: 'Mensal',
        original: null,
        price: 'R$ 49,90',
        period: 'por mês',
        daily: null,
        included: [0],
        cta: 'Começar agora',
        gold: false,
        highlight: false,
    },
    {
        id: 'anual',
        badge: '🔥 Mais popular',
        name: 'Anual',
        original: 'De R$ 720,00',
        price: 'R$ 397,90',
        period: 'por ano',
        daily: 'menos de R$ 1,09 / dia',
        included: [0, 1, 2, 3, 4],
        cta: 'Quero o anual agora',
        gold: true,
        highlight: true,
    },
    {
        id: 'trimestral',
        badge: null,
        name: 'Trimestral',
        original: null,
        price: 'R$ 119,70',
        period: 'a cada 3 meses',
        daily: 'R$ 1,33 / dia',
        included: [0, 1, 2],
        cta: 'Quero o trimestral',
        gold: false,
        highlight: false,
    },
]

export default function PriceBox() {
    const ref = useFadeUp()

    return (
        <section id="price" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Escolha seu plano</h2>
                <p className="section-sub">Garantia de 7 dias. Cancele a qualquer momento.</p>
                <Countdown />
                <div className={`fade-up ${styles.grid}`} ref={ref}>
                    {plans.map(plan => (
                        <div
                            key={plan.id}
                            className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ''}`}
                        >
                            {plan.badge && <span className={styles.badge}>{plan.badge}</span>}

                            <p className={styles.planName}>{plan.name}</p>

                            {plan.original && <p className={styles.original}>{plan.original}</p>}

                            <p className={styles.price}>{plan.price}</p>
                            <p className={styles.period}>{plan.period}</p>

                            {plan.daily && <p className={styles.daily}>{plan.daily}</p>}

                            <ul className={styles.features}>
                                {ALL_FEATURES.map((f, i) => {
                                    const active = plan.included.includes(i)
                                    return (
                                        <li
                                            key={i}
                                            className={`${styles.feature} ${!active ? styles.featureDisabled : ''}`}
                                        >
                                            <span className={styles.check}>{active ? '✦' : '✕'}</span>
                                            <span>
                                                <strong>{f.bold}</strong>
                                                {f.text ? ` — ${f.text}` : ''}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>

                            <CtaButton href={HOTMART_URL} gold={plan.gold}>
                                {plan.cta}
                            </CtaButton>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
