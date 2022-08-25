import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Burgers.module.css'

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:8080/burgers')
  const data = await response.json()

  const paths = data.map((burger) => {
    return {
      params: { id: burger.id },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id

  const response = await fetch(`http://localhost:8080/burgers/${id}`)
  const data = await response.json()
  return {
    props: {
      burger: data,
    },
  }
}

const BurgerItem = ({ burger }) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={styles.imageItem}>
        <Image
          src={`${burger.image}`}
          alt={`${burger.name}`}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <hr />
      <div>
        <p>{burger.desc}</p>
        <span>цена: {burger.price} c.</span>
      </div>
    </div>
  )
}

export default BurgerItem
