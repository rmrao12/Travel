import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Destinations from './components/Destinations'

function App() {
 

  return (
    <>
       <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Trip Catalog</h1>
      <Destinations />
    </div>
    </>
  )
}

export default App
