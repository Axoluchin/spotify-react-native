import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from '../pages/online'

const Stack = createNativeStackNavigator()

function StackOnline() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackOnline
