'use client'

import { routes } from '@/lib/consts/routes'
import { User } from '@/types'
import { logoutUser } from '@/services/logoutUser'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const UserPageContent = ({ user }: { user?: User }) => {
  const router = useRouter()

  const logoutMutation = useMutation({
    mutationFn: () => logoutUser(),
  })

  const handleLogout = async () => {
    try {
      logoutMutation.mutateAsync()

      router.push(routes.home)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <p>User profile</p>
      {user && <h3>Logged user email: {user.email}</h3>}
      <button onClick={handleLogout}>Wyloguj się</button>
    </>
  )
}
