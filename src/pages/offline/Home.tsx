import {View, Text, TouchableOpacity} from 'react-native'
import {useAuthContext} from '../../auth'
import {ProfileInfo} from '../../features/profile'

const Home = () => {
  const {isAuthenticated, logout} = useAuthContext()

  return (
    <View className="flex-1 justify-between">
      {isAuthenticated ? (
        <ProfileInfo />
      ) : (
        <View>
          <Text className="dark:text-white text-5xl text-center font-bold m-4 font-satochi">
            Mi cuenta
          </Text>
          <Text className="text-secondary text-center font-satochi">
            Inicia sesión para obtener información de tu cuenta
          </Text>
        </View>
      )}
      {!!isAuthenticated && (
        <TouchableOpacity
          onPress={logout}
          className="bg-red-900 m-4 p-4 rounded-full">
          <Text className="text-center text-white font-semibold text-xl font-satochi">
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Home
