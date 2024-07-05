import './App.css'
import Card from './components/Card'

function App() {

  let myObj={
    username:"anushka",
    age:19,
  }

  let newArr=[1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind test</h1>
      
      <div className='flex gap-2'>
        <Card channel="chai aur code" someObject={newArr} username="anushka" btnText="Visit Me"/>
        <Card username="anu" btnText="Click Me"/>
      </div>
    </>
  )
}

export default App
