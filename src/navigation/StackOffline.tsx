import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from '../pages/offline'

const Stack = createNativeStackNavigator()

function StackOffline() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackOffline
