import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("A ki value change hogi hey");
    
  }
  function bChanging() {
    console.log("B ki value change hogi hey")
  }


  useEffect(function(){
    aChanging()
  },[a])
  
  useEffect(function(){
    bChanging()
  },[b])
  


  return (
    <div>
      <h2>A is {a}</h2>
      <h2>B is {b}</h2>

      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>

      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
