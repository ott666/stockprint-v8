'use client'
import { HeroSection } from '@/components/HeroSection'
import { MarcasSection } from '@/components/MarcasSection'
import { Sobre } from '@/components/Sobre'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <MarcasSection/>
      <Sobre/>
    </main>
  )
}
