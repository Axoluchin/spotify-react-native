import './styles/global.css'

import {Button, StatusBar, useColorScheme} from 'react-native'
import {colorScheme} from 'nativewind'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {TabNav} from './navigation'
import AuthProvider from './auth/AuthContexts'
import PlayerProvider from './features/player/PlayerContext'
import {PreviewPlayer} from './features/player'

function App(): React.JSX.Element {
  const queryClient = new QueryClient()
  const themeScheme = useColorScheme()
  colorScheme.set(themeScheme || 'system')

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PlayerProvider>
          <NavigationContainer
            theme={
              themeScheme === 'dark'
                ? {
                    ...DarkTheme,
                    colors: {...DarkTheme.colors, background: '#111111'},
                  }
                : DefaultTheme
            }>
            <StatusBar
              backgroundColor={
                themeScheme === 'dark'
                  ? '#111111'
                  : DefaultTheme.colors.background
              }
              barStyle={
                themeScheme === 'dark' ? 'light-content' : 'dark-content'
              }
            />
            <TabNav />
            <PreviewPlayer />
          </NavigationContainer>
        </PlayerProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
