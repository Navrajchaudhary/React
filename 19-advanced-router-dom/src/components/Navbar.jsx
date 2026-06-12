import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-cyan-800 py-3 px-8'>
      <h2 className='text-2xl font-bold'>Navraj</h2>
      <div className='flex gap-5 text-lg font-medium'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/cource'>Course</Link>
        <Link className='text-lg font-medium' to='/products'>Product</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
