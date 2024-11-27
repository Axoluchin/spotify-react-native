import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {PagesOnlineProps} from '../../navigation/StackOnline'
import {useAuthContext} from '../../auth'
import {useQuery} from '@tanstack/react-query'
import {getAlbum} from '../../api/albums'
import usePlayerContext from '../../features/player/usePlayerContext'

const Album = ({
  route: {
    params: {albumID},
  },
}: PagesOnlineProps) => {
  const {accessToken} = useAuthContext()
  const {setMusic} = usePlayerContext()
  const {data, isLoading, isRefetching} = useQuery({
    queryKey: ['singleAlbum', accessToken],
    queryFn: () => getAlbum(albumID, accessToken),
  })

  if (isLoading || !data || isRefetching) return <ActivityIndicator />

  return (
    <ScrollView>
      <View className="m-4">
        <View className="gap-4 my-4">
          <Image
            src={data.images[0].url}
            className="size-64 m-auto rounded-xl"
          />
          <Text className="dark:text-white font-satochi font-semibold text-center text-2xl">
            {data.name}
          </Text>
          <View className="flex-row items-center gap-4">
            <Text className="dark:text-white font-satochi text-lg">
              {data.artists.map(art => art.name)}
            </Text>
            <Text className="dark:text-secondary font-satochi text-lg">
              {data.total_tracks} canciones
            </Text>
            <Text className="text-secondary font-satochi text-lg">
              {data.release_date}
            </Text>
          </View>
        </View>
        {data.tracks.items.map(({name, id, artists, preview_url, ...props}) => (
          <TouchableOpacity
            onPress={() => {
              setMusic({
                name,
                id,
                artists,
                preview_url,
                ...props,
              })
            }}
            className="flex-row gap-4 items-center py-1"
            key={id}>
            <Image src={data.images[0].url} className="size-16" />
            <View className="flex-1 gap-2">
              <Text
                lineBreakStrategyIOS="standard"
                numberOfLines={1}
                className="text-white font-satochi text-lg">
                {name}
              </Text>
              <Text className="text-secondary font-satochi">
                {artists.map(
                  ({name}, index) =>
                    `${name}${index < artists.length - 1 ? ', ' : ''}`,
                )}
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal-sharp"
                color="#898989"
                size={24}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default Album
