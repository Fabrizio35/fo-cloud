import NextAuth from 'next-auth'
import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from '@/libs/db'
import { User } from '@/types/user'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: {
          label: 'Email o nombre de usuario',
          type: 'text',
        },
        password: {
          label: 'Contraseña',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials, _req) {
        const userFound = await prisma.user.findFirst({
          where: {
            OR: [
              { email: credentials?.identifier },
              { username: credentials?.identifier },
            ],
          },
        })

        if (!userFound) throw new Error('No user found')

        const matchPassword = await bcrypt.compare(
          credentials?.password as string,
          userFound.password
        )

        if (!matchPassword) throw new Error('Incorrect password')

        return {
          id: userFound.id,
          email: userFound.email,
          username: userFound.username,
          createdAt: userFound.createdAt.toISOString(),
          updatedAt: userFound.updatedAt.toISOString(),
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id
      session.user.username = token.username
      session.user.createdAt = token.createdAt
      session.user.updatedAt = token.updatedAt
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as User

        token.id = customUser.id
        token.username = customUser.username
        token.email = customUser.email
        token.createdAt = customUser.createdAt
        token.updatedAt = customUser.updatedAt
      }

      return token
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
