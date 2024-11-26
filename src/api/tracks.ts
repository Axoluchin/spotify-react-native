import axios from 'axios'
import {SPOTIFY_URI} from '../global-config'
import {RecentlyPlayedResponse} from './interface'

export const getUserRecentlyPlayed = async (
  token = 'NO_ACCESS_TOKEN',
  limit?: number,
  offset?: number,
) => {
  try {
    const {data} = await axios.get<RecentlyPlayedResponse>(
      `${SPOTIFY_URI}/me/player/recently-played`,
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
