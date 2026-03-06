import { useEffect, useState } from 'react'
import styles from './StickyCtaBar.module.css'

const HOTMART_URL = 'https://go.hotmart.com/W104663342F'

export default function StickyCtaBar() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            // Aparece após rolar 80% da altura da janela (sair do Hero)
            setVisible(window.scrollY > window.innerHeight * 0.8)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className={`${styles.bar} ${visible ? styles.visible : ''}`} role="complementary">
            <p className={styles.text}>
                <span className={styles.highlight}>R$ 397,90/ano</span>
                {' '}— menos de R$ 1,09 por dia
            </p>
            <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
            >
                Gere sua afirmação agora
            </a>
        </div>
    )
}
