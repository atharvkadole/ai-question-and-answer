import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Footer from './footer'
import Brain from './brain'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar />
   <Brain />
   
   </>
  )
}

export default App
