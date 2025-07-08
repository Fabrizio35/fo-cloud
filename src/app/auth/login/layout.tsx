import { Metadata } from 'next'
import AuthInfo from '@/components/AuthInfo/AuthInfo'
import AuthInfoMobile from '@/components/AuthInfo/AuthInfoMobile'

export const metadata: Metadata = {
  title: 'FO Cloud - Inicio de sesión',
  description: 'Página de inicio de sesión para FO Cloud',
}

export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AuthInfoMobile />
      <div className="w-full lg:w-1/2 my-auto">{children}</div>
      <AuthInfo />
    </div>
  )
}
