import './globals.css'
import { Gabarito } from 'next/font/google'
import Navbar from '@/components/AnimeContent/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'INime',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-secondary text-color-primary`}>
        <Navbar title="INime | Website Anime Indonesia" />
        {children}
      </body>
    </html>
  )
}
