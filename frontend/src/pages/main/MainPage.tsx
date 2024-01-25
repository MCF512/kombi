import React from 'react';
import { CatalogOnMainPage, Container, Page, Slider } from '../../components';
import pigs from '../../assets/pigs.jpeg';
import rabbits from '../../assets/rabbits.jpeg';
import kombikorm from '../../assets/kombikorm.jpeg';
import zerno from '../../assets/zerno.jpeg';
import wheat from '../../assets/wheat.svg';
import vitamins from '../../assets/vitamins.png'
import styles from './MainPage.module.scss'

export const MainPage: React.FC = () => {
    return (
        <Page>
            <Slider 
                slides={
                    [
                        {
                            title: 'комбикорм для хрюшек',
                            image: pigs
                        },
                        {
                            title: 'кобикорм для кроликов',
                            image: rabbits
                        },
                    ]
                }
            />

            <Container>
                <h2 className='title'>
                    О нас
                </h2>

                <div  id='about' className={styles.wrapper}>
                    <img className={styles.image} src={wheat}/>

                    <div className={styles.text}>
                        <p className={styles.textPart}>
                            Добрый день, представляем вашему вниманию разнообразный выбор товаров для ваших животных, начиная от разных соротов зерновых, заканчивая разными видами комбикормов.
                        </p>
                        <p className={styles.textPart}>
                            Сайт поможет вам ознакомиться с нашим каталогом товаров. Что бы приобрести себе нужный товар нужно позвонить по указанным номерам на сайте или отправить ваш заказ на Viber.
                        </p>
                        <p className={styles.textPart}>
                            Благодарим, что выбрали нас!
                        </p>
                    </div>
                </div>
            </Container>

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
    );
};
