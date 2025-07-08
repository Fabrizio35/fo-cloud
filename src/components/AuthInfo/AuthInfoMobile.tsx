import { CloudIcon } from '@/icons'

const AuthInfoMobile = () => {
  return (
    <header className="flex lg:hidden flex-col items-center text-first select-none w-full bg-third p-3">
      <div className="flex items-center gap-1">
        <h1 className="font-black text-3xl">FO Cloud</h1>

        <CloudIcon className="size-12" />
      </div>

      <h2 className="text-first/90 text-center text-pretty">
        Subí y accedé a tus archivos de forma simple y segura desde cualquier
        lugar
      </h2>
    </header>
  )
}

export default AuthInfoMobile
