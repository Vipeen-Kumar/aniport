import React from 'react'
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-10 py-8 bg-zinc-800 flex justify-between items-center'>
      <div className='logo'>
        <img src={logo} alt="logo" className="rounded-full object-cover" style={{ width: '90px', height: 'auto' }}/>
      </div>
      <div className='links flex gap-6'>

        {["About me","Projects","Certificate","Contact"].map((items, index) => (
            <a key={index} className={`text-lg font-semibold capitalize hover:text-blue-400 transition-colors ${index === 3 && "ml-32"}`}>{items}</a>
        ))}
      </div>

    </div>
  )
}

export default Navbar
