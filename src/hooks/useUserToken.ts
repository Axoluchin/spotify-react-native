import {useQuery, useQueryClient} from '@tanstack/react-query'
import * as Keychain from 'react-native-keychain'

const useUserToken = () => {
  const {invalidateQueries} = useQueryClient()

  const {data, isLoading} = useQuery({
    queryKey: ['userToken'],
    queryFn: async () => {
      try {
        const result = await Keychain.getGenericPassword()
        return {
          userToken: result ? result.password : undefined,
          refreshToken: undefined,
        }
      } catch (error) {
        return {
          userToken: undefined,
          refreshToken: undefined,
        }
      }
    },
  })

  const setToken = async (token: string) => {
    try {
      await Keychain.setGenericPassword('spotify', token)
      invalidateQueries({queryKey: ['userToken']})
      return true
    } catch (error) {
      return false
    }
  }

  const removeToken = async () => {
    try {
      await Keychain.resetGenericPassword()
      invalidateQueries({queryKey: ['userToken']})
      return true
    } catch (error) {
      return false
    }
  }

  return {
    isLoading,
    userToken: data?.userToken,
    refreshToken: data?.refreshToken,
    setToken,
    removeToken,
  }
}

export default useUserToken
