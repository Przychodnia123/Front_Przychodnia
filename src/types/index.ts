export type ApiError = {
  msg: string
}

export type User = {
  email: string
  username: string
  dateJoined: string
  firstName: string
  isActive: boolean
  isSuperuser: boolean
  lastLogin: string
  lastName: string
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
