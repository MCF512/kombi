import { Link } from "react-router-dom"
import { Container, Page } from "../../components"
import styles from './404.module.scss'

export const Page404 = () => {
    return (
        <Page>
            <Container>
                <h2 className={styles.mainTitle}>404</h2>
                <h2 className={styles.title}>Страница не найдена</h2>
                <Link className={styles.link} to='/'>Вернуться на главную</Link>
            </Container>
        </Page>
    )
}