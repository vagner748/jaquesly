import { useState } from 'react'
import { GoldDivider } from '../Shared.jsx'
import styles from './Faq.module.css'

const faqs = [
    {
        q: 'Como funciona na prática?',
        a: 'Você entra na plataforma, digita o seu desejo e a IA gera uma afirmação personalizada em segundos, baseada na fórmula que une neurociência e espiritualidade. Simples assim.',
    },
    {
        q: 'Preciso fazer algum curso ou assistir aulas?',
        a: 'Não. Você só digita o seu desejo e recebe sua afirmação. Sem aulas, sem encontros, sem compromisso de horário. Você usa quando quiser, como quiser.',
    },
    {
        q: 'Posso gerar afirmações diferentes todos os dias?',
        a: 'Sim. Você pode gerar quantas afirmações quiser, para os desejos que quiser, quantas vezes quiser. A IA cria uma afirmação única a cada vez.',
    },
    {
        q: 'As afirmações são realmente personalizadas?',
        a: 'Sim. A IA cria a afirmação a partir do seu desejo específico. Não são frases prontas de um banco de dados. São geradas na hora, para você.',
    },
    {
        q: 'E se eu não gostar?',
        a: 'Você tem 7 dias de garantia total. Se não gostar por qualquer motivo, devolvemos seu dinheiro integralmente. Sem perguntas, sem burocracia.',
    },
    {
        q: 'O que é essa fórmula de neurociência com espiritualidade?',
        a: 'É a fórmula desenvolvida por Jaqueline Salles ao longo de mais de 10 anos de estudo e prática com centenas de mulheres. Ela une o que a neurociência sabe sobre como o subconsciente funciona com o que a espiritualidade e a Lei da Atração sabem sobre como as palavras criam realidade.',
    },
    {
        q: 'Quanto custa?',
        a: 'R$ 397,90 por ano. Menos de R$ 1,09 por dia. Com garantia de 7 dias e acesso imediato.',
    },
]

export default function Faq() {
    const [open, setOpen] = useState(null)

    const toggle = (i) => setOpen(open === i ? null : i)

    return (
        <section id="faq" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Perguntas frequentes</h2>
                <GoldDivider />
                <div className={styles.list}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={styles.item}>
                            <button
                                className={`${styles.question} ${open === i ? styles.open : ''}`}
                                onClick={() => toggle(i)}
                                aria-expanded={open === i}
                            >
                                {faq.q}
                                <span className={styles.arrow}>▼</span>
                            </button>
                            <div
                                className={styles.answer}
                                style={{ maxHeight: open === i ? '300px' : '0' }}
                            >
                                <div className={styles.answerInner}>{faq.a}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaBlock}>
                    <p className={styles.ctaLabel}>Afirmações Positivas Personalizadas</p>
                    <p className={styles.ctaPrice}>R$ 397,90 / ano</p>
                    <a
                        href="https://pay.hotmart.com/W104663342F?off=em4hgv75"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta"
                    >
                        Quero minhas afirmações agora
                    </a>
                </div>
            </div>
        </section>
    )
}
