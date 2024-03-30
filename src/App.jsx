import { useState } from 'react'
import Navbar from './component/navbar'
import Manager from './component/Manager'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      < Navbar/>
      <Manager/>
      
    </>
  )
}

export default App
