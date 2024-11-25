import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import StackOffline from './StackOffline'
import StackOnline from './StackOnline'
import useUserToken from '../hooks/useUserToken'
import Login from '../pages/online/Login'

const Tab = createBottomTabNavigator()

function TabNav() {
  const {userToken} = useUserToken()
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = focused ? 'home' : 'home-outline'

          switch (route.name) {
            case 'Spotify':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'Perfil':
              iconName = focused ? 'person' : 'person-outline'
              break
            case 'Login':
              iconName = focused ? 'push' : 'push-outline'
              break
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#008839FF',
        headerShown: false,
      })}>
      {userToken ? (
        <Tab.Screen name="Spotify" component={StackOnline} />
      ) : (
        <Tab.Screen name="Login" component={Login} />
      )}
      <Tab.Screen name="Perfil" component={StackOffline} />
    </Tab.Navigator>
  )
}

export default TabNav
