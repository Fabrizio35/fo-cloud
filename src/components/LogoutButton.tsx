'use client'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <button
      className="bg-blue-500 px-5 py-2 text-white font-semibold cursor-pointer"
      onClick={() => signOut()}
    >
      Cerrar Sesión
    </button>
  )
}

export default LogoutButton
