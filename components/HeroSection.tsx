import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
  return (
    
    <section id="hero" 
    className={`
    w-full
    bg-blue-900/30
      h-[50vh]
      md:h-[95vh]
      lg:h-[100vh]
    relative
    overflow-hidden
    flex flex-col items-center justify-center
      
      px-2
      sm:px-12
      lg:px-40
      xl:px-52
      2xl:px-72
      pt-20
      md:pt-0
   
    `}>
        <video className='absolute w-full h-full z-[-1] object-cover top-0 left-0' autoPlay muted loop src="/video/redes.mp4">
          
        </video>
    <div id='logowrapper'
    className={`
    
    w-full
    h-[50%]
    relative
    bg-red
    `}>
        <Image src={'/logos/logo.svg'} fill={true} alt='logo' style={{objectFit:'contain'}}/>
    </div>
    
    </section>

  )
}
