import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {GraphQLClient, gql} from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Nav from  '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// conexão com a API

export default function Sobre({}) {
  return (
    <div className={styles.container}>
    
      <Nav />
      <main className={styles.main}>
       <Card>
        <h3>👍👍</h3>
       </Card>
      </main>

      
    </div>
  )
}


