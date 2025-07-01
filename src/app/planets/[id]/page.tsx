"use client"
import { useEffect, useState } from 'react'
import { useParams } from "next/navigation"
import { notFound } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import BackgroundParticles from '@/app/components/BackgroundParticles'
import Link from 'next/link'

interface Planet {
  name: string
  rotation_period: number
  diameter: number
  population: number
  terrain: string
  climate: string
  residents: string[]
}
interface Resident {
  name: string
  url: string
}


function extractIdFromUrl(url: string): string {
  const parts = url.split('/').filter(Boolean)
  return parts[parts.length - 1]
}

export default function PlanetPage() {
  const params = useParams()
  const [show, setShow] = useState(true)
  const id = params.id as string
  const [planet, setPlanet] = useState<Planet | null>(null)
  const [loading, setLoading] = useState(true)
  const [residentsData, setResidentsData] = useState<Resident[]>([])
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 60000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const res = await fetch(`https://swapi.py4e.com/api/planets/${id}`)
        if (!res.ok) {
          notFound()
        }
        const data = await res.json()
        setPlanet(data)
      } catch (error) {
        notFound()
      } finally {
        setLoading(false)
      }
    }

    fetchPlanet()
  }, [id])

useEffect(() => {
  if (!planet) return;

  const fetchResidents = async () => {
    try {
      const requests = planet.residents.map(async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        return { name: data.name, url }
      })
      const results = await Promise.all(requests)
      setResidentsData(results)
    } catch (err) {
      console.error("Ошибка при загрузке резидентов", err)
    }
  }

  fetchResidents()
}, [planet])



  if (!show) return null

  if (loading) {
    return (
      <div className="w-full bg-black h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    )
  }

  if (!planet) {
    notFound()
  }


  return (
    <div className="min-h-screen">
      <Navbar />
      <BackgroundParticles />
      
      <div className="star-wars-container">
        <div className="crawl">
          <div className="title">
            <p>Population:{planet.population}</p>
            <h1>{planet.name}</h1>
          </div>
            Rotation: {planet.rotation_period} hours<br />
            Diameter: {planet.diameter} km<br />
            Terrain: {planet.terrain}<br />
            Climate: {planet.climate}<br />

            <h3 className="mt-4 mb-2">Residents:</h3>
{residentsData.length > 0 ? (
  residentsData.map((resident, index) => {
    const characterId = extractIdFromUrl(resident.url)
    return (
      <div key={index}>
        <Link href={`/characters/${characterId}`}>
          {resident.name}
        </Link>
      </div>
    )
  })
) : (
  <p>No residents</p>
)}

        </div>
      </div>
    </div>
  )
}
