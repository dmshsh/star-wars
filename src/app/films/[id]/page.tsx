"use client"
import { useEffect, useState } from 'react'
import { useParams } from "next/navigation"
import { notFound } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import BackgroundParticles from '@/app/components/BackgroundParticles'
import Link from 'next/link'
interface films {
  title:string 
  opening_crawl:string 
  producer: string 
  release_date:string 
}
export default function filmPage() {
  const params = useParams()
  const [show, setShow] = useState(true)
  const id = params.id as string
  const [film, setFilm] = useState<films | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 60000) 
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null
  useEffect(() => {
    const fetchFilm= async () => {
      try {
        const res = await fetch(`https://swapi.py4e.com/api/films/${id}`)
        if (!res.ok) {
          notFound()
        }
        const data = await res.json()
        console.log(data)
        setFilm(data)
      } catch (error) {
        notFound()
      } finally {
        setLoading(false)
      }
    }

    fetchFilm()
  }, [id])


  if (loading) {
    return (
      <div className="w-full bg-black h-screen flex justify-center items-center">
      <span className="loading loading-bars loading-xl"></span>
    </div>
    )
  }

  if (!film) {
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
          <p>{film.producer}</p>
          <h1>{film.title}</h1>
        </div>
        <p className='text-xl'>
         {film.release_date}<br></br>
         {film.opening_crawl}<br></br>
        </p>
      </div>
    </div>
    </div>
  )
}