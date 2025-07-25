'use client'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import { UserPageContent } from '@/utilities/UserPageContent'
import { useCurrentUser } from '@/lib/hooks/useCurrentUser'
import { routes } from '@/lib/consts/routes'

export default function UserProfile() {
  const router = useRouter()
  const { data, error, isPending } = useCurrentUser()

  if (error && !isPending) {
    toast.dismiss()
    toast.error(error.message, {
      duration: 2000,
    })
    if (error.cause === 401) {
      router.push(routes.signIn)
    }
  }

  return (
    <div className='flex h-auto w-full flex-col items-center gap-y-4 rounded-3xl bg-white px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2'>
      <UserPageContent user={data} />
    </div>
  )
}
