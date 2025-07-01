'use client'
import { useAppDispatch, useAppSelector} from '../store/hooks'
import { fetchData, setPage } from '../store/slices/characterSlice'
import { useEffect } from 'react'
import Pagination from '../components/Pagination'
import Navbar from '../components/Navbar'
import HeightIcon from '@mui/icons-material/Height';
import TransgenderIcon from '@mui/icons-material/Transgender';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BackgroundParticles from '../components/BackgroundParticles'
import Link from 'next/link'
export default function CharactersPage() {
  const dispatch = useAppDispatch()
  const { data, page, loading, count } = useAppSelector((state:any) => state.characters)
  useEffect(() => {
    dispatch(fetchData(page))
  }, [dispatch, page])
  
  return (
    
    <div className="bg-transparent flex flex-col items-center min-h-screen">
  <Navbar />
  <BackgroundParticles/>
  {loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  ) : (
    <div className="w-full flex flex-wrap gap-4 px-4 py-6 justify-center">
      {data.map((char: any) => {
  const id = char.url.split('/').filter(Boolean).pop()

  return (
    <Link key={char.name} href={`/characters/${id}`} className="w-full md:w-1/2">
      <div
        className="border-b-2 border-white rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-all duration-200"
        data-aos="zoom-out"
      >
        <h1 className="font-my-font2 text-2xl md:text-3xl text-yellow-500">{char.name}</h1>
        <p className="text-gray-400 text-xl md:text-2xl font-my-font3 items-center flex">
          <HeightIcon />: {char.height} cm
        </p>
        <p 
        style={{
    color:
      char.gender === 'male'
        ? 'blue'
        : char.gender === 'female'
        ? 'pink'
        : 'gray',
  }}
        className="text-gray-400 text-xl md:text-2xl font-my-font3">
          
          <TransgenderIcon />: {char.gender}
        </p>
        <p
          className="text-xl md:text-2xl font-my-font3 flex items-center"
          style={{ color: char.eye_color }}
        >
          <RemoveRedEyeIcon />: {char.eye_color}
        </p>
      </div>
    </Link>
  )
})}

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
