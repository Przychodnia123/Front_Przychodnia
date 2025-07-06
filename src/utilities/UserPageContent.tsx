'use client'

import { routes } from '@/lib/consts/routes'
import { logoutUser } from '@/services/logoutUser'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const UserPageContent = () => {
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
      <button onClick={handleLogout}>Wyloguj się</button>
    </>
  )
}
