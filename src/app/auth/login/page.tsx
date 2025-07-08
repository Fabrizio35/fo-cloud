'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginFormData } from '@/schemas/login.schema'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function Login() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await signIn('credentials', {
        identifier: data.identifier,
        password: data.password,
        redirect: false,
      })

      if (response?.error) {
        if (response.error === 'No user found')
          toast.error(
            'No se encuentra un usuario con ese email o nombre de usuario'
          )

        if (response.error === 'Incorrect password')
          toast.error('Contraseña incorrecta')
      } else {
        toast.success('Bienvenido')
        router.push(ROUTES.HOME)
        router.refresh()
      }
    } catch (error: unknown) {
      if (error instanceof Error) toast.error(error.message)
      else toast.error('Error de conexión, intenta nuevamente')
    }
  })

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 items-center mt-5 max-w-md mx-auto"
      >
        <h2 className="text-third font-bold text-5xl">Iniciar Sesión</h2>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="text-third font-medium">
            Correo o nombre de usuario
          </label>

          <input
            id="identifier"
            type="text"
            placeholder="example@email.com"
            autoComplete="username"
            {...register('identifier')}
            className="bg-fourth/20 rounded-md px-2 py-3 border-[1px] border-fourth w-full text-third text-lg placeholder:text-second/40 outline-third"
          />

          {errors.identifier && (
            <span className="text-red-500 text-xs">
              {errors.identifier.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password" className="text-third font-medium">
            Contraseña
          </label>

          <input
            id="password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
            {...register('password')}
            className="bg-fourth/20 rounded-md px-2 py-3 border-[1px] border-fourth w-full text-third text-lg placeholder:text-second/40 outline-third"
          />

          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          disabled={!isValid || isSubmitting}
          className="bg-second text-first font-semibold text-lg py-3 rounded-sm cursor-pointer w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Iniciando...' : 'Iniciar sesión'}
        </button>
      </form>

      <div className="flex items-center gap-1 mx-auto mt-2 w-fit">
        <span className="text-third">¿Aún no tienes una cuenta?</span>
        <Link href={ROUTES.AUTH.REGISTER} className="text-second font-semibold">
          Registrarse
        </Link>
      </div>
    </>
  )
}
