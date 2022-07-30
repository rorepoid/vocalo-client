import { Song } from '../Song/Song'

export interface RatedSongsByUserRepository {
  search: (userId: number) => Promise<Song[]>
}
