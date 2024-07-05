import { useState,useCallback,useEffect,useRef } from 'react'

function App() {

  // useState hook
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  // useRef hook
  const passwordRef=useRef(null);
  
  // useCallback hook
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`";

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1); // generates random no. i.e. index (between 1 and length of string)
      pass+=str.charAt(char); // search character at so and so position or index in str and concatenate in pass
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]); // dependency array - keeps in cache memory for memoization and optimization

  // useCallback hook
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select(); // the blue color copied effect of password
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);
  },[password]);

  // useEffect hook
  useEffect(()=>{
    passwordGenerator(); // auto renders passwordGenerator
  },[length,numberAllowed,charAllowed,passwordGenerator]); // dependency array - on updating these values, re-render 

  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>

      <h1 className='text-white text-center my-2 mb-10 text-4xl'>Password generator</h1>

      {/* input field */}
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
        type="text"
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='Password' 
        readOnly 
        ref={passwordRef}
        />

        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white 
        px-3 py-0.5 shrink-0'
        >Copy</button>

      </div>

      
      <div className='flex text-sm gap-x-2'>

        {/* length range */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        {/* numbers */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev); 
          }}
           />
           <label htmlFor="numbersInput">Numbers</label>
        </div>

        {/* characters */}
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev);
          }}
           />
           <label htmlFor="characterInput">Characters</label>
        </div>

      </div>

    </div>

    </>
  )
}

export default App
