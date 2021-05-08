import Head from 'next/head'
import Navbar from "../comps/Navbar"
import Footer from "../comps/Footer"
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
      <title>Employee List | Home</title>
      <meta name="keywords" content="ninjas" />
      </Head>

      <div>
    
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto maiores accusamus odit! Provident eveniet dolor eligendi earum sint ipsa vitae minus magnam sunt rerum quo, enim recusandae ut minima cum.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi laborum odit assumenda eos distinctio saepe ea unde? Ipsa beatae ratione, suscipit facilis quam facere voluptate deleniti velit minus voluptas. Nihil?</p>
        <Link href="/employees"><a className={styles.btn}>See Ninja Listing </a></Link>
      
      </div>
    </>
  )
}
