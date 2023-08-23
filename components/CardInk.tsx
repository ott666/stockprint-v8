import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export const CardInk = () => {
  return (
    <div className={
        `flex flex-col 
        gap-5
        pt-5
        items-center
        bg-black/40
        py-5
        lg:self-stretch
        px-2
        rounded-3xl
        shadow-2xl
        shadow-black
       relative
        max-w-[720px]
        w-full
        lg:w-[60%]
        justify-around
                  `}>
            <h1 className='text-2xl text-white font-bold lg:text-start md:text-2xl lg:text-3xl text-center capitalize w-full 2xl:text-center lg:pl-3'>O melhor preço do mercado</h1>
            <p className='text-lg lg:max-w-none text-white/80 pl-2 '>
           Conheça a HID FARGO INK1000, com impressões sem borda branca, não utiliza cabeça de impressão nem ribbon, apenas seu cartucho de tinta YMC.
            </p>
          
                                    <Image className='bg-blue-700' src={'/ink1000/ink10009.png'} alt='logo hidgold' fill={true} style={{objectFit:'cover', zIndex:-1, borderRadius:'16px'}}/>

                      
            <ul className='text-md italic flex flex-col gap-5 self-center px-2 rounded-2xl bg-black/50 py-2 pl-2 text-yellow-400/80 font-semibold '>
            <li>Licença Vitalícia Software Asure ID 7</li>
            <li>Impressora HID FARGO INK1000</li>
            <li>Acompanha cartucho color - YMC </li>
            <li>100 Cartões UltraCard</li>
            </ul>

            <p className='text-md italic pl-2 text-white/50 self-start'>
                Poucas unidades em estoque. Pacote por tempo limitado por apenas:
            </p>
            <Link className='bg-transparent text-white rounded-3xl py-2 w-[80%] max-w-[450px] self-center font-bold text-2xl text-center border-white border-2' href={'/'}>R$5.300,00</Link>
        </div>
  )
}
