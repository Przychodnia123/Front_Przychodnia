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
          }
        ]
      },
};

export default nextConfig;
