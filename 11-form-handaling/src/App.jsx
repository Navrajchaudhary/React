import React from 'react'

const App = () => {

  const submitHandler = (e) => {

    e.preventDefault()
    console.log('submit Handeler');
  }
  return (
    <div>
      <form className='m-5' onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input 
         className='py-4 px-6 border-2 rounded-2xl text-2xl'
         type="text"
         placeholder='Enter your name' 
         />
        <button
         className='py-4 px-6 border-2 rounded-2xl text-2xl bg-gray-400 text-white mx-4'
         >Submit
         </button>
      </form>
    </div>
  )
}

export default App
