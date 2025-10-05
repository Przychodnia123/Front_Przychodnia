export const routes = {
  home: '/',
  signUp: '/rejestracja',
  signIn: '/logowanie',
  resetPassword: '/reset-hasla',
  resetPasswordVerifyCode: '/reset-hasla/weryfikacja-kodu',
  resetPasswordConfirm: '/reset-hasla/potwierdzenie-hasla',
  userProfile: '/profil',
  about: '/o-nas',
  services: '/uslugi',
  news: '/aktualnosci',
  contact: '/kontakt',
  privacyPolicy: '/polityka-prywatnosci',
  termsAndConditions: '/regulamin',
} as const

export type AppRoutes = typeof routes
