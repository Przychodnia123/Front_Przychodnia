export const routes = {
  home: '/',
  signUp: '/rejestracja',
  signIn: '/logowanie',
  about: '/about',
  services: '/services',
  news: '/news',
  contact: '/contact',
  privacyPolicy: '/privacy-policy',
  termsAndConditions: '/terms-and-conditions',
} as const

export type AppRoutes = typeof routes
