export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      {children}
    </section>
  );
}
