'use client'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchData, setPage } from '../store/slices/starshipsSlice'
import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Navbar from '../components/Navbar'
import BackgroundParticles from '../components/BackgroundParticles'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import SpeedIcon from '@mui/icons-material/Speed'
import FactoryIcon from '@mui/icons-material/Factory'
import Link from 'next/link'

export default function StarshipsPage() {
  const dispatch = useAppDispatch()
  const { data, page, loading, count } = useAppSelector((state: any) => state.starships)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(fetchData(page))
  }, [dispatch, page])

  const filteredData = data.filter((starsh: any) =>
    starsh.name.toLowerCase().includes(searchQuery.toLowerCase())
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
            filteredData.map((starsh: any) => {
              const id = starsh.url.split('/').filter(Boolean).pop()

              return (
                <Link key={starsh.name} href={`/starships/${id}`} className="w-full md:w-1/2">
                  <div
                    className="border-b-2 border-white rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-all duration-200"
                    data-aos="zoom-out"
                  >
                    <h1 className="font-my-font2 text-2xl md:text-3xl text-yellow-500">
                      {starsh.name}
                    </h1>
                    <p className="text-gray-400 text-xl md:text-2xl font-my-font3 items-center flex">
                      <ViewInArIcon />: {starsh.model}
                    </p>
                    <p className="text-gray-400 text-xl md:text-2xl font-my-font3">
                      <SpeedIcon />: {starsh.max_atmosphering_speed}
                    </p>
                    <p className="text-gray-400 text-xl md:text-2xl font-my-font3 flex items-center">
                      <FactoryIcon />: {starsh.manufacturer}
                    </p>
                  </div>
                </Link>
              )
            })
          ) : (
            <p className="text-white text-xl">Nothing found</p>
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
