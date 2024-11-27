import {useContext} from 'react'
import {PlayerContext} from './PlayerContext'

const usePlayerContext = () => {
  const context = useContext(PlayerContext)

  if (!context) throw new Error('useAPlayerContext out of PlayerProvider')

  return context
}

export default usePlayerContext
