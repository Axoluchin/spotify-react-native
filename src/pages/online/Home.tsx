import {useState} from 'react'
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'
import {useQueries} from '@tanstack/react-query'

import {useAuthContext} from '../../auth'
import {getUserSavedAlbums} from '../../api/albums'
import {getUserPlaylists} from '../../api/playlists'
import {getUserRecentlyPlayed} from '../../api/tracks'
import {AlbumList} from '../../features/albums/'
import PlayListList from '../../features/playlist/PlayListList'
import TrackList from '../../features/tracks/TrackList'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  const {accessToken} = useAuthContext()
  const [
    {data: recentlyTracks, refetch: refetchRecentlyTracks},
    {data: albums, refetch: refetchAlbum},
    {data: playlists, refetch: refetchPlaylist},
  ] = useQueries({
    queries: [
      {
        queryKey: ['mePlaylist'],
        queryFn: () => getUserRecentlyPlayed(accessToken),
      },
      {
        queryKey: ['meAlbums'],
        queryFn: () => getUserSavedAlbums(accessToken),
      },
      {
        queryKey: ['meRecently'],
        queryFn: () => getUserPlaylists(accessToken),
      },
    ],
  })

  const onRefetch = async () => {
    setRefreshing(true)
    try {
      await refetchAlbum()
      await refetchPlaylist()
      await refetchRecentlyTracks()
    } catch (error) {
    } finally {
      setRefreshing(false)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefetch} />
        }>
        <View className="gap-4">
          <TrackList
            title="Recientemente reproducidos"
            tracks={recentlyTracks?.items.map(i => i.track) || []}
          />
          <AlbumList
            title="Tus albums guardados"
            albums={albums?.items.map(({album}) => album) || []}
          />
          <PlayListList
            title="Tus playlist"
            albums={playlists?.items.filter(n => n) || []}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
