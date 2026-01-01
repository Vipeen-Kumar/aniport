import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Certificate from './components/Certificate'
import Play from './components/Play'
import Contact from './components/Contact'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    }
  }, []);

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Certificate />
      <Play />
      <Contact />
    </div>
  )
}

export default App
