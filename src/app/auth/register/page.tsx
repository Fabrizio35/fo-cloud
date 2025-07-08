'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, RegisterFormData } from '@/schemas/register.schema'
import { useRouter } from 'next/navigation'
import { API_ROUTES, ROUTES } from '@/routes'
import { apiClient } from '@/apiClient'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await apiClient(API_ROUTES.AUTH.REGISTER, 'POST', data)

      if (response.ok && response.status === 201) {
        reset()
        toast.success('Usuario creado correctamente')
        router.push(ROUTES.AUTH.LOGIN)
      } else {
        if (response.status === 409)
          toast.error('El email o el nombre de usuario ya están registrados')
        else toast.error('Error al registrar usuario')
      }
    } catch (error: unknown) {
      if (error instanceof Error) toast.error(error.message)
      else toast.error('Error de conexión, intenta nuevamente')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 items-center mt-5 max-w-md mx-auto"
      >
        <h2 className="text-third font-bold text-5xl">Registro</h2>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="username" className="text-third font-medium">
            Nombre de usuario
          </label>

          <input
            id="username"
            type="text"
            placeholder="miUsuario123"
            autoComplete="username"
            {...register('username')}
            className="bg-fourth/20 rounded-md px-2 py-3 border-[1px] border-fourth w-full text-third text-lg placeholder:text-second/40 outline-third"
          />

          {errors.username && (
            <span className="text-red-500 text-xs">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="text-third font-medium">
            Correo
          </label>

          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            autoComplete="email"
            {...register('email')}
            className="bg-fourth/20 rounded-md px-2 py-3 border-[1px] border-fourth w-full text-third text-lg placeholder:text-second/40 outline-third"
          />

          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
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
            autoComplete="new-password"
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
          {isSubmitting ? 'Registrando...' : 'Registrar'}
        </button>
      </form>

      <div className="flex items-center gap-1 mx-auto mt-2 w-fit">
        <span className="text-third">¿Ya tienes una cuenta?</span>
        <Link href={ROUTES.AUTH.LOGIN} className="text-second font-semibold">
          Iniciar sesión
        </Link>
      </div>
    </>
  )
}
