import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Link from 'next/link'

export default function Home() {
   return (
      <Layout title="Home">
         <Link href="/about">
            <a>Go to about</a>
         </Link>
         <p>Welcome to the home page</p>
      </Layout>
   )
}
