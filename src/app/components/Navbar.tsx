'use client'
import { useEffect, useState } from 'react'
const AOS = require('aos') as any
import 'aos/dist/aos.css'
import Link from 'next/link'

interface NavbarProps {
  onSearch?: (query: string) => void
}

function Navbar({ onSearch }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch?.(value)
  }

  return (
    <>
     
      <nav
        data-aos="fade-down"
        className="border border-white rounded-2xl hidden md:flex font-my-font text-3xl bg-transparent text-white h-16 w-screen items-center justify-evenly px-4"
      >
        <div className="flex gap-8">
          <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500" href="/">Home</Link>
          <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500" href="/characters">Characters</Link>
          <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500" href="/planets">Planets</Link>
          <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500" href="/starships">Starships</Link>
          <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500" href="/films">Films</Link>
        </div>

   
        {onSearch && (
          <input
            type="text"
            value={query}
            onChange={handleInput}
            placeholder="Search by name"
            className="text-white bg-transparent border border-white px-3 py-1 rounded-xl "
          />
        )}
      </nav>


      <div className="md:hidden bg-black font-my-font text-white p-4 flex justify-between items-center">
        <button
          className="transition-all duration-300 hover:scale-110 hover:text-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰ Menu
        </button>
        {onSearch && (
          <input
            type="text"
            value={query}
            onChange={handleInput}
            placeholder="Search by name"
            className="ml-4 px-2 py-1 text-white border border-white rounded-lg bg-transparent text-base"
          />
        )}
      </div>


      {isOpen && (
        <div
          data-aos="fade-down"
          className="md:hidden font-my-font bg-transparent text-white flex flex-col items-start p-4 space-y-2"
        >
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/characters" onClick={() => setIsOpen(false)}>Characters</Link>
          <Link href="/planets" onClick={() => setIsOpen(false)}>Planets</Link>
          <Link href="/starships" onClick={() => setIsOpen(false)}>Starships</Link>
          <Link href="/films" onClick={() => setIsOpen(false)}>Films</Link>
        </div>
      )}
    </>
  )
}

export default Navbar
