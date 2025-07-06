export type ApiError = {
  msg: string
}

export type User = {
  email: string
  is_staff: boolean
  last_login: string
  to_accept_staff: boolean
  username: string
}

export type RegisterData = {
  email: string
  first_name: string
  last_name: string
  password: string
  username: string
}

export type AuthResponse = {
  msg: string
}

export type LoginData = {
  value: string
  password: string
}
