import { useState } from 'react'
import './App.css'
import Destinations from './components/Destinations'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
        <Navbar onSearch={setSearchResults} />
       <div className="container mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Trip Catalog</h1>
      <Destinations searchResults={searchResults} />
    </div>
    <Footer/>

    </>
  )
}

export default App;
