import React from 'react';

import {SafeAreaView, StatusBar, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Hola</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
