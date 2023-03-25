import Link from "next/link";
import styles from '../styles/A.module.css'

export default function ({href, text}) {
    return(
        <Link className={styles.link} href={href}>
        <span >{text}</span>
        </Link>
    )
}