"use client"
import { useEffect, useState } from 'react'
import { useParams } from "next/navigation"
import { notFound } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import BackgroundParticles from '@/app/components/BackgroundParticles'
import Link from 'next/link'
interface Character {
  name: string
  height: string
  mass: string
  gender: string
  eye_color: string
  birth_year:string
  homeworld:string
}
interface Homeworld{
  name:string
  url:string
}
export default function CharacterPage() {
  const params = useParams()
  const [show, setShow] = useState(true)
  const id = params.id as string
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)
  const [homeworld, setHomeworld]=useState<Homeworld | null>(null)
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 60000) 
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`https://swapi.py4e.com/api/people/${id}`)
        if (!res.ok) {
          notFound()
        }
        const data = await res.json()
        console.log(data)
        setCharacter(data)
      } catch (error) {
        notFound()
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])
useEffect(() => {
  if (!character || !character.homeworld) return;

  const fetchHome = async () => {
    try {
      const res = await fetch(character.homeworld)
      if (!res.ok) throw new Error("Ошибка при получении планеты")
      const data = await res.json()
      setHomeworld({ name: data.name, url: character.homeworld })
    } catch (err) {
      console.error("Ошибка при загрузке homeworld", err)
    }
  }

  fetchHome()
}, [character])


  if (loading) {
    return (
      <div className="w-full bg-black h-screen flex justify-center items-center">
      <span className="loading loading-bars loading-xl"></span>
    </div>
    )
  }

  if (!character) {
    notFound()
  }
function extractIdFromUrl(url: string): string {
  const parts = url.split('/').filter(Boolean)
  return parts[parts.length - 1]
}

  return (
    
    <div className="min-h-screen">
      <Navbar/>
      <BackgroundParticles/>
      <div className="star-wars-container">
      <div className="crawl">
        <div className="title">
          <p>{character.birth_year}</p>
          <h1>{character.name}</h1>
        </div>
        <p>
         Eyes: {character.eye_color}<br></br>
         Gender: {character.gender}<br></br>
         Height: {character.height} cm<br></br>
         Mass:{character.mass} kg <br></br>
         Homeworld: {homeworld ? (
  <Link href={`/planets/${extractIdFromUrl(homeworld.url)}`}>
    {homeworld.name}
  </Link>
) : 'Loading...'}


        </p>
      </div>
    </div>
    </div>
  )
}