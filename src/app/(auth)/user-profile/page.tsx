import { UserPageContent } from '@/utilities/UserPageContent'

export default async function UserProfile() {
  // TODO: handle no user

  // const user = await getUserFromBackend()

  // if (!user) {
  //   console.log('Unauthorized!!')
  //   redirect(routes.signIn)
  // }

  return (
    <div className='flex h-auto w-full flex-col items-center gap-y-4 rounded-3xl bg-white px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2'>
      <UserPageContent />
    </div>
  )
}
