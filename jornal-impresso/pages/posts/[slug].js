import styles from '../../styles/Slug.module.css';
import {GraphQLClient, gql} from 'graphql-request';
import moment from "moment";
import Image from 'next/image';

// conexão com a API
const graphcms = new GraphQLClient("https://api-sa-east-1.hygraph.com/v2/cl9c8y4wo4g7701t6cy9f4x40/master")
const query = gql`
query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      titulo
      slug
      data
      author {
        id
        nome
        avatar {
          url
        }
      }
      conteudo {
        html
      }
      fotoInicial {
        id
        url
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;
export async function getStaticPaths(){
    const {posts} = await graphcms.request(SLUGLIST);
    return{
        paths:posts.map((posts) => ({params:{slug: posts.slug}})),
        fallback:false,
    }
}
export async function getStaticProps({params}){
    const slug = params.slug;
  const data = await  graphcms.request(query, {slug});
  const post = data.post;
  return{
    props:{
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({post}){
     return(
        <main className={styles.blog}>
            <img src={post.fotoInicial.url} className={styles.cover}/>
            <div className={styles.title}>
                <div className={styles.authimg}>
                <img  src={post.author.avatar.url }/> 
                    <h6>By {post.author.nome}</h6>
                </div>
                <div className={styles.authtext}>
                    <h6 className={styles.date}>{moment(post.data).format("MMMM d, YYYY")}</h6>
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