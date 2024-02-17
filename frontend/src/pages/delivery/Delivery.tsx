import { Container, Page } from "../../components";
import styles from './Delivery.module.scss'

export const DeliveryPage = () => {
    return (
        <Page>
            <Container>
                <h2 className="title">Условия доставки</h2>
                
                <p className={styles.text}>Доставка бесплатно -  в пределах г. Речица</p>
                <p className={styles.textSm}>Доставка в другие города обсуждается индивидуально по телефону</p>

                <h2 className="title">Оплата</h2>

                <p className={styles.text}>При доставке курьером оплата производится наличными денежными средствами</p>
                <p className={styles.textSm}>Пожалуйста, перед оплатой проверьте комплектность и качество товаров</p>
            </Container>
        </Page>
    )
}