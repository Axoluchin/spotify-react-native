import axios from 'axios'
import {SPOTIFY_URI, SPOTIFY_TOKEN} from '../global-config'

const spotifyInstance = axios.create({
  baseURL: SPOTIFY_URI,
  headers: {
    Authorization: `Bearer ${SPOTIFY_TOKEN}`,
  },
})

export default spotifyInstance
