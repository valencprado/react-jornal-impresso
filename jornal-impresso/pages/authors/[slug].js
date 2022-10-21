/*import styles from '../../styles/Slug.module.css';
import {GraphQLClient, gql} from 'graphql-request';
import moment from "moment";
import Image from 'next/image';
import ColorSchemesExample from '../../components/Nav';
//import Nav from  '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

// ainda não tá funcionando gus mas tá aqui
const graphcms = new GraphQLClient("https://api-sa-east-1.hygraph.com/v2/cl9c8y4wo4g7701t6cy9f4x40/master")
const query = gql`
query Author($slug: String!) {
    author(where: { slug: $slug }) {
        author {
            nome
            slug
            avatar {
              url
            }
          }
    }
  }
`;
const SLUGLIST = gql`
  {
    author {
      slug
    }
  }
`;
export async function getStaticPaths(){
    const {authors} = await graphcms.request(SLUGLIST);
    return{
        paths:authors.map((authors) => ({params:{slug: authors.slug}})),
        fallback:false,
    }
}
export async function getStaticProps({params}){
    const slug = params.slug;
  const data = await  graphcms.request(query, {slug});
  const author = data.author;
  return{
    props:{
      author,
    },
    revalidate: 10,
  };
}

export default function BlogPost({post}){
     return(
      
        <main className={styles.blog}>
          <ColorSchemesExample />
            <img src={author.avatar.url} />
            <div className={styles.title}>
                <div className={styles.authtext}>
                  <p>{author.nome}</p>
                </div>
                
            </div>
            <h2>{post.title}</h2>
            <div
        className={styles.content}
      dangerouslySetInnerHTML={{ __html: post.conteudo.html}}
      ></div>
        </main>
        
     )
}

*/