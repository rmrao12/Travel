import { useState } from 'react'
import './App.css'
import Destinations from './components/Destinations'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
 

  return (
    <>
       <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Trip Catalog</h1>
      <Navbar />
      <Destinations />
      <Footer/>
    </div>
    </>
  )
}

export default App;
