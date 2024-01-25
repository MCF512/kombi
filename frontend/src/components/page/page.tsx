import React from 'react';
import { Footer, Header } from '..';
import styles from './Page.module.scss'

interface props {
    children: any
}

export const Page: React.FC<props> = ({children}) => {
    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};
