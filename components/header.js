import React from 'react'
import Link from 'next/link'
import { FaHamburger } from 'react-icons/fa'


const Header = () => {
  return (
    <header className='header'>
      <div>
        <FaHamburger />
      </div>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li><Link href='/'>Главная</Link> </li>
          <li><Link href='/burgers'>Бургеры</Link></li>
          <li><Link href='/reviews'>Отзывы</Link></li>
          <li><Link href='/about'>О нас</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
