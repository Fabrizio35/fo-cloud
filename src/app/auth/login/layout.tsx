import { Metadata } from 'next'
import AuthInfo from '@/components/AuthInfo/AuthInfo'

export const metadata: Metadata = {
  title: 'FO Cloud - Inicio de sesión',
  description: 'Página de inicio de sesión para FO Cloud',
}

export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">{children}</div>
      <AuthInfo />
    </div>
  )
}
