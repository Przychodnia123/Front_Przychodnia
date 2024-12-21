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
};

export default nextConfig;
