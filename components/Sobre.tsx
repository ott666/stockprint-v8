import { Container } from './Container'
import Image from 'next/image'
import React, {useState} from 'react'

export const Sobre = () => {

 
    return (
    <section id="sobre"
    className='h-100vh'>
        <Container>
            <div className='flex flex-col  bg-red-500 md:flex-row items-center'>
                <div id='parceiroGoldWrap'
                className={`
                    relative h-[400px] max-w-[330px] w-full bg-white
                `}>
                    <Image src={'/logos/hid_gold.svg'} alt='logo hidgold' fill={true} style={{objectFit:'contain'}}/>

                </div>
                <div id='contentSobre'
                className='flex flex-col w-full md:max-w-[50%]'>
                <h1 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae quaerat cumque!</h1>

                </div>
            </div>
        </Container>

    </section>
  )
}
