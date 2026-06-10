import React from 'react'

const App = () => {

  const user = {
    name: "Navraj",
    age: 20,
    city: "duhabi",
    number: "9810505349"
  }

  localStorage.setItem("user", JSON.stringify(user))

  const userData = JSON.parse(localStorage.getItem("user"))
  console.log(userData);
  

  return (
    <div>
      App
    </div>
  )
}

export default App
