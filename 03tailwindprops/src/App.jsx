import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Joheb",
    age: 21
  }



  return (
    <>
      <h1 className='bg-blue-400 text-black rounded-lg mb-4'>
      Tailwind Test</h1>

      <Card username="Joheb" btnText="click me"/>
      <Card username="Khan" btnText="save me"/>
   
    </>
  )
}

export default App
