import {ReactNode} from 'react'

type Props ={
    children: ReactNode
}
export const Container = ({children}:Props) => {
  return (
    <div className='
    w-full
    h-full
    px-2 sm:px-10 2xl:px-80
    '>{children}</div>
  )
}
