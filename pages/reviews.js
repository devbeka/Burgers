import Head from 'next/head'
import React from 'react'

export async function getServerSideProps() {
  const response = await fetch( 'https://jsonplaceholder.typicode.com/comments?_limit=20')
  const data = await response.json()
  return {
    props: {
      reviews: data,
    },
  }
}

const reviews = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="title" content="Home Page" />
      </Head>
      <h1>Отзывы</h1>
      <div className="reviews">
        {reviews.map((item) => (
          <li key={item.id}>
            <span>{item.body}</span>
          </li>
        ))}
      </div>
    </>
  )
}

export default reviews
