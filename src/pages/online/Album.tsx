import {View, Text} from 'react-native'
import React from 'react'
import {PagesOnlineProps} from '../../navigation/StackOnline'

const Album = ({
  route: {
    params: {albumID},
  },
}: PagesOnlineProps) => {
  return (
    <View>
      <Text className="text-white">{albumID}</Text>
    </View>
  )
}

export default Album
