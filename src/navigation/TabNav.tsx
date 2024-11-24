import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import StackOffline from './StackOffline'
import StackOnline from './StackOnline'

const Tab = createBottomTabNavigator()

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home'

          if (route.name === 'Spotify') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#008839FF',
        headerShown: false,
      })}>
      <Tab.Screen name="Spotify" component={StackOnline} />
      <Tab.Screen name="Perfil" component={StackOffline} />
    </Tab.Navigator>
  )
}

export default TabNav
