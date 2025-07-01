'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#000000' },
        particles: {
          number: { value: 200 },
          size: { value: 1 },
          color: { value: '#ffffff' },
          move: { enable: true, speed: 0.4 },
          links: { enable: false, distance: 200, color: '#ffffff' },
        },
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none', 
      }}
    />
  )
}
