export type ApiError = {
  msg: string
}

export type User = {
  email: string
  is_staff: boolean
  last_login: Date
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

export type RegisterResponse = {
  msg: string
}

export type LoginData = {
  email: string
  password: string
}

export type LoginResponse = {
  access_token: string
  msg: string
  refresh_token: string
}
