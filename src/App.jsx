import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PassGen from './Pass/PassGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PassGen/>
    </>
  )
}

export default App
