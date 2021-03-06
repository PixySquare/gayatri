import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';


export default function Button(props) {
    return (
        <div className={styles.button}>
        <Link href={props.href} passHref >
        <div>
                <a>{props.text}</a>
        </div>
        </Link>
        </div>

    )
}


