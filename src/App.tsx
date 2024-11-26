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
import AuthProvider from './auth/AuthContexts'

function App(): React.JSX.Element {
  const queryClient = new QueryClient()
  const themeScheme = useColorScheme()
  colorScheme.set(themeScheme || 'system')

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer
          theme={
            themeScheme === 'dark'
              ? {
                  ...DarkTheme,
                  colors: {...DarkTheme.colors, background: '#121212'},
                }
              : DefaultTheme
          }>
          <StatusBar
            backgroundColor={
              themeScheme === 'dark'
                ? '#121212'
                : DefaultTheme.colors.background
            }
            barStyle={themeScheme === 'dark' ? 'light-content' : 'dark-content'}
          />
          <TabNav />
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
