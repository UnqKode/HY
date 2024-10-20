import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setcounter]=useState(15)

  function addValue(){
    // counter=counter+1;
    if(counter==20){
      setcounter(counter)
    }
    else{
      setcounter(counter +1)
    }
  }
  function decValue(){
    if(counter==0){setcounter(counter)}
    else{

      setcounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
