import { Container, Loader, Page } from "../../components";
import styles from './ContactsPage.module.scss'

export const ContactsPage = () => {
    return (
        <Page>
            <Container>
                <h2 className="title">Контактная информация</h2>
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab165ab7ae9a85bc83101b3cc499d323ec11204965a4b8029bb3d45d33ac7dfad&amp;source=constructor" 
                    className={styles.map}
                    frameBorder="0"
                />

                <p className={styles.text}><b>Адрес:</b> улица Луначарского, 86к10, Речица, Гомельская область</p>
                <p className={styles.textPhone}><b>Телефоны:</b> +375 (29) 244-91-32 <br></br> +375 (33) 304-86-72</p>
            </Container>
        </Page>
    )
}