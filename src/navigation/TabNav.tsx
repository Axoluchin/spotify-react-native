import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import StackOffline from './StackOffline'
import StackOnline from './StackOnline'

const Tab = createBottomTabNavigator()

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Spotify" component={StackOnline} />
      <Tab.Screen name="Perfil" component={StackOffline} />
    </Tab.Navigator>
  )
}

export default TabNav
