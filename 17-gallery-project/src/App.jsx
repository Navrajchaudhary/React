import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=21`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    {
      printUserData = userData.map((elem, idx) => {
        return (
          <div key={idx}>
            <Card elem={elem} />
          </div>
        );
      });
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-wrap gap-4 py-4 px-5 ">{printUserData}</div>
      <Buttons index={index} setUserData={setUserData} setIndex={setIndex}/>
    </div>
  );
};

export default App;
