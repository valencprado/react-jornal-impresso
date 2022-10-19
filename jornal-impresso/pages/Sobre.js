import Link from 'next/link';
import styles from '../styles/Sobre.module.css';
import Nav from  '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function Sobre({posts}) {
  return (
    <div>
      <Nav />
      <main className={styles.content}>
       <Card>
        <h2 className={styles.title}>Jornal Impresso, Geografia e Madre Paula!</h2>
        <p>&emsp;Por aqui, serão postados diversos textos envolvendo atualidades, notícias e informações pertinentes aos alunos. O blog foi criado em 2022, com o apoio dos professores Victor Hugo e Maria Cristina.</p>
        <p>&emsp;O objetivo desse site é aproximar os alunos da escrita, do pensamento crítico e da importância do conhecimento de mundo necessário para viver em sociedade. Esperamos que goste do conteúdo!</p>

       <p className={styles.link}>Desenvolvido por <Link href={'https://www.linkedin.com/in/valentinacprado/'}>Valentina C. Prado</Link> e <Link href={'https://www.linkedin.com/in/gustavo-moura-souza/'}>Gustavo Moura</Link>.</p>
        <h6 className={styles.footer}>2022. Todos os direitos reservados.</h6>
       </Card>
      </main>

      
    </div>
  )
}


