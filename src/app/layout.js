'use client'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <ThemeProvider enableSystem={true} attribute='class'>
        {children}
      </ThemeProvider>
    </body>
  </html>
  )
}
