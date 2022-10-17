import Link from 'next/link'
import styles from '../styles/blogcard.module.css'
export default function BlogPost({title, author, date,coverPhoto, key, slug}){
return(
    <div className={styles.card}>
        <Link href={'/posts/ '+slug}><div className={styles.imgContainer}>
            <img src={coverPhoto.url} />
            </div></Link>
    </div>
);
}
