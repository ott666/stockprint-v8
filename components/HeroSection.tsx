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
        <div className="absolute inset-0 aspect-video h-full 2xl:h-auto">
  <iframe className="w-full h-full aspect-video absolute z-[-1]" src="https://www.youtube.com/embed/g3WLKZTSgFY?autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&modestbranding=1&playlist=g3WLKZTSgFY&" allowFullScreen={true}></iframe>
</div>

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
