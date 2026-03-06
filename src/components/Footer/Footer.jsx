import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2025 Jaqueline Salles · Instituto O Novo Pensamento · Todos os direitos reservados</p>
            <p className={styles.link}>
                <a href="https://www.jaquelinesalles.com.br" target="_blank" rel="noopener noreferrer">
                    www.jaquelinesalles.com.br
                </a>
            </p>
        </footer>
    )
}
