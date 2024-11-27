import React, {useState} from 'react'
import Slider from '@react-native-community/slider'

import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import usePlayerContext from './usePlayerContext'

const PreviewPlayer = () => {
  const [seconds, setSeconds] = useState(0)
  const {width} = useWindowDimensions()
  const {player, track, duration, isPlaying, onPlay, onStop, onSetTime} =
    usePlayerContext()

  if (!player) return null

  return (
    <View className="absolute bottom-20">
      <TouchableOpacity
        activeOpacity={0.9}
        className="bg-gray-700 rounded-xl"
        style={{width: width - 20, marginHorizontal: 10}}>
        <View className="flex-row items-center gap-4 p-3 pb-0">
          <Image
            src={track?.album.images[0].url}
            className="bg-spotify size-11 rounded-lg"
          />
          <View className="gap-1 flex-1">
            <Text className="text-white font-satochi">{track?.name}</Text>
            <Text className="text-secondary  font-satochi">
              {track?.artists.map(({name}) => name)}
            </Text>
          </View>
          <TouchableOpacity onPress={isPlaying ? onStop : onPlay}>
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={36}
              color="#898989"
            />
          </TouchableOpacity>
        </View>
        <View
          className="mt-2
        ">
          <Slider
            style={{width: '100%', height: 5}}
            value={seconds}
            minimumValue={0}
            maximumValue={duration}
            minimumTrackTintColor="#1ED760"
            maximumTrackTintColor="#1ED760"
            onValueChange={n => {
              onSetTime(n)
              setSeconds(n)
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PreviewPlayer
