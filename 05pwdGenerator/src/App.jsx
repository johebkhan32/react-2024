import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [checknum, setChecknum] = useState(false);
  const [checkchar, setCheckChar] = useState(false);
  const [password, setPassword] = useState("");


  //useref-hook

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {

    let pass =""
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (checknum) str += "1234567890" 
    if (checkchar) str += "!@#$%^&*-_=+[]{}~`" 

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *  str.length + 1)

      pass += str.charAt(char) 

    }

    setPassword(pass)

  }, [length, checknum, checkchar, setPassword])
   
  
  const copyPwdToclip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password)
    // alert('Copied to clipboard')


  }, [password])
  
  useEffect(() => {
    passwordGenerator()
  }, [length, passwordGenerator, checknum, checkchar])

  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>

    <h1 className='text-white text-center'>Password
    Generator</h1>

    <div className='flex shadow overflow-hidden 
    rounded-lg mb-4'>

    <input
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder='Password' 
      readOnly
      ref={passwordRef}

    />

    <button
    onClick={copyPwdToclip}
     className='outline-none bg-blue-700 
    text-white px-3 py-2 shrink-0 cursor-pointer'>copy</button>

    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
          type='range'
          min='6'
          max='50'
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
          className='cursor-pointer'
        />

        <label> length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input
          type='checkbox'
          defaultChecked={checknum}
          id='numberInput'
          onChange={() => {setChecknum((prev) => !prev)
          }}
          className='cursor-pointer'
        />
        <label htmlFor='numberInput'>Numbers</label>
       </div>
       <div className='flex items-center gap-x-1'>

       <input
          type='checkbox'
          defaultChecked={checkchar}
          id='charInput'
          onChange={() => {setCheckChar((prev) => !prev)
          }}
          className='cursor-pointer'
        />
        <label htmlFor='charInput'>Characters</label>
       </div>
    </div>
 </div>


          




    </>
  )
}

export default App
