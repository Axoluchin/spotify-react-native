import {SafeAreaView, ScrollView, Text, View} from 'react-native'
import AlbumList from '../../features/albums/AlbumList'
import {useQuery} from '@tanstack/react-query'
import {getUserSavedAlbums} from '../../api/albums'
import {useAuthContext} from '../../auth'

const Home = () => {
  const {accessToken} = useAuthContext()
  const {data, isLoading} = useQuery({
    queryKey: ['meAlbums'],
    queryFn: () => getUserSavedAlbums(accessToken),
  })
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="">
          <AlbumList
            title="Tus albums guardados"
            albums={data?.items.map(({album}) => album) || []}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
