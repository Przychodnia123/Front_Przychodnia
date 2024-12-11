export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <section className='my-16 flex h-screen w-full items-center justify-center'>
      {children}
    </section>
  )
}
