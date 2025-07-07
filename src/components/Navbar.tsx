import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import LogoutButton from './LogoutButton'

const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return <header>{session?.user && <LogoutButton />}</header>
}

export default Navbar
