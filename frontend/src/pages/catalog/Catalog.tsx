import { useParams } from "react-router-dom"
import { CatalogCard, Container, Loader, Page } from "../../components"
import { useEffect, useState } from "react";
import { request } from "../../utils";
import styles from './Catalog.module.scss'

export const Catalog = () => {
    const tagEN = useParams().type;
    interface products {
        _id: string,
        title: string,
        description: string,
        image: string,
        tagRU: string,
        tagEN: string,
        weight: string,
        size: string
    }
    const [products, setProducts] = useState<products[]>([])

    useEffect(() => {
        request(`/products`, "POST", {tagEN})
            .then((res) => res.json())
            .then((res) => setProducts(res))
    }, [])

    return (
        <Page>
            <Container>
                {
                    products.length ? (
                        <div>
                            <h2 className="title">{products[0].tagRU}</h2>
                            <div className={styles.cardsWrapper}>
                                {products.map((prod) => {
                                    return <CatalogCard
                                        key={Math.random()}
                                        title={prod.title}
                                        image={`${import.meta.env.VITE_SERVER_URL}/${prod.image}`}
                                        href={`/product/${prod._id}`}
                                    />
                                })}
                            </div>
                        </div>
                    )
                    :
                    (<Loader/>)
                }
            </Container>
        </Page>
    )
}