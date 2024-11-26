import {useContext} from 'react'

import {AuthContext} from './AuthContexts'

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuthContext out of AuthProvider')

  return context
}

export default useAuthContext
