import { Container } from './Container'
import Image from 'next/image'
import React, {useState} from 'react'
import { CardHidGold } from './CardHidGold'
import Cardbundle from './Produtos/CardBundle/CardBundle'
import Produtos from '@/data/products.json'
import { CardInk } from './CardInk'

export const Sobre = () => {
   
    return (
    <section id="sobre"
    className='h-100vh py-10'>
        <Container>
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-5 flex-col-reverse items-center  lg:flex-row-reverse '>
                    <CardHidGold/>
                    
                    <CardInk/>
                    </div>
                </div>
            
            
         
        </Container>

    </section>
  )
}
