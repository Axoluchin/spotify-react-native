import {
  View,
  Text,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import {Album} from '../../api/interface'

export interface AlbumListProps {
  title: string
  albums: Album[]
}

const AlbumList = ({albums, title}: AlbumListProps) => {
  return (
    <View>
      <Text className="dark:text-white text-2xl font-satochi font-semibold mx-4 mb-2">
        {title}
      </Text>
      <FlatList
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 16,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={albums}
        keyExtractor={({id}) => id}
        renderItem={({item: {name, images, artists}}) => (
          <TouchableOpacity className="w-48 gap-2">
            <Image src={images[0].url} className="size-48 rounded-lg" />
            <Text
              textBreakStrategy="simple"
              numberOfLines={1}
              className="text-white font-satochi">
              {name}
            </Text>
            <Text className="text-secondary font-satochi">
              de {artists.map(({name}) => name)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default AlbumList
