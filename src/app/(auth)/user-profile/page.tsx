'use client'
import { useCurrentUser } from '@/lib/hooks/useCurrentUser'
import { UserPageContent } from '@/utilities/UserPageContent'

export default function UserProfile() {
  const { data, isLoading, error } = useCurrentUser()

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (error) {
    // TODO When session expired, redirect to login page
    return <h3>Error: {error.message}</h3>
  }

  return (
    <div className='flex h-auto w-full flex-col items-center gap-y-4 rounded-3xl bg-white px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2'>
      <UserPageContent user={data} />
    </div>
  )
}
