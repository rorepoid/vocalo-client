import axios from 'axios'
import { Song } from '../../../Domain'
import { Song as SongResult } from '../../../Infrastructure/vocadb/RatedSongs/Interfaces'
import { SongRepository } from '../../../Domain/Song/SongRepository'

export class VocaDBSongRepository implements SongRepository {
  async search (id: number): Promise<Song> {
    const url = `https://vocadb.net/api/songs/${id}?fields=PVs`
    const response = await axios.get<SongResult>(url)

    return {
      id: response.data.id,
      title: response.data.name,
      url: response.data.pvs.find(pv => pv.service === 'Youtube')?.url,
      thumbUrl: response.data.pvs.find(pv => pv.service === 'Youtube')?.thumbUrl?.replace('/default.jpg', '/hqdefault.jpg')
    }
  }
}
