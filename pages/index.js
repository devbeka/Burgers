import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger Next </title>
        <meta name="title" content="Home Page" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Burger Next</h1>
        <div className={styles.mainImage}>
          <Image src="/fatburger.png" alt="burger" width={400} height={300} />
        </div>
        <p className={styles.text}>
          Качество – это наш главный принцип! <br /> Качество основано на работе
          с лучшими производителями продуктов, выполнении международных
          стандартов, натуральности и свежести ингредиентов и постоянном
          контроле.
        </p>
        <Link href="/burgers">
          <span className={styles.btn}>Бургеры</span>
        </Link>
      </div>
    </>
  )
}
