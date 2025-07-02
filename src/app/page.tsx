'use client'
import Image from 'next/image'
import vader from './assets/photos/vader.jpg'
import yoda from './assets/photos/yoda.png'
import Navbar from './components/Navbar'
import BackgroundParticles from './components/BackgroundParticles'
import Link from 'next/link'


export default function Home() {
  
  return (
    <>
      
      <BackgroundParticles />
      
      <Navbar />
      
      <div data-aos='fade-left' className='md:mt-20 flex flex-col md:flex-row justify-center gap-x-10 items-center '>
        
        <Image src={vader} className=''alt="Vader" />
        <div className='flex flex-col justify-center items-center gap-y-10'>
          <h1 className='text-yellow-500 md:text-5xl text-3xl text-white font-my-font '>Welcome to SWAPI !</h1>
          <p className='md:w-120 text-white text-xl md:texl-3xl font-my-font2 leading-loose'>This is my personal Star Wars explorer, powered by the <strong>Star Wars API (SWAPI)</strong>.
    Built with <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>AOS</strong>, and more — this project lets you browse through iconic characters from the Star Wars universe in a stylish, interactive way.
    <br /><br />
    May the Force be with you, and I hope you enjoy exploring!</p>
        </div>
      </div>
     <div data-aos="fade-right" className="flex flex-col w-screen md:flex-row justify-center md:gap-x-30 items-center md:items-start  ">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">Let's start from...</time>
      <div className="text-lg font-black text-white">
      <Link className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/films">Films</Link>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end md:mb-10">
      <time className="font-mono italic">or from...</time>
      <div className="text-lg font-black">
        <Link className=" text-white transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/characters">
        Characters
        </Link>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">or...</time>
      <div className="text-lg font-black">
        <Link className=" text-white transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/planets">Planets</Link>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end md:mb-10">
      <time className="font-mono italic">or from...</time>
      <div className="text-lg font-black">
        <Link className="text-white transition-all duration-300 hover:scale-110 hover:text-yellow-500 hover:cursor-pointer" href="/starships">Starships</Link>
      </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">or maybe visit... </time>
      <div className="text-lg font-black text-white "><Link className='hover:text-yellow-500'href={'https://github.com/dmshsh/star-wars'}>Github</Link> or <Link className='hover:text-yellow-500'href={'https://linkedin.com/in/dmshamangeldy'}>LinkedIn</Link></div>

    </div>
  </li>
</ul>
  <Image src={yoda} alt="yoda" className="w-xl h-lg" />
  
</div>

    </>
  )
}
