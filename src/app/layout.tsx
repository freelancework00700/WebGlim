import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebGlim',
  description: 'Generated by WebBlim'  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={inter.className} style={{position: 'relative'}}>
        {children}
        <Toaster/>
        </body>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6LPQ391VTF"></script>
    </html>
  )
}
