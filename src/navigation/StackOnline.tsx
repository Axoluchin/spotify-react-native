import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import {Home} from '../pages/online'
import Album from '../pages/online/Album'

type OnlineStackParamList = {
  Home: undefined
  Album: {albumID: string}
}

export type StackOnlineProps = NativeStackNavigationProp<
  OnlineStackParamList,
  'Home'
>

export type PagesOnlineProps = NativeStackScreenProps<
  OnlineStackParamList,
  'Album'
>

const Stack = createNativeStackNavigator<OnlineStackParamList>()

function StackOnline() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Album" component={Album} />
    </Stack.Navigator>
  )
}

export default StackOnline
