import { Footer } from '@utilities/Footer'
import { Navigation } from '@utilities/Navigation'

export default async function WebSiteLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
