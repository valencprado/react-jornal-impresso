import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Nav from  '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import ColorSchemesExample from '../components/Nav';
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
    // toggle
    setIsActive(current => !current);

    
  };

  return (
    <div className={styles.slug} style={{
      backgroundColor: isActive ? '#212529' : 'white',
      color: isActive ? 'white' : '#212529',
    }}>
    <div className={styles.container} style={{
      backgroundColor: isActive ? '#212529' : 'white',
      color: isActive ? 'white' : '#212529',
    }}>
      <Head>
        <title>Blog - Jornal Impresso</title>
        <meta name="description" content="Notícias, artigos, reportagens e muito mais!" />
        <link rel='icon' href='https://img.icons8.com/3d-fluency/32/000000/news.png'/>
      </Head>
      <ColorSchemesExample />

      <Button style={{
          backgroundColor: isActive ? '#212529' : 'white',
          color: isActive ? 'white' : '#212529',
        }}
        onClick={handleClick}variant="light">{isActive ? 'Light': 'Dark'}
        </Button>

      <main className={styles.main} style={{
          backgroundColor: isActive ? '#212529' : 'white',
          color: isActive ? 'white' : '#212529',
        }} >
       {posts.map((post )=>(
        <div className={styles.BlogCard} style={{
          backgroundColor: isActive ? 'white' : 'white',
          color: isActive ? 'white' : '#212529',
          marginTop: isActive ? '0rem' : '0rem',
          borderRadius: isActive ? '2rem' : '5rem'
          
        }}>
          <BlogCard 
        
        
        title={post.titulo} 
        author={post.author} 
        coverPhoto={post.fotoInicial} 
        key={post.id} 
        date={post.data} 
        slug={post.slug}/>
        </div>
       ))}
       
      </main>

      </div>
    </div>
  )
}
