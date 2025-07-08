import { ROUTES } from '@/routes'
import { usePathname } from 'next/navigation'

interface SubmitButtonProps {
  isValid: boolean
  isSubmitting: boolean
}

const SubmitButton = ({ isSubmitting, isValid }: SubmitButtonProps) => {
  const pathname = usePathname()

  const isLoginPage = pathname === ROUTES.AUTH.LOGIN

  return (
    <button
      disabled={!isValid || isSubmitting}
      className="bg-second text-first font-semibold text-base sm:text-lg py-1 sm:py-3 rounded-sm cursor-pointer w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {isSubmitting
        ? 'Procesando...'
        : isLoginPage
        ? 'Iniciar sesión'
        : 'Registrarse'}
    </button>
  )
}

export default SubmitButton
