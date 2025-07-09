import BackgroundParticles from "./components/BackgroundParticles";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
    <BackgroundParticles/>
      <h1 className="text-4xl font-bold">404 NOT FOUND</h1>
      <p className="text-gray-500 mt-2">Lets try to return to <Link className='hover:text-yellow-500'href='/'>HomePage</Link></p>
    </div>
  );
}