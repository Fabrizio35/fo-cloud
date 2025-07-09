'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginFormData } from '@/schemas/login.schema'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'
import toast from 'react-hot-toast'
import AuthSwitchLink from '@/components/auth/AuthSwitchLink'
import SubmitButton from '@/components/auth/SubmitButton'
import FormField from '@/components/auth/FormField'
import AuthTitle from '@/components/auth/AuthTitle'

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
        router.push(ROUTES.DASHBOARD)
        router.refresh()
      }
    } catch (error: unknown) {
      if (error instanceof Error) toast.error(error.message)
      else toast.error('Error de conexión, intenta nuevamente')
    }
  })

  return (
    <div className="px-5 my-10">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 items-center mt-5 max-w-md mx-auto"
      >
        <AuthTitle title="Iniciar sesión" />

        <FormField
          label="Correo o nombre de usuario"
          type="text"
          placeholder="example@email.com"
          autoComplete="username"
          {...register('identifier')}
          error={errors.identifier}
        />

        <FormField
          label="Contraseña"
          type="password"
          placeholder="********"
          autoComplete="current-password"
          {...register('password')}
          error={errors.password}
        />

        <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
      </form>

      <AuthSwitchLink />
    </div>
  )
}
