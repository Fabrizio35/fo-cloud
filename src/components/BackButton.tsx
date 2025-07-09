'use client'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="text-third font-semibold text-2xl hover:underline cursor-pointer"
    >
      Volver
    </button>
  )
}

export default BackButton
