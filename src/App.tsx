import './styles/global.css';

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Linking,
  Alert,
} from 'react-native';
import {colorScheme} from 'nativewind';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SPOTIFY_TOKEN, SPOTIFY_URI} from './global-config';
import {LoginForm} from './features/login';

const queryClient = new QueryClient();

const useInitialURL = () => {
  const [url, setUrl] = useState('None');

  useEffect(() => {
    const handleDeepLink = (props: {url: string}) => {
      const params = new URL(props.url).searchParams.get('code') || 'Nada';
      Alert.alert(params);
      setUrl(props.url);
    };

    Linking.addEventListener('url', handleDeepLink);
  }, [url]);

  return {url};
};

function App(): React.JSX.Element {
  const themeScheme = useColorScheme();
  colorScheme.set(themeScheme || 'system');

  const {url: initialUrl} = useInitialURL();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <StatusBar />
        <View>
          <Text className="font-bold text-4xl text-center dark:text-white text-black p-4 bg-emerald-400 m-8 rounded-xl">
            Spotify RN
          </Text>
          <View className="bg-white">
            <Text>{SPOTIFY_TOKEN}</Text>
            <Text>{SPOTIFY_URI}</Text>
            <Text>{initialUrl}</Text>
          </View>
        </View>
        <LoginForm />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
