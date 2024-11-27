// * User

export interface MeProps {
  country: string
  display_name: string
  email: string
  explicit_content: ExplicitContent
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  product: string
  type: string
  uri: string
}

export interface ExplicitContent {
  filter_enabled: boolean
  filter_locked: boolean
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href: string
  total: number
}

export interface Image {
  url: string
  height: number
  width: number
}

// * Albums
export interface AlbumResponse {
  href: string
  limit: number
  next: string
  offset: number
  previous: string
  total: number
  items: AlbumTimestamp[]
}

export interface AlbumTimestamp {
  added_at: string
  album: Album
}

export interface Album {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  restrictions: Restrictions
  type: string
  uri: string
  artists: Artist[]
  tracks: Tracks
  copyrights: Copyright[]
  external_ids: ExternalIds
  genres: string[]
  label: string
  popularity: number
}

export interface Image {
  url: string
  height: number
  width: number
}

export interface Restrictions {
  reason: string
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface Tracks {
  href: string
  limit: number
  next: string
  offset: number
  previous: string
  total: number
  items: TrackForAlbum[]
}

export interface TrackForAlbum {
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: ExternalUrls
  href: string
  id: string
  is_playable: boolean
  linked_from: LinkedFrom
  restrictions: Restrictions
  name: string
  preview_url: string
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

export interface Track {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface LinkedFrom {
  external_urls: ExternalUrls
  href: string
  id: string
  type: string
  uri: string
}

export interface Copyright {
  text: string
  type: string
}

export interface ExternalIds {
  isrc: string
  ean: string
  upc: string
}

// * Playlists

export interface PlaylistResponse {
  href: string
  limit: number
  next: string
  offset: number
  previous: string
  total: number
  items: Playlist[]
}

export interface Playlist {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  public: boolean
  snapshot_id: string
  tracks: TracksRef
  type: string
  uri: string
}

export interface Image {
  url: string
  height: number
  width: number
}

export interface Owner {
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  type: string
  uri: string
  display_name: string
}

export interface Followers {
  href: string
  total: number
}

export interface TracksRef {
  href: string
  total: number
}

export interface RecentlyPlayedResponse {
  href: string
  limit: number
  next: string
  cursors: Cursors
  total: number
  items: {
    track: Track
    played_at: string
    context: Context
  }[]
}

export interface Cursors {
  after: string
  before: string
}

export interface Context {
  type: string
  href: string
  external_urls: ExternalUrls
  uri: string
}

export interface GetAlbumResponse {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  restrictions: Restrictions
  type: string
  uri: string
  artists: Artist[]
  tracks: Tracks
  copyrights: Copyright[]
  external_ids: ExternalIds
  genres: string[]
  label: string
  popularity: number
}
