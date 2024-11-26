import {View, Text, TouchableOpacity} from 'react-native'
import {useAuthContext} from '../../auth'

const Home = () => {
  const {isAuthenticated, logout} = useAuthContext()

  return (
    <View className="flex-1 justify-between">
      <Text className="dark:text-white text-5xl text-center font-bold m-4">
        Mi cuenta
      </Text>
      {!!isAuthenticated && (
        <TouchableOpacity
          onPress={logout}
          className="bg-red-900 m-4 p-4 rounded-full">
          <Text className="text-center text-white font-semibold text-xl">
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Home
