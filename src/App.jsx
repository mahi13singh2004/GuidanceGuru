import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {

  const [advice,setAdvice]=useState('');

  const fetchAdvice=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((found)=>{
        const {advice}=found.data.slip;
        setAdvice(advice);
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    fetchAdvice();
  },[])

  
  return (
    <>
      <div className="h-screen w-full bg-cover">
        <div className="outside w-full h-screen flex justify-center items-center">
          <div className="card rounded-full flex flex-col justify-center items-center relative bottom-25">
              <h1 className="text-center p-5 font-mono text-lg">{advice}</h1>
              <button onClick={fetchAdvice} className="button px-4 py-2 rounded-md mt-2 cursor-pointer">Click For Advice</button>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default App;
