import { useEffect, useState } from 'react'
import styles from './ExitIntent.module.css'

const HOTMART_URL = 'https://pay.hotmart.com/W104663342F?off=em4hgv75'
const SESSION_KEY = 'jaque_exit_shown'

export default function ExitIntent() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        // Mostrar somente uma vez por sessão
        if (sessionStorage.getItem(SESSION_KEY)) return

        const handleMouseLeave = (e) => {
            if (e.clientY <= 0) {
                setOpen(true)
                sessionStorage.setItem(SESSION_KEY, '1')
            }
        }

        // Aguardar 5s antes de ativar o exit intent
        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave)
        }, 5000)

        return () => {
            clearTimeout(timer)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    if (!open) return null

    return (
        <div className={styles.overlay} onClick={() => setOpen(false)} role="dialog" aria-modal="true">
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.close} onClick={() => setOpen(false)} aria-label="Fechar">✕</button>

                <span className={styles.star}>✦</span>
                <h2 className={styles.title}>Espera! Não vá ainda...</h2>
                <p className={styles.sub}>
                    Antes de sair, que tal experimentar o poder de uma afirmação personalizada?
                </p>
                <div className={styles.offer}>
                    <p className={styles.offerBadge}>🎁 Oferta exclusiva para você</p>
                    <p className={styles.offerPrice}>
                        Plano Anual por <strong>R$ 397,90</strong>
                    </p>
                    <p className={styles.offerDaily}>menos de R$ 1,09 por dia · Garantia de 7 dias</p>
                </div>
                <a
                    href={HOTMART_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btn}
                    onClick={() => setOpen(false)}
                >
                    Quero minha afirmação agora
                </a>
                <button className={styles.dismiss} onClick={() => setOpen(false)}>
                    Não, prefiro continuar sem transformação
                </button>
            </div>
        </div>
    )
}
