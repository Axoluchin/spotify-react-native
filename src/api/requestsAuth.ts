import {SPOTIFY_TOKEN} from '../global-config';
const body = {
  response_type: 'code',
  client_id: SPOTIFY_TOKEN,
  scope: 'user-read-private user-read-email',
  redirect_uri: 'https://damian-huchin.vercel.app/',
  state: 'RANDOMSTRINGJAJAJA',
};

const authUri = `https://accounts.spotify.com/authorize?${new URLSearchParams(
  body,
).toString()}`;

export default authUri;
