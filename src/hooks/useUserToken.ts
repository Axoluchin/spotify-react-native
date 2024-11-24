import {useEffect, useState} from 'react'
import * as Keychain from 'react-native-keychain'

const useUserToken = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState<string>()

  useEffect(() => {
    const getPassword = async () => {
      try {
        const result = await Keychain.getGenericPassword()
        if (result) {
          setUserToken(result.password)
        }
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }
    getPassword()
  }, [])

  const setToken = async (token: string) => {
    try {
      await Keychain.setGenericPassword('spotify', token)
      setUserToken(token)
      return true
    } catch (error) {
      return false
    }
  }

  const removeToken = async () => {
    try {
      await Keychain.resetGenericPassword()
      return true
    } catch (error) {
      return false
    }
  }

  return {isLoading, userToken, setToken, removeToken}
}

export default useUserToken
