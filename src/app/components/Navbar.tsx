'use client'
import { useEffect } from 'react'

const AOS = require('aos') as any

import 'aos/dist/aos.css'
import Link from 'next/link'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
 useEffect(() => {
    AOS.init({ duration: 1000 }) 
  }, [])
  return (
    <>
     
      <nav data-aos='fade-down' className="border border-white rounded-2xl  hidden md:flex font-my-font text-3xl bg-transparent text-white h-16 w-screen items-center justify-evenly">
        <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/">Home</Link>
        <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/characters">Characters</Link>
        <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/planets">Planets</Link>
        <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/starships">Starships</Link>
        <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/films">Films</Link>
      </nav>

    
      <div  className="md:hidden bg-black font-my-font text-white p-4 flex justify-between items-center">
        <button  className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>☰ Menu</button>
      </div>

      {isOpen && (
        <div data-aos="fade-down"  className="md:hidden font-my-font bg-transparent text-white flex flex-col items-start p-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link  href="/characters" onClick={() => setIsOpen(false)}>Characters</Link>
          <Link  href="/planets" onClick={() => setIsOpen(false)}>Planets</Link>
          <Link  href="/starships" onClick={() => setIsOpen(false)}>Starships</Link>
          <Link   href="/films" onClick={() => setIsOpen(false)}>Films</Link>
        </div>
      )}
    </>
  )
}

export default Navbar
