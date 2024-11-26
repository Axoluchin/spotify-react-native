import {View, Text, ActivityIndicator, Image, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useQuery} from '@tanstack/react-query'

import {getMeInfo} from '../../api/me'
import {useAuthContext} from '../../auth'

const ProfileInfo = () => {
  const {accessToken, logout} = useAuthContext()

  const {data, isLoading} = useQuery({
    queryKey: ['me'],
    queryFn: () => getMeInfo(accessToken),
  })

  if (!data || isLoading)
    return <ActivityIndicator size="large" className="m-8" />

  return (
    <ScrollView className="mx-4">
      <View className="gap-4">
        <LinearGradient
          colors={['#2A1ED73D', '#1ED75F00']}
          className="flex-row gap-4 border border-tertiary/50 rounded-xl p-6 overflow-hidden">
          <Image
            src={data.images[0].url}
            className="size-32 rounded-full m-auto"
          />
          <View className="flex-1">
            <Text className="dark:text-white text-3xl font-bold">
              {data.display_name}
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={['#1ED75F3D', '#1ED75F00']}
          className="gap-4 border border-tertiary/50 rounded-xl p-6 overflow-hidden">
          <View className="flex-row items-center gap-3">
            <MaterialCommunityIcons
              name="spotify"
              color="#1ED760"
              size={32}
              className="w-10"
            />
            <Text className="text-white text-lg">Plan Actual</Text>
          </View>
          <Text className=" text-spotify capitalize text-3xl">
            {data.product}
          </Text>
        </LinearGradient>
      </View>
    </ScrollView>
  )
}

export default ProfileInfo
