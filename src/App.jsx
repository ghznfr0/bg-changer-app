import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount((count) => count + 2)
    setCount((count) => count + 2)
    setCount((count) => count + 2)
    setCount((count) => count + 2)
  }
  const removeVal = () => {
    if(count > 0){
      setCount(count -1)
    }
  }

  return (
    <>
      <button onClick={addValue}>Add</button>
      <h2>Counter: {count} </h2>
      <button onClick={removeVal}>Remove</button>
    </>
  )
}

export default App
