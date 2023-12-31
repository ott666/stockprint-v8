'use client'
import Image from 'next/image'
import React, {useState} from 'react'

interface PropsCardMarca{
    marca:string
}

export const CardMarca = ({marca}:PropsCardMarca) => {
    
    return (
    
    <div className='
    w-full
    max-w-[350px]
    h-full
    max-h-[200px]
    relative
    border-black
    bg-white
    border
    rounded-3xl
    '
    >
        <Image src={`/logos/${marca}2.svg`} alt={`logo-${marca}`} fill={true} style={{objectFit:'contain'}}/>
    </div>
  )
}
