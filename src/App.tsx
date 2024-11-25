import './styles/global.css'

import {StatusBar, useColorScheme} from 'react-native'
import {colorScheme} from 'nativewind'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {TabNav} from './navigation'
import useDeepLink from './hooks/useDeepLink'

const queryClient = new QueryClient()

function App(): React.JSX.Element {
  const themeScheme = useColorScheme()
  colorScheme.set(themeScheme || 'system')

  useDeepLink()

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        backgroundColor={
          (themeScheme === 'dark' ? DarkTheme : DefaultTheme).colors.card
        }
        barStyle={themeScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer
        theme={themeScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <TabNav />
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App
