import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  let userName = 'Navraj'
  let age = 20
  return (
    <div>
      <Navbar/>
      <Card />
      <Card name="Rohan"/>
    </div>
  )
}

export default App
