import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FO Cloud',
  description:
    'Subí y accedé a tus archivos de forma simple y segura desde cualquier lugar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-first`}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              backgroundColor: '#c9356c',
              color: '#fafafa',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              fontSize: '1.5rem',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
