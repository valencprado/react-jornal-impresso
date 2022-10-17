import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {GraphQLClient, gql} from 'graphql-request'
import BlogCard from '../components/BlogCard'
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
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog - Jornal Impresso</title>
        <meta name="description" content="Notícias, artigos, reportagens e muito mais!" />
      </Head>

      <main className={styles.main}>
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