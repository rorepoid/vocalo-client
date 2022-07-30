import { Song } from './Song'

export interface SongRepository {
  search: (id: number) => Promise<Song>
}
