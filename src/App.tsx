import './styles/global.css';

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Linking,
} from 'react-native';
import {colorScheme} from 'nativewind';
import {SPOTIFY_TOKEN, SPOTIFY_URI} from './global-config';

const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  }, []);

  return {url, processing};
};

function App(): React.JSX.Element {
  const themeScheme = useColorScheme();
  colorScheme.set(themeScheme || 'system');
  const {url: initialUrl, processing} = useInitialURL();

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text className="font-bold text-4xl text-center dark:text-white text-black p-4 bg-emerald-400 m-8 rounded-xl">
          Spotify RN
        </Text>
        <View className="bg-white">
          <Text>{SPOTIFY_TOKEN}</Text>
          <Text>{SPOTIFY_URI}</Text>
          {processing && <Text>{initialUrl}</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
