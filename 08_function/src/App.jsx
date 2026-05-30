import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log('button clicked');
    
  }
  const mouseEntered = () => {
    console.log("Mouse entered");
  }

  return (
    <div>
      <h1>Hello, Navraj</h1>
      <button onMouseEnter={mouseEntered} onClick={btnClicked}>Change user</button>
      <button onClick={btnClicked}>Explore more</button>
    </div>
  )
}

export default App
