import {useEffect} from 'react'
import useUserToken from './useUserToken'
import {Linking} from 'react-native'

const useDeepLink = () => {
  const {setToken} = useUserToken()

  useEffect(() => {
    const handleDeepLink = (props: {url: string}) => {
      const regex = /[?&]([^=#]+)=([^&#]*)/g
      const match = regex.exec(props.url)![2]
      setToken(match)
    }
    Linking.addEventListener('url', handleDeepLink)
  }, [])
}

export default useDeepLink
