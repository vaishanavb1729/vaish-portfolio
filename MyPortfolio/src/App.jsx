import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Projects from './Components/Project.jsx';
import Contacts from './Components/Contact.jsx';
import './App.css'
import emailjs from "@emailjs/browser"
import {motion} from "framer-motion"
function App() {
  
  const [isLoaded,setIsLoaded] = useState(false);
  useEffect(()=>{
     setIsLoaded(true);
     emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  },[])

  return (
    <div  className={`app ${isLoaded ? "loaded": ""}`}>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Contacts/>

<motion.footer 
className='footer' 
initial={{opacity:0}}
whileInView={{opacity:1}}
viewport={{once:true}}
transition ={{duration:0.6}}
>
<p>&copy;2025 VaishanavTech.All rights reserved.</p>
</motion.footer>

    </div>
  
  )
}

export default App
