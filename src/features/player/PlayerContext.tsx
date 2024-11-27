import {createContext, useEffect, useMemo, useState} from 'react'
import Sound from 'react-native-sound'

import {PlayerContextProps, PlayerProviderProps} from './interfaces'
import {Track} from '../../api/interface'

export const PlayerContext = createContext<PlayerContextProps | null>(null)

const PlayerProvider = ({children}: PlayerProviderProps) => {
  const [track, setTrack] = useState<Track>()
  const [player, setPlayer] = useState<Sound>()
  const [isPlaying, setIsPlaying] = useState(false)
  const duration = 30

  const setMusic = async (theme: Track) => {
    player?.stop()

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

  const memorizedValue = useMemo(
    () => ({
      player,
      isPlaying,
      duration,
      track,
      onPlay,
      onStop,
      setMusic,
      onSetTime,
    }),
    [player, isPlaying, duration, track, onPlay, onStop, setMusic, onSetTime],
  )

  return (
    <PlayerContext.Provider value={memorizedValue}>
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerProvider
