export const routes = {
  home: '/',
  signUp: '/rejestracja',
  signIn: '/logowanie',
  userProfile: '/profil',
  about: '/o-nas',
  services: '/uslugi',
  news: '/aktualnosci',
  contact: '/kontakt',
  privacyPolicy: '/polityka-prywatnosci',
  termsAndConditions: '/regulamin',
} as const

export type AppRoutes = typeof routes
