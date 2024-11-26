import React from 'react'
import {View, Text, Linking, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import requestAuth from '../../api/requestsAuth'

export default function LoginForm() {
  const onClick = () => {
    Linking.openURL(requestAuth)
  }

  return (
    <View className="bg-black border rounded-xl p-8 m-2 gap-8">
      <MaterialCommunityIcons
        name="spotify"
        color="#1ED760"
        className="m-auto"
        size={64}
      />
      <Text className="dark:text-white text-center text-4xl font-bold font-satochi">
        Inicia sesión en Spotify
      </Text>
      <TouchableOpacity
        className="bg-spotify p-4 rounded-full"
        onPress={onClick}>
        <Text className="text-center text-white font-semibold font-satochi text-2xl">
          Iniciar sesión
        </Text>
      </TouchableOpacity>
    </View>
  )
}
