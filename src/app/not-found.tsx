import { NotFoundIcon } from '@/icons'
import BackButton from '@/components/BackButton'

export default function Custom400() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center gap-10 max-w-4xl">
        <NotFoundIcon className="size-[500px] text-third" />

        <h2 className="text-5xl font-bold text-third">
          Parece que la página que buscas no existe
        </h2>
      </div>

      <BackButton />
    </div>
  )
}
