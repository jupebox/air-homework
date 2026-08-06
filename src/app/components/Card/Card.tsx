import { useMemo } from "react";
import styles from "./Card.module.css";
import Image from "next/image";

export const Card = ({ href, title, thumbnail, isSquare, height, width}: {href: string, title: string, thumbnail: string | null, isSquare: boolean, height?: number, width?: number}) => {
    const cardStyle = useMemo(() => {
    if (!height || !width) {
        return;
    }
    // this is VERY rough
    // const isHeightBigger = height > width;
    let newHeight = 280;
    const ratio = width / height;
    const newWidth = ratio * newHeight;

    return {
        height: `${newHeight}px`,
        minWidth: `${newWidth}px`
    };
    }, [height, width]);
    
    return (
        <li className={`${styles.card} ${isSquare ? styles.square : ''}`} style={ height && width ? cardStyle : undefined}>
            {/* if I had time to make the other pages, this would be a <Link> */}
            {/* would need further direction on how assets and boards are organized and linked together to create dynamic pages with confidence */}
            <a className={styles.title} href={href}>{title}</a>
            {thumbnail ? <Image alt="" className={styles.image} src={thumbnail} /> : ''}
        </li>
    );
}