import React from 'react'
import {View, Text, Linking, TouchableOpacity} from 'react-native'
import requestAuth from '../../api/requestsAuth'

export default function LoginForm() {
  const onClick = () => {
    Linking.openURL(requestAuth)
  }

  return (
    <View className="bg-black border border-slate-900 rounded-xl p-8 m-2 gap-8">
      <Text className="dark:text-white text-center text-4xl font-bold">
        Inicia sesión en Spotify
      </Text>
      <TouchableOpacity
        className="bg-emerald-500 p-4 rounded-full"
        onPress={onClick}>
        <Text className="text-center text-white font-semibold text-2xl">
          Iniciar sesión
        </Text>
      </TouchableOpacity>
    </View>
  )
}
