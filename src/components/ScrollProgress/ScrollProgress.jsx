import { useEffect, useState } from 'react'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const update = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            const total = scrollHeight - clientHeight
            setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
        }
        window.addEventListener('scroll', update, { passive: true })
        return () => window.removeEventListener('scroll', update)
    }, [])

    return (
        <div className={styles.track} aria-hidden="true">
            <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>
    )
}
