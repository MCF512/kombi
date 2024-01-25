import React from 'react';
import styles from './Container.module.scss'

interface containerProps {
    children: JSX.Element | JSX.Element[]
}

export const Container: React.FC<containerProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};