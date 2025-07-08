'use client'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <button
      className="text-second font-semibold cursor-pointer hover:underline"
      onClick={() => signOut()}
    >
      Cerrar Sesión
    </button>
  )
}

export default LogoutButton
