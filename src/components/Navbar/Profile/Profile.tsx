import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import ProfileButton from './ProfileButton'

const Profile = async () => {
  const session = await getServerSession(authOptions)

  return <ProfileButton username={session?.user?.username} />
}

export default Profile
