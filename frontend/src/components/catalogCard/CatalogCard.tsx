import { Link } from 'react-router-dom';
import styles from './CatalogCard.module.scss';

interface card {
    title: string,
    href: string,
    image: string
}

export const CatalogCard: React.FC<card> = ({title, image, href}) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={image}/>

            <Link className={styles.link} to={href}>{title}</Link>
        </div>
    )
}