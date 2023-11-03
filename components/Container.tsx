import {ReactNode} from 'react'

type Props ={
    children: ReactNode
}
export const Container = ({children}:Props) => {
  return (
    <div className='
    w-full
    h-full
    px-[20px] sm:px-10 xl:px-40 2xl:px-72
    '>{children}</div>
  )
}
