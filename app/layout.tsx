import { Header } from '@/components/layoutComponents/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Footer from '@/components/layoutComponents/Footer/Footer'
import { Analytics } from '@vercel/analytics/react';
import { WhatsappButton } from '@/components/WhatsappButton'

const inter = Inter({ subsets: ['latin'], weight:["100","200",'300','400','500','600','700'] })
const poppins = Poppins({ subsets: ['latin'], weight:["100","200",'300','400','500','600','700'], variable:'--font-poppins' })

export const metadata: Metadata = {
  title: 'Stockprint',
  description: 'Cards & Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}` }>
        <Header/>
        <WhatsappButton/>
        {children}
        <Footer/>
        </body>
        <Analytics />

    </html>
  )
}
