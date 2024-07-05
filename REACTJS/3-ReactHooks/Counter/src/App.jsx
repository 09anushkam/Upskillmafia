import { useState } from 'react' //hook
import './App.css'

//hook - used to update value of counter every where in the UI

function App() {

  const [counter,setCounter]=useState(5);

  // let counter=15

  const addValue=()=>{
    if(counter===0 || counter>0 && counter<=20){
      setCounter(counter++);
      // not gonna work!
      // setCounter(counter++);
      // setCounter(counter++);
      // setCounter(counter++);
      // this will work!
      // setCounter(prevCount=>prevCount+1);
      // setCounter(prevCount=>prevCount+1);
      // setCounter(prevCount=>prevCount+1);
      // setCounter(prevCount=>prevCount+1);
    }
    console.log(counter);
  }

  const removeValue=()=>{
    if(counter===21){
      counter=20;
      setCounter(counter);
    }
    else if(counter>0 && counter<=21){
      setCounter(counter--);
    }
    else{
      counter=0;
      setCounter(counter);
    }
    console.log(counter);
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value:{counter}</h2>
    <button
    onClick={addValue}
    >Add Value</button>
    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
