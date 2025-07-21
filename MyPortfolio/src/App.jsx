import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Projects from './Components/Project.jsx';
import Contacts from './Components/Contact.jsx';
import './App.css'

function App() {
  
  const [isLoaded,setIsLoaded] = useState(false);
  useEffect(()=>{
     setIsLoaded(true);
  },[])

  return (
    <div  className={`app ${isLoaded ? "loaded": ""}`}>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Contacts/>

<>
<p>&copy;2025 VaishanavTech.All rights reserved.</p>
</>

    </div>
  
  )
}

export default App
