import { CatalogCard, Container } from '..'
import styles from './CatalogOnMainPage.module.scss'

interface card {
    title: string,
    href: string,
    image: string
}

interface props {
    cards: card[]
}


export const CatalogOnMainPage: React.FC<props> = ({cards}) => {
    return (
        <div className={styles.catalog}>
            <Container>
                <h2 className='title'>
                    Каталог
                </h2>

                <div className={styles.cards}>
                    {cards.map((card) => {
                        return (
                            <CatalogCard
                                key={Math.random()}
                                title={card.title}
                                image={card.image}
                                href={card.href}
                            />
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}