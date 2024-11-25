import {View, Text} from 'react-native'
import React from 'react'
import {LoginForm} from '../../features/login'

const Login = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <LoginForm />
    </View>
  )
}

export default Login
