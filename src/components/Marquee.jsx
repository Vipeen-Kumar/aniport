import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full py-10 bg-[#015551] rounded-tl-3xl rounded-tr-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[10vw] leading-none font-sans font-extrabold tracking-tighter uppercase'>Vipeen  Kumar-</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[10vw] leading-none font-sans font-extrabold tracking-tighter uppercase'>Vipeen  Kumar-</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[10vw] leading-none font-sans font-extrabold tracking-tighter uppercase'>Vipeen  Kumar-</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
