import { useState } from "react"
import Test from "./test"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{"backgroundColor": color}}
      
    >

      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-2 shadow-lg bg-white px-3 py-2  rounded-3xl">
        <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "red"}}
        >Red</button>

        <button
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "blue"}}
        >blue</button>

        <button
        onClick={() => setColor("green")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "green"}}
        >green</button>

        <button
        onClick={() => setColor("black")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "black"}}
        >black</button>

        <button
        onClick={() => setColor("purple")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "purple"}}
        >purple</button>

        <button
        onClick={() => setColor("orange")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "orange"}}
        >orange</button>

        <button
        onClick={() => setColor("grey")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "grey"}}
        >grey</button>

        <button
        onClick={() => setColor("navy")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "navy"}}
        >navy</button>
        
        <button
        onClick={() => setColor("magenta")}
        className="outline-none px-4 py-2 shadow-xl
        rounded-full text-white"
        style={{"backgroundColor": "magenta"}}
        >magenta</button>
      
        </div>
      </div>
      <Test />
    </div>
  )
}

export default App
