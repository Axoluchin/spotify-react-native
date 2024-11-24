import React from 'react';
import {View, Text, Button, Linking} from 'react-native';
import requestAuth from '../../api/requestsAuth';

export default function LoginForm() {
  const onClick = () => {
    Linking.openURL(requestAuth);
  };

  return (
    <View className="bg-slate-600 p-8">
      <Text className="text-center">
        Inicia sesión para acceder al programa
      </Text>
      <Button onPress={onClick} title="Iniciar sesión" />
    </View>
  );
}
