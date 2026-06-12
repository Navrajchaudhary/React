import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex gap-7 justify-center items-center py-4'>
            <Link className='text-2xl font-bold' to='/products/mens'>Mens</Link>
            <Link className='text-2xl font-bold' to='/products/womens'>womens</Link>
            <Link className='text-2xl font-bold' to='/products/kids'>Kids</Link>
        </div>

      <Outlet/>
    </div>
  )
}

export default Product
