'use client'
import React from 'react'
import { Container } from './Container'
import { CardMarca } from './CardMarca'
import Link from 'next/link'
import Image from 'next/image'

export const MarcasSection = () => {
  

    return (
    <section id="marcas" className='lg:h-[40vh] my-10'>
    
    <Container>
        <div id='wrap-MarcasContent' className='flex flex-col items-center lg:flex-row h-full w-full gap-10 lg:gap-3'>
            
            <div id='gridMarcas' 
            className={`
            gap-3
            px-2 
            grid 
            h-[500px] sm:h-[270px] lg:h-full
            w-full  max-w-[330px] sm:max-w-none  lg:w-[60%]
            grid-cols-1 grid-rows-4
            sm:grid-cols-2 sm:grid-rows-2`}>
                <CardMarca marca='evolis'/>
                <CardMarca marca='entrust' />
                <CardMarca marca='zebra' />
                <CardMarca marca='hid'/>
            </div>

        <div className='flex flex-col gap-5 items-center bg-white/20 py-5 rounded-3xl shadow-2xl shadow-black max-w-[330px] lg:max-w-none lg:w-[40%]'>
            <h1 className='text-white font-bold max-w-[200px] lg:max-w-none lg:text-start text-center text-xl'>Trabalhamos com estas marcas</h1>
            <p className='text-lg max-w-[300px] lg:max-w-none px-8 text-white '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore soluta amet perspiciatis cum nulla.
            </p>
            <p className='text-lg  text-white'>
                Clique abaixo e saiba mais
            </p>
            <Link className='bg-transparent text-white rounded-3xl py-2 w-[50%] text-xl text-center border-white border-2' href={'/'}>Produtos</Link>
        </div>
        
        </div>
       
    </Container>

    </section>
  )
}
