import { useEffect, useState } from 'react'
import { Container, Loader, Page } from '../../components'
import styles from './ProductPage.module.scss'
import { request } from '../../utils'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductPage = () => {
    const id = useParams().id;

    interface product {
        _id: string,
        title: string,
        description: string,
        image: string,
        tagRU: string,
        tagEN: string,
        weight: string,
        size: string
    }

    const [product, setProduct] = useState<product>();
    const navigate = useNavigate()

    useEffect(() => {
        request('/product/one', "POST", {id})
            .then((res) => res.json())
            .then((res) => {setProduct(res)})
            .catch((e) => {
                alert('Произошла ошибка')
                navigate('/')
            })
    }, [])

    return (
        <Page>
            {product ? (
                <Container>
                    <div className={styles.wrapper}>
                        <div className={styles.product}>
                            <div className={styles.imageWrapper}>
                                <img 
                                    className={styles.image}
                                    src={`${import.meta.env.VITE_SERVER_URL}/${product.image}`}
                                />
                            </div>
                            <div className={styles.about}>
                                <h2 className={`title ${styles.title}`}>
                                    {product.title}
                                </h2>
                                <p className={styles.description}>
                                    {product.description}
                                </p>

                                <ul className={styles.info}>
                                    <li className={styles.infoItem}>
                                        Вес: {product.weight}
                                    </li>
                                    <li className={styles.infoItem}>
                                        Размер: {product.size}
                                    </li>
                                    <li className={styles.infoItem}>
                                        Тип: {product.tagRU}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.order}>
                            <h2 className='title'>Как заказать?</h2>

                            <p>Для заказа позвоните по одному из номеров телефона: <a className={styles.number} href='tel:+375 (29) 244-91-32'>+375 (29) 244-91-32</a>, <a className={styles.number} href='tel:+375 (33) 304-86-72'>+375 (33) 304-86-72</a></p>
                        </div>
                    </div>
                </Container>
            ) 
            :
            (
                <Loader/>
            )
        }
        </Page>
    )
}