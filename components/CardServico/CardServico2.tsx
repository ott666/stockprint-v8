import React from 'react'
import Image from 'next/image'
import { link } from 'fs'
import Link from 'next/link'

interface CardServicoProps{
    title:string
    text:string
    icon:string
    url:string
}

const CardServico = (props: CardServicoProps) => {
  return (
    
    <Link href={props.url} className={`
    h-full
    w-full
    py-5
    px-5
    rounded-3xl 
    text-white 
    bg-blue-900 
    gap-5

    flex align-start 
    font-sans
    `}> 
    <div className='absolute invisible md:visible flex h-[80px] border-2 border-white rounded-full overflow-hidden justify-center , md:relative w-[20%]'>

       <Image 
    src={props.icon}
    alt='icon'
    fill
    style={{objectFit:'contain'}}/>
    </div>
        <div className='flex flex-col md:w-[80%]'>
            <h2 className={`
            
            text-xl pb-2 lg:p-0  font-bold
            `}>{props.title}</h2>
            <p className={`
            text-lg text-start
            font-bolder
            lg:p-0`}>{props.text}</p>
        </div>

    </Link>
  )
}

export default CardServico