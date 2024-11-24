import './styles/global.css';

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {colorScheme} from 'nativewind';

function App(): React.JSX.Element {
  const themeScheme = useColorScheme();
  colorScheme.set(themeScheme || 'system');

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text className="font-bold text-4xl text-center dark:text-white text-black p-4 bg-emerald-400 m-8 rounded-xl">
          Spotify RN
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
