import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = ()=>{
    setCounter(counter+=1)
  }

  const subValue = ()=>{
    if(counter>0){
      setCounter(counter-=1)
    }
    
  }

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={subValue}>Sub</button>
    </>
  )
}

export default App
