import styles from '../styles/Home.module.css';
import {GraphQLClient, gql} from 'graphql-request';
import AuthorCard from '../components/AuthorCard';
import Nav from  '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ColorSchemesExample from '../components/Nav';
// conexão com a API
const graphcms = new GraphQLClient("https://api-sa-east-1.hygraph.com/v2/cl9c8y4wo4g7701t6cy9f4x40/master")
const query = gql` 
query {posts{author {
  nome
  descricao{html}
  avatar {
    url
  }
}}}
`;
export async function getStaticProps(){
  const {posts} = await  graphcms.request(query);
  return{
    props:{
      posts,
    },
    revalidate: 10,
  }; 
}

export default function Autores({posts}) {
  

  return (
    
    <div className={styles.container}>
     
      <ColorSchemesExample />

      <main className={styles.main} >
       {posts.map((post )=>(
        <div className={styles.BlogCard} 
        key={null}>
          <AuthorCard 
        
        
        key={post.author.id}   
       nome={post.author.nome}
        avatar={post.author.avatar} />
        </div>
       ))}
       
      </main>

      </div>
    
  )
}


