'use client'
import { HeroSection } from '@/components/HeroSection'
import { MarcasSection } from '@/components/MarcasSection'
import { ProdutosSection } from '@/components/ProdutosSection'
import  ServicosSection from '@/components/ServicosSection'
import { Sobre } from '@/components/Sobre'
import TransitionEffect from '@/components/layoutComponents/TransitionEffect/TransitionEffect'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <TransitionEffect/>
      <HeroSection/>
      <MarcasSection/>
      <Sobre/>
      <ProdutosSection/>
      <ServicosSection/>
    </main>
  )
}
