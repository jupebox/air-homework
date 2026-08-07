import styles from "./Card.module.css";
import Image from "next/image";

export const Card = ({ href, title, titleStyle = 'always', thumbnail}: {href: string, title: string, titleStyle?: 'hover' | 'always', thumbnail: string | null}) => {
    return (
        <li className={styles.card}>
            {/* if I had time to make the other pages, this would be a <Link> */}
            {/* would need further direction on how assets and boards are organized and linked together to create dynamic pages with confidence */}
            <a className={`${styles.title} ${styles[titleStyle]}`} href={href}><span>{title}</span></a>
            {thumbnail ? <img alt="" className={styles.image} src={thumbnail} /> : ''}
        </li>
    );
}