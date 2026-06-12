import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

let navigate = useNavigate()
  return (
    <div className='bg-cyan-600 p-2 px-4 '>
       <button onClick={()=> {
        navigate('/')
      }} className='bg-cyan-900 py-2 px-5 mt-4 mx-2 rounded font-medium cursor-pointer active:scale-95'>Back to home page</button>

      <button onClick={()=> {
        navigate(-1)
      }} className='bg-cyan-900 py-2 px-5 mt-4 mx-2 rounded font-medium cursor-pointer active:scale-95'>Back</button>

      <button onClick={()=> {
        navigate(+1)
      }} className='bg-cyan-900 py-2 px-5 mt-4 mx-2 rounded font-medium cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2
