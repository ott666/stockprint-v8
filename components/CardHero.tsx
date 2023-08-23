import Link from 'next/link'
import React from 'react'

export const CardHero = () => {
  return (
    <div className={
        `flex flex-col 
        gap-5 
        items-center
        bg-gray-200/90
        py-5
        px-2
        rounded-3xl
        shadow-2xl
        shadow-black
       
        max-w-[720px]
        w-full
        lg:w-[40%]
                  `}>
            <h1 className='text-2xl text-blue-700 font-bold lg:text-start md:text-2xl text-center lg:pl-3'>Trabalhamos com estas marcas</h1>
            <p className='text-lg lg:max-w-none text-black pl-2 '>
            Apresentamos um catálogo completo de impressoras de cartão, fitas ribbons, kits de limpeza, crachás e impressoras de etiqueta, proporcionando soluções abrangentes de impressão.
            </p>
            <p className='text-lg pl-2 text-black/70 self-start'>
                Clique abaixo e saiba mais
            </p>
            <Link className='bg-transparent text-blue-700 rounded-3xl py-2 w-[80%] max-w-[450px] self-center font-bold text-2xl text-center border-black bg-stone-200 border-2' href={'/'}>Produtos</Link>
        </div>
  )
}
