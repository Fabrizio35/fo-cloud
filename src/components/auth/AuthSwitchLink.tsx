import { ROUTES } from '@/routes'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const AuthSwitchLink = () => {
  const pathname = usePathname()

  const isLoginPage = pathname === ROUTES.AUTH.LOGIN

  return (
    <div className="flex items-center gap-1 mx-auto mt-2 w-fit text-sm sm:text-base">
      <span className="text-third">
        {isLoginPage ? '¿Aún no tienes una cuenta?' : '¿Ya tienes una cuenta?'}
      </span>
      <Link
        href={isLoginPage ? ROUTES.AUTH.REGISTER : ROUTES.AUTH.LOGIN}
        className="text-second font-semibold"
      >
        {isLoginPage ? 'Registrarse' : 'Iniciar sesión'}
      </Link>
    </div>
  )
}

export default AuthSwitchLink
