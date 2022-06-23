import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container1}>Login Page</h1>
      <h2>User Name</h2>
      <input  className={styles.box} type="text" placeholder='Name'/>
      <h2>Password</h2>
      <input className={styles.box} type="password" placeholder='Password' required/>
      <button className={styles.box1}>Login</button>
    </div>
  )
}
