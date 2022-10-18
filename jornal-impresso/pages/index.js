import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Nav from  '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
// conexão com a API
const graphcms = new GraphQLClient("https://api-sa-east-1.hygraph.com/v2/cl9c8y4wo4g7701t6cy9f4x40/master")
const query = gql`
{
  posts{
    id
    titulo
    slug
    data
    conteudo {
      html
    }
    author {
      nome
      avatar {
        url
      }
    }
    fotoInicial {
      url
      
    }
  }
}`;
export async function getStaticProps(){
  const {posts} = await  graphcms.request(query);
  return{
    props:{
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({posts}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div className={styles.container} >
      <Head>
        <title>Blog - Jornal Impresso</title>
        <meta name="description" content="Notícias, artigos, reportagens e muito mais!" />
        <link rel='icon' href='https://img.icons8.com/3d-fluency/32/000000/news.png'/>
      </Head>
      <Nav />
      
      <Button style={{
          backgroundColor: isActive ? '#212529' : 'white',
          color: isActive ? 'white' : '#212529',
        }}
        onClick={handleClick}variant="light">Light
        </Button>{' '}

      <main className={styles.main} >
       {posts.map((post )=>(
        <BlogCard 
        
        
        title={post.titulo} 
        author={post.author} 
        coverPhoto={post.fotoInicial} 
        key={post.id} 
        date={post.data} 
        slug={post.slug}/>
       ))}
      </main>

      
    </div>
  )
}
