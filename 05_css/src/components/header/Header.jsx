import React from 'react'
import headers from './Header.module.css'

const Header = () => {
  return (
    <div className={headers.header}>
      <h3>Navraj</h3>
      <button className={headers.btn}>Login</button>
    </div>
  )
}

export default Header
