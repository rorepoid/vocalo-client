import { Song } from '../../Domain'
import { RatedSongsByUserRepository } from '../../Domain/RatedSongs/RatedSongsByUserRepository'

export class RatedSongsByUserSearcher {
  constructor (private readonly repository: RatedSongsByUserRepository) {}

  async search (userId: number): Promise<Song[]> {
    return await this.repository.search(userId)
  }
}
