import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';
import Image from 'next/image';
import moment from 'moment';
export default function BlogPost({title, author, date,coverPhoto, key, slug}){
return(
    <div className={styles.card}>
       
      <Link href={`/posts/${slug}`}>
        <div className={styles.imgContent}>
            <Image width='683em' height='100em' src={coverPhoto.url} alt="" />
        </div>
      </Link>
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
    </div>
);
}

//  