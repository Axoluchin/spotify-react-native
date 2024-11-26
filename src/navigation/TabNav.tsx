import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Login from '../pages/online/Login'
import useDeepLink from '../hooks/useDeepLink'
import {useAuthContext} from '../auth'

import StackOnline from './StackOnline'
import StackOffline from './StackOffline'

const Tab = createBottomTabNavigator()

function TabNav() {
  const {isAuthenticated} = useAuthContext()
  useDeepLink()

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontFamily: 'Satochi',
        },
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
        tabBarActiveTintColor: '#1ED760',
        headerShown: false,
      })}>
      {isAuthenticated ? (
        <Tab.Screen name="Spotify" component={StackOnline} />
      ) : (
        <Tab.Screen name="Login" component={Login} />
      )}
      <Tab.Screen name="Perfil" component={StackOffline} />
    </Tab.Navigator>
  )
}

export default TabNav
