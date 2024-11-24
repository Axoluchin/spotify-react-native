import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from '../pages/offline'

const Stack = createNativeStackNavigator()

function StackOffline() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackOffline
