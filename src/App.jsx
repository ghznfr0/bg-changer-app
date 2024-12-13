import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }
  const removeVal = () => {
    if(count > 0){
      setCount(count -1)
    }
  }

  return (
    <>
      <button onClick={addValue}>Add</button>
      <h1>Counter: {count} </h1>
      <button onClick={removeVal}>Remove</button>
    </>
  )
}

export default App
