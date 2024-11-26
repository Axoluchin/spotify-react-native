export interface AuthStateType {
  isAuthenticated: boolean
  accessToken: string | undefined
}

export interface AuthContextProps {
  children: React.ReactNode
}

export interface AuthContextValues {
  accessToken: string | undefined
  isAuthenticated: boolean
  login: (code: string) => void
  logout: () => void
}
