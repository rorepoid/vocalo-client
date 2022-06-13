import { Song } from '../Song'

export interface RatedSongsByUserRepository {
  search: (userId: number) => Promise<Song[]>
}
