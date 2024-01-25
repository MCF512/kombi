import { Container, Page } from "../../components";
import styles from './Delivery.module.scss'

export const DeliveryPage = () => {
    return (
        <Page>
            <Container>
                <h2 className="title">Условия доставки</h2>
                
                <p className={styles.text}>Доставка бесплатно -  в пределах г. Речица</p>
                <p className={styles.text}>Доставка в другие города обсуждается индивидуально по телефону</p>
            </Container>
        </Page>
    )
}