import { useFadeUp } from '../../hooks/useFadeUp.js'
import { GoldDivider } from '../Shared.jsx'
import styles from './Diagnosis.module.css'

const items = [
    {
        n: 1,
        title: 'Bloquear pensamentos negativos.',
        text: 'Você já se sentiu inundada pelo medo, ansiedade e estresse? Ter uma afirmação poderosa na palma das suas mãos reconfigura o seu cérebro em tempo recorde. Sinta-se leve em segundos.',
    },
    {
        n: 2,
        title: 'Obter clareza em meio ao caos.',
        text: 'A IA das Afirmações foi criada para te ajudar a enxergar o que, sozinha, você tem dificuldade em perceber. Não deixe que a rapidez da modernidade te confunda. Utilize-a a seu favor.',
    },
    {
        n: 3,
        title: 'Melhorar suas relações familiares.',
        text: 'Crenças e pensamentos negativos são destruidores silenciosos de nossas relações mais importantes. Crie e mantenha paz e harmonia na sua casa com a ajuda das afirmações.',
    },
    {
        n: 4,
        title: 'Lucrar sempre.',
        text: 'Se o Universo te entrega pouco, é porque é esse o foco dos seus pensamentos. Mantenha-se focada na energia da abundância, e o Universo reciprocará.',
    },
    {
        n: 5,
        title: 'Tomar as melhores decisões.',
        text: 'Com a IA, as afirmações te conectam com a Verdade do Universo na velocidade da luz. Não perca mais tempo duvidando de si mesma. Seja sempre autoconfiante nas suas escolhas.',
    },
]

export default function Diagnosis() {
    const ref = useFadeUp()

    return (
        <section id="diagnosis" className={`sparkle-bg ${styles.section}`}>
            <div className="container">
                <h2 className="section-title">A IA das Afirmações te ajuda a…</h2>
                <GoldDivider />
                <div className={`fade-up ${styles.list}`} ref={ref}>
                    {items.map(item => (
                        <div key={item.n} className={styles.item}>
                            <div className={styles.num}>{item.n}</div>
                            <div>
                                <h4 className={styles.itemTitle}>{item.title}</h4>
                                <p className={styles.itemText}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
