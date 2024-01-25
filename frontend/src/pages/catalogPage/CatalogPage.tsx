import { CatalogOnMainPage, Page } from "../../components"
import kombikorm from '../../assets/kombikorm.jpeg';
import zerno from '../../assets/zerno.jpeg';
import vitamins from '../../assets/vitamins.png'

export const CatalogPage = () => {
    return (
        <Page>

            <CatalogOnMainPage
                cards={
                    [
                        {
                            title: 'Комбикорма',
                            href: '/catalog/kombikorm',
                            image: kombikorm
                        },
                        {
                            title: 'Зерно, крупы, бобы',
                            href: '/catalog/zerno',
                            image: zerno
                        },
                        {
                            title: 'Витамины и добавки',
                            href: '/catalog/vitamins',
                            image: vitamins
                        },
                        {
                            title: 'Витамины и добавки',
                            href: '/catalog/vitamins',
                            image: vitamins
                        },
                    ]
                }
            />
        </Page>
    )
}