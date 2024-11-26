import {createContext, useCallback, useEffect, useMemo, useReducer} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Keychain from 'react-native-keychain'

import {AuthContextProps, AuthContextValues, AuthStateType} from './interface'
import isExpiredTime from '../utils/isExpiredTime'

const initialState: AuthStateType = {
  isAuthenticated: false,
  accessToken: undefined,
}

function authReducer(state: AuthStateType, action: Partial<AuthStateType>) {
  return {
    ...state,
    ...action,
  }
}

export const AuthContext = createContext<AuthContextValues | null>(null)

const AuthProvider = ({children}: AuthContextProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const initialize = useCallback(async () => {
    try {
      const result = await Keychain.getGenericPassword()
      if (result) {
        const {password: accessToken} = result
        dispatch({
          accessToken,
          isAuthenticated: true,
        })
      }
    } catch (error) {
      console.error(error)
      dispatch({
        isAuthenticated: false,
      })
    }
  }, [])

  useEffect(() => {
    initialize()
  }, [initialize])

  const login = useCallback(async (token: string) => {
    try {
      await Keychain.setGenericPassword('spotify', token)
      dispatch({
        accessToken: token,
        isAuthenticated: true,
      })
      return true
    } catch (error) {
      console.error(error)
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      dispatch({
        accessToken: undefined,
        isAuthenticated: false,
      })
      await Keychain.resetGenericPassword()
    } catch (error) {
      console.error(error)
    }
  }, [])

  const memorizedValue = useMemo(
    () => ({
      isAuthenticated: state.isAuthenticated,
      accessToken: state.accessToken,
      login,
      logout,
    }),
    [state.accessToken, state.isAuthenticated, login, logout],
  )

  return (
    <AuthContext.Provider value={memorizedValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
