import { Toaster } from 'react-hot-toast'

export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <section className='flex h-screen w-full items-center justify-center'>
      <Toaster />
      {children}
    </section>
  )
}
