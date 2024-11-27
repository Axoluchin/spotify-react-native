import {createContext, useEffect, useMemo, useState} from 'react'
import Sound from 'react-native-sound'

import {PlayerContextProps, PlayerProviderProps} from './interfaces'
import {Track} from '../../api/interface'

export const PlayerContext = createContext<PlayerContextProps | null>(null)

const PlayerProvider = ({children}: PlayerProviderProps) => {
  const [track, setTrack] = useState<Partial<Track>>()
  const [player, setPlayer] = useState<Sound>()
  const [isPlaying, setIsPlaying] = useState(false)
  const duration = 29.7

  const setMusic = async (theme: Track) => {
    player?.stop()

    if (!theme.preview_url) {
      console.warn('No preview URL')
      return
    }
    const music = new Sound(theme.preview_url, Sound.MAIN_BUNDLE, error => {
      if (error) console.error(error)
      music.play(success => setIsPlaying(false))
    })
    setTrack(theme)
    setIsPlaying(true)
    setPlayer(music)
  }

  const onPlay = () => {
    player?.play(() => setIsPlaying(false))
    setIsPlaying(true)
  }
  const onStop = () => {
    player?.pause(() => setIsPlaying(false))
  }
  const onSetTime = (n: number) => {
    player?.setCurrentTime(n)
  }

  const onClose = () => {
    player?.stop()
    player?.release()
    setPlayer(undefined)
  }

  const memorizedValue = useMemo(
    () => ({
      player,
      isPlaying,
      duration,
      track,
      onPlay,
      onStop,
      onClose,
      setMusic,
      onSetTime,
    }),
    [
      player,
      isPlaying,
      duration,
      track,
      onPlay,
      onStop,
      onClose,
      setMusic,
      onSetTime,
    ],
  )

  return (
    <PlayerContext.Provider value={memorizedValue}>
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerProvider
