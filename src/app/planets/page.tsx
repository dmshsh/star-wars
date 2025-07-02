'use client'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchData, setPage } from '../store/slices/planetsSlice'
import { useEffect, useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import PeopleIcon from '@mui/icons-material/People'
import TerrainIcon from '@mui/icons-material/Terrain'
import Pagination from '../components/Pagination'
import Navbar from '../components/Navbar'
import BackgroundParticles from '../components/BackgroundParticles'
import Link from 'next/link'

export default function Planets() {
  const dispatch = useAppDispatch()
  const { data, page, loading, count } = useAppSelector((state: any) => state.planets)

  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(fetchData(page))
  }, [dispatch, page])

  const filteredData = data.filter((planet: any) =>
    planet.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-transparent flex flex-col items-center min-h-screen">
      <Navbar onSearch={setSearchQuery} />
      <BackgroundParticles />

      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-4 px-4 py-6 justify-center">
          {filteredData.length > 0 ? (
            filteredData.map((planet: any) => {
              const id = planet.url.split('/').filter(Boolean).pop()

              return (
                <Link key={planet.name} href={`/planets/${id}`} className="w-full md:w-1/2">
                  <div
                    className="border-b-2 border-white rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-all duration-200"
                    data-aos="zoom-out"
                  >
                    <h1 className="font-my-font2 text-2xl md:text-3xl text-yellow-500">
                      {planet.name}
                    </h1>
                    <p className="text-gray-400 text-xl md:text-2xl font-my-font3 items-center flex">
                      <CircleIcon />: {planet.diameter} km
                    </p>
                    <p className="text-gray-400 text-xl md:text-2xl font-my-font3">
                      <PeopleIcon />: {planet.population}
                    </p>
                    <p className="text-xl text-gray-400 md:text-2xl font-my-font3 flex items-center">
                      <TerrainIcon />: {planet.terrain}
                    </p>
                  </div>
                </Link>
              )
            })
          ) : (
            <p className="text-white text-xl">Nothing!</p>
          )}
        </div>
      )}

      <Pagination
        currentPage={page}
        totalCount={count}
        pageSize={10}
        onPageChange={(p) => dispatch(setPage(p))}
      />
    </div>
  )
}
