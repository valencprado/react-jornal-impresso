 import styles from '../styles/AuthorCard.module.css';
 import Image from 'next/image';

 export default function AuthorCard({avatar, nome, descricao}){
  
 return(
    
   <div className={styles.card}>
  
       <div className={styles.imgContent}>
           <img src={avatar.url} alt={descricao} />
       </div>
     <div className={styles.text}>
       <h3>{nome}</h3>
       </div>
     </div> 
 );
 }

  