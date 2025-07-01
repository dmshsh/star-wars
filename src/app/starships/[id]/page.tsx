"use client"
import { useEffect, useState } from 'react'
import { useParams } from "next/navigation"
import { notFound } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import BackgroundParticles from '@/app/components/BackgroundParticles'
import Link from 'next/link'

interface Starship {
  name: string
  model:string 
  manufacturer:string 
  cost_in_credits:number 
  max_atmosphering_speed:number 

}



function extractIdFromUrl(url: string): string {
  const parts = url.split('/').filter(Boolean)
  return parts[parts.length - 1]
}

export default function StarshipPage() {
  const params = useParams()
  const [show, setShow] = useState(true)
  const id = params.id as string
  const [starship, setStarship]= useState<Starship | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 60000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const res = await fetch(`https://swapi.py4e.com/api/starships/${id}`)
        if (!res.ok) {
          notFound()
        }
        const data = await res.json()
        setStarship(data)
      } catch (error) {
        notFound()
      } finally {
        setLoading(false)
      }
    }

    fetchPlanet()
  }, [id])




  if (!show) return null

  if (loading) {
    return (
      <div className="w-full bg-black h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    )
  }

  if (!starship) {
    notFound()
  }


  return (
    <div className="min-h-screen">
      <Navbar />
      <BackgroundParticles />
      
      <div className="star-wars-container">
        <div className="crawl">
          <div className="title">
            <p>Model:{starship.model}</p>
            <h1>{starship.name}</h1>
          </div>
            Manufacture:{starship.manufacturer}<br />
            Speed:{starship.max_atmosphering_speed} M/h<br />
            Cost:{starship.cost_in_credits} credits<br /><br />
        </div>
      </div>
    </div>
  )
}
