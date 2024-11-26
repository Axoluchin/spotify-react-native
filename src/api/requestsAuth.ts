import {SPOTIFY_TOKEN} from '../global-config'
const body = {
  response_type: 'code',
  client_id: SPOTIFY_TOKEN,
  scope: 'user-read-private user-read-email',
  redirect_uri: 'https://damian-huchin.vercel.app/',
  state: 'RANDOMSTRINGJAJAJA',
}

const authUri = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_TOKEN}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=https://damian-huchin.vercel.app/`

// const authUri = `https://accounts.spotify.com/authorize?${new URLSearchParams(
//   body,
// ).toString()}`

export default authUri
