/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/logowanie',
        destination: '/sign-in',
      },
      {
        source: '/rejestracja',
        destination: '/sign-up',
      },
      {
        source: '/reset-hasla',
        destination: '/reset-password',
      },
      {
        source: '/reset-hasla/weryfikacja-kodu',
        destination: '/reset-password/verify-code',
      },
      {
        source: '/reset-hasla/potwierdzenie-hasla',
        destination: '/reset-password/confirm',
      },
      {
        source: '/profil',
        destination: '/user-profile',
      },
      {
        source: '/o-nas',
        destination: '/about',
      },
      {
        source: '/uslugi',
        destination: '/services',
      },
      {
        source: '/aktualnosci',
        destination: '/news',
      },
      {
        source: '/kontakt',
        destination: '/contact',
      },
      {
        source: '/polityka-prywatnosci',
        destination: '/privacy-policy',
      },
      {
        source: '/regulamin',
        destination: '/terms-and-conditions',
      },
    ]
  },
}

export default nextConfig
