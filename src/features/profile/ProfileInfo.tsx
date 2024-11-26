import {View, Text, ActivityIndicator, Image} from 'react-native'
import {useAuthContext} from '../../auth'
import {useQuery} from '@tanstack/react-query'
import {getMeInfo} from '../../api/me'

const ProfileInfo = () => {
  const {accessToken, logout} = useAuthContext()

  const {data, isLoading} = useQuery({
    queryKey: ['me'],
    queryFn: () => getMeInfo(accessToken),
  })

  if (!data || isLoading)
    return <ActivityIndicator size="large" className="m-8" />

  return (
    <View className="gap-4 mt-2">
      <Image src={data.images[0].url} className="size-60 rounded-full m-auto" />
      <Text className="text-spotify text-center text-3xl font-bold">
        {data.display_name}
      </Text>
      <Text className="border border-spotify text-spotify rounded-full  font-semibold w-32 text-center m-auto capitalize">
        {data.product} Tier
      </Text>
    </View>
  )
}

export default ProfileInfo
