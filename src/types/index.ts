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
