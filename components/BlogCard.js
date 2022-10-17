import Link from 'next/link'
import styles from '../styles/blogcard.module.css';
import Image from 'next/image';
import moment from 'moment';
export default function BlogPost({title, author, date,coverPhoto, key, slug}){
return(
    <div className={styles.card}>
       
      <Link href={`/posts/${slug}`}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <img src={author.avatar.url} alt={author.nome} />
            <h3>{author.nome}</h3>
          </div>
          <div className={styles.date}>
            <h3>{moment(date).format("MMMM d, YYYY")}</h3>
          </div>
        </div>
      </div>
      </Link>
    </div>
);
}

//  <Image width='100%' height='100%' src={coverPhoto.url} alt="" />