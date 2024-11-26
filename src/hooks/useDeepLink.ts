import {useEffect} from 'react'
import {Linking} from 'react-native'
import {useAuthContext} from '../auth'

const useDeepLink = () => {
  const {login} = useAuthContext()

  useEffect(() => {
    const handleDeepLink = (props: {url: string}) => {
      const regex = /access_token=([^&]+)/
      const match = props.url.match(regex)
      login(match![1])
    }
    Linking.addEventListener('url', handleDeepLink)
  }, [])
}

export default useDeepLink
