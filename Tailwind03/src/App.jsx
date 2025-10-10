import './App.css'
import Card from './Components/Card'

function App() {
  let myArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-2xl'>Hello Worlddd</h1>
        <Card channel = 'Nikhil Patil' newArr = {myArr}/>
    </>
  )
}

export default App
