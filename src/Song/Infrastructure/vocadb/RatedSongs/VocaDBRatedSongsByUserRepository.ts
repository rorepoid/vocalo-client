import axios from 'axios'

import { RatedSongsByUserRepository, Song } from '../../../Domain'
import { RatedSongForUserForApiContractPartialFindResult } from './Interfaces'

export class VocaDBRatedSongsByUserRepository implements RatedSongsByUserRepository {
  async search (userId: number): Promise<Song[]> {
    const url = `https://vocadb.net/api/users/${userId}/ratedSongs?groupByRating=true&pvServices=Youtube&maxResults=10&getTotalCount=true&sort=FavoritedTimes&fields=PVs&lang=English`
    const response = await axios.get<RatedSongForUserForApiContractPartialFindResult>(url)

    return response.data.items.map(item => ({
      id: item.song.id,
      title: item.song.name,
      url: item.song.pvs.find(pv => pv.service === 'Youtube')?.url,
      thumbUrl: item.song.pvs.find(pv => pv.service === 'Youtube')?.thumbUrl?.replace('/default.jpg', '/hqdefault.jpg')
    }))
  }
}
