'use client'
import React from 'react'
import { Container } from './Container'
import { CardMarca } from './CardMarca'
import Link from 'next/link'
import Image from 'next/image'
import { GridMarcas } from './GridMarcas'
import { CardHero } from './CardHero'

export const MarcasSection = () => {
  

    return (
    <section id="marcas" className='lg:h-[60vh] py-10 bg-blue-700'>
    
    <Container>
        <div id='wrap-MarcasContent' className='flex flex-col items-center lg:flex-row h-full w-full gap-10 lg:gap-3'>
            
           <GridMarcas/>
           <CardHero/>  
        
        
        </div>
       
    </Container>

    </section>
  )
}
