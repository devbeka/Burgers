import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NorFoundPage = () => {
  const backToHome = useRouter()

  useEffect(() => {
    setTimeout(() => {
      backToHome.push('/')
    }, 4000)
  }, [])

  return (
    <div className="not-found">
      <h1>Error 404</h1>
      <h2>Страница не найдена !</h2>
      <Link href="/">Перейти на Главную страницу </Link>
    </div>
  )
}

export default NorFoundPage
