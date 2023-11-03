import React from 'react'
import { CardMarca } from './CardMarca'

export const GridMarcas = () => {
  return (
    <div id='gridMarcas' 
    className={`
    gap-3
    px-2 
        grid
        grid-cols-1 grid-rows-4
            sm:grid-cols-2 sm:grid-rows-2

    h-[500px]
        sm:h-[270px]
        lg:h-[400px]]

    w-full  
        lg:w-[60%]

    max-w-[330px] 
        sm:max-w-none  
   `}>
        <CardMarca marca='evolis'/>
        <CardMarca marca='entrust' />
        <CardMarca marca='zebra' />
        <CardMarca marca='hid'/>
    </div>

  )
}
