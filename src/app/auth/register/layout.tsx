import { Metadata } from 'next'
import AuthInfo from '@/components/AuthInfo/AuthInfo'

export const metadata: Metadata = {
  title: 'FO Cloud - Registro',
  description: 'Página de registro para FO Cloud',
}

export default function RegisterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen">
      <AuthInfo />
      <div className="w-1/2 my-auto">{children}</div>
    </div>
  )
}
