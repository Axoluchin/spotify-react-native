import {useEffect} from 'react'

import {SafeAreaView, Text, View, Linking} from 'react-native'

import {LoginForm} from '../../features/login'
import useUserToken from '../../hooks/useUserToken'

const useInitialURL = () => {
  const {isLoading, setToken, userToken} = useUserToken()

  useEffect(() => {
    const handleDeepLink = (props: {url: string}) => {
      const regex = /[?&]([^=#]+)=([^&#]*)/g
      const match = regex.exec(props.url)![2]
      setToken(match)
    }
    Linking.addEventListener('url', handleDeepLink)
  }, [])

  return {userToken, isLoading}
}

const Home = () => {
  const {userToken, isLoading} = useInitialURL()

  return (
    <SafeAreaView>
      <View>
        <Text className="font-bold text-4xl text-center dark:text-white text-black p-4 bg-emerald-400 m-8 rounded-xl">
          Spotify RN
        </Text>
        <View>
          <Text className="dark:text-emerald-400 text-white">{userToken}</Text>
          {isLoading && <Text>Cargando</Text>}
        </View>
      </View>
      {!userToken && <LoginForm />}
    </SafeAreaView>
  )
}

export default Home
