import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { CloudIcon } from '@/icons'
import Profile from './Profile/Profile'

const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <header className="bg-third py-3 px-5 w-full">
      {session?.user ? (
        <div className="flex items-center justify-between select-none">
          <div className="flex items-center gap-2 text-first">
            <h1 className="font-black text-3xl sm:text-4xl">FO Cloud</h1>

            <CloudIcon className="size-10 sm:size-12" />
          </div>

          <Profile />
        </div>
      ) : (
        <div className="flex flex-col items-center mx-auto select-none">
          <div className="flex items-center gap-2 text-first">
            <h1 className="font-black text-3xl sm:text-4xl">FO Cloud</h1>

            <CloudIcon className="size-10 sm:size-12" />
          </div>

          <h2 className="text-first/95 text-center text-xs sm:text-base text-pretty">
            Subí y accedé a tus archivos de forma simple y segura desde
            cualquier lugar
          </h2>
        </div>
      )}
    </header>
  )
}

export default Navbar
