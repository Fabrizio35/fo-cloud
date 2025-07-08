import { Metadata } from 'next'
import AuthInfo from '@/components/AuthInfo/AuthInfo'
import AuthInfoMobile from '@/components/AuthInfo/AuthInfoMobile'

export const metadata: Metadata = {
  title: 'FO Cloud - Registro',
  description: 'Página de registro para FO Cloud',
}

export default function RegisterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen">
      <AuthInfo />
      <div className="w-full lg:w-1/2 my-auto">{children}</div>
      <AuthInfoMobile />
    </div>
  )
}
