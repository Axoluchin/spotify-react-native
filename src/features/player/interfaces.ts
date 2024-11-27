import Sound from 'react-native-sound'
import {Track} from '../../api/interface'

export interface PlayerProviderProps {
  children: React.ReactNode
}

export interface PlayerContextProps {
  player: Sound | undefined
  isPlaying: boolean
  duration: number
  track: Track | undefined
  onPlay: () => void
  onStop: () => void
  onClose: () => void
  setMusic: (track: Track) => Promise<void>
  onSetTime: (n: number) => void
}
