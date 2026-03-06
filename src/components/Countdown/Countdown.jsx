import { useEffect, useState } from 'react'
import styles from './Countdown.module.css'

// Reinicia o timer a cada 24h do localStorage para parecer real
function getEndTime() {
    const stored = localStorage.getItem('jaque_offer_end')
    if (stored && Number(stored) > Date.now()) return Number(stored)
    const end = Date.now() + 24 * 60 * 60 * 1000 // 24 horas
    localStorage.setItem('jaque_offer_end', end)
    return end
}

function pad(n) {
    return String(n).padStart(2, '0')
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 })

    useEffect(() => {
        const endTime = getEndTime()

        const tick = () => {
            const diff = Math.max(0, endTime - Date.now())
            const h = Math.floor(diff / 3600000)
            const m = Math.floor((diff % 3600000) / 60000)
            const s = Math.floor((diff % 60000) / 1000)
            setTimeLeft({ h, m, s })
        }

        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>⚡ Oferta especial termina em:</p>
            <div className={styles.timer}>
                <div className={styles.unit}>
                    <span className={styles.digit}>{pad(timeLeft.h)}</span>
                    <span className={styles.unitLabel}>horas</span>
                </div>
                <span className={styles.sep}>:</span>
                <div className={styles.unit}>
                    <span className={styles.digit}>{pad(timeLeft.m)}</span>
                    <span className={styles.unitLabel}>min</span>
                </div>
                <span className={styles.sep}>:</span>
                <div className={styles.unit}>
                    <span className={styles.digit}>{pad(timeLeft.s)}</span>
                    <span className={styles.unitLabel}>seg</span>
                </div>
            </div>
        </div>
    )
}
