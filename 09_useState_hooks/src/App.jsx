import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  const Increase = () => {
    setnum(num + 1)
  }
  const decrease = () => {
    setnum(num - 1)
  }
  const jump = () => {
    setnum(num + 5)
  }

  return (
    <div className='text-center p-4 m-4 flex flex-col justify-center items-center'>
      <div className='bg-gray-500 p-4 rounded w-20 h-20 flex items-center justify-center'>
        <h2 className='text-5xl text-white'>{num}</h2>
      </div>
      <div className='flex gap-2 p-4'>
        <button className='border-2 border-gray-400 px-6 py-2 rounded bg-gray-700 text-white text-lg cursor-pointer' onClick={Increase}>Increase</button>
        <button className='border-2 border-gray-400 px-6 py-2 rounded bg-gray-700 text-white text-lg cursor-pointer' onClick={decrease}>Decrease</button>

        <button className='border-2 border-gray-400 px-6 py-2 rounded bg-gray-700 text-white text-lg cursor-pointer' onClick={jump}>Jump by 5</button>
      </div>
    </div>
  )
}

export default App
