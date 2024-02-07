import { CatalogOnMainPage, Page } from "../../components"
import kombikorm from '../../assets/kombikorm.jpeg';
import zerno from '../../assets/zerno.jpeg';
import supplements from '../../assets/dobavki.jpg'
import amino from '../../assets/aminoak.jpg'

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
                            title: 'Добавки',
                            href: '/catalog/supplements',
                            image: supplements
                        },
                        {
                            title: 'Аминокислоты',
                            href: '/catalog/amino',
                            image: amino
                        },
                    ]
                }
            />
        </Page>
    )
}