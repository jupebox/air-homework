'use client';
// todo: better loading state while requests are in flight
import React, {useState} from "react";
import styles from './ToggleSection.module.css'
import {Arrow} from "../icons/Arrow/Arrow";
export const ToggleSection = ({children, id, itemQuantity, initialIsExpanded, name, hasLoaded}: {children: React.ReactNode, id: string, itemQuantity: number, initialIsExpanded: boolean, name: string, hasLoaded: boolean}) => {
    const [isExpanded, setIsExpanded] = useState(initialIsExpanded);
    const isExpandable = hasLoaded && itemQuantity > 0;

    const toggleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <section id={id} className={styles.section}>
            {isExpandable ? <h2 className={styles.heading}>
                <button className={styles.button} type="button" aria-expanded={isExpanded ? "true" : "false"} aria-controls={`${id}-content`} onClick={toggleIsExpanded}>{name} ({itemQuantity}) <span aria-hidden className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}><Arrow /></span></button>
            </h2>
            : 
            <h2 className={`${styles.heading} ${styles.notExpandable}`}>{name} ({itemQuantity})</h2>}
            {!isExpandable ? (
                <div>
                    {hasLoaded ? <p>This section is empty. Try adding {name.toLocaleLowerCase()} to it!</p> : <p>Loading...</p>}
                </div>
            ) :
            (<div id={`${id}-content`}>
                {isExpanded ? children : ''}
            </div>)}
            
        </section>
    )
}