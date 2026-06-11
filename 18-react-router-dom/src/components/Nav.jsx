import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <h2>Navraj</h2>
      <div className='ul'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/products'>Product</Link>
      </div>
    </div>
  )
}

export default Nav
