import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import Navbar from './components/Navbar.jsx' 
import Hero from './components/Hero.jsx' 

gsap.registerPlugin(ScrollTrigger,SplitText)//these plugins aren't auto active u need to register them  makes it globally accessible across project
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
   
    </main>
  )
}

export default App