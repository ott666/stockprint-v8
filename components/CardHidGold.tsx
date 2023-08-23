import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export const CardHidGold = () => {
  return (
    <div className={
        `flex flex-col 
        gap-5 
        items-center
        bg-blue-700/90
        py-5
        px-2
        rounded-3xl
        shadow-2xl
        shadow-black
       h-full
        max-w-[720px]
        w-full
        lg:w-[40%]
                  `}>
            <h1 className='text-2xl text-white font-bold lg:text-start md:text-2xl text-center '>Somos parceiros HID GOLD</h1>
            <p className='text-lg lg:max-w-none text-white/80 pl-2 '>
            Oferecemos os melhores preços em nossa linha de produtos, graças à nossa parceria com a HID Global. Isso nos permite fornecer soluções de impressão de alta qualidade a preços imbatíveis.
            </p>
            <div id='parceiroGoldWrap'
                                className={`
                                    relative h-full  w-full min-h-[170px] 
                                `}>
                                    <Image src={'/logos/hid_gold.svg'} alt='logo hidgold' fill={true} style={{objectFit:'contain'}}/>

                        </div>
            <p className='text-md italic pl-2 text-white/50 self-start'>
                No botão abaixo você confere nossa empresa no site do fabricante.
            </p>
            <Link className='bg-transparent text-white rounded-3xl py-2 w-[80%] max-w-[450px] self-center font-bold text-2xl text-center border-white border-2' href={'/'}>Saiba mais</Link>
        </div>
  )
}