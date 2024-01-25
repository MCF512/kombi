import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>
            ИП Шейпак Юлия Эдуардовна
            </p>
            <p>
            УНП 491675690 Дата регистрации 01.08.2022г.
            </p>
        </footer>
    );
};