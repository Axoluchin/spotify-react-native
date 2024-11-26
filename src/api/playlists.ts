import axios from 'axios'
import {SPOTIFY_URI} from '../global-config'
import {PlaylistResponse} from './interface'

export const getUserPlaylists = async (
  token = 'NO_ACCESS_TOKEN',
  limit = 20,
  offset = 0,
) => {
  try {
    const {data} = await axios.get<PlaylistResponse>(
      `${SPOTIFY_URI}/me/playlists`,
      {
        params: {limit, offset},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return data
  } catch (error) {
    console.warn(error)
    return null
  }
}
