import React, { useState } from 'react';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import { Container } from '..';
import { useMediaQuery } from 'react-responsive';
import phone from '../../assets/phone.svg'

export const Header: React.FC = () => {
    const isSmall = useMediaQuery({query: '(max-width: 1100px)'})
    const [isMenuVisible, setMenuVisible] = useState(false)
    
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.flex}>
                    <button 
                        className={styles.burger}
                        onClick={() => setMenuVisible(!isMenuVisible)}
                    >   
                        <span></span>
                    </button>
                    <nav 
                        className={isSmall ? isMenuVisible ?  styles.menuMobile : styles.menuMobileHidden :  styles.menu}
                    >
                        <Link
                            className={styles.link}
                            to='/'
                        >
                            Главная
                        </Link>
                        <a
                            className={styles.link}
                            href='/#about'
                        >
                            О нас
                        </a>
                        <Link
                            className={styles.link}
                            to='/catalog'
                        >
                            Каталог продукции
                        </Link>
                        <Link
                            className={styles.link}
                            to='/delivery'
                        >
                            Условия доставки
                        </Link>
                        <Link
                            className={styles.link}
                            to='/contacts'
                        >
                            Контакты
                        </Link>
                    </nav>

                    <div className={styles.numbers}>
                        <div className={styles.flex}>
                            <img className={styles.phoneIcon} src={phone} alt="" />
                            <a 
                            className={styles.number}
                            href='tel:+375 (29) 244-91-32'>
                                +375 (29) 244-91-32
                            </a>
                        </div>
                        <div className={styles.flex}>
                            <img className={styles.phoneIcon} src={phone} alt="" />
                            <a 
                            className={styles.number}
                            href='tel:+375 (33) 304-86-72'>
                                +375 (33) 304-86-72
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};
