import axios from 'axios'
import {SPOTIFY_URI} from '../global-config'
import {AlbumResponse} from './interface'

export const getUserSavedAlbums = async (
  token = 'NO_ACCESS_TOKEN',
  limit = 20,
  offset = 0,
  market = 'MX',
) => {
  try {
    const {data} = await axios.get<AlbumResponse>(`${SPOTIFY_URI}/me/albums`, {
      params: {limit, offset, market},
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
