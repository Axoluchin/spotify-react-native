import axios from 'axios'
import {SPOTIFY_URI} from '../global-config'
import {MeProps} from './interface'

export const getMeInfo = async (token = 'NO_ACCESS_TOKEN') => {
  try {
    const {data} = await axios.get<MeProps>(`${SPOTIFY_URI}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (error) {
    console.warn(error)
    return null
  }
}
