export interface RatedSongForUserForApiContractPartialFindResult {
  items: Item[]
  totalCount: number
}

export interface Item {
  date: string
  song: Song
  rating: Rating
}

export enum Rating {
  Favorite = 'Favorite',
}

export interface Song {
  artistString: string
  createDate: string
  defaultName: string
  defaultNameLanguage: DefaultNameLanguage
  favoritedTimes: number
  id: number
  lengthSeconds: number
  name: string
  publishDate: string
  pvs: PV[]
  pvServices: PVServices
  ratingScore: number
  songType: Type
  status: Status
  version: number
}

export enum DefaultNameLanguage {
  English = 'English',
  Japanese = 'Japanese',
}

export enum PVServices {
  NicoNicoDougaYoutube = 'NicoNicoDouga, Youtube',
  NicoNicoDougaYoutubeSoundCloud = 'NicoNicoDouga, Youtube, SoundCloud',
  YoutubeBilibili = 'Youtube, Bilibili',
}

export interface PV {
  author: string
  disabled: boolean
  id: number
  length: number
  name: string
  publishDate: string
  pvId: string
  service: Service
  pvType: Type
  thumbUrl: string
  url: string
  extendedMetadata?: ExtendedMetadata
}

export interface ExtendedMetadata {
  json: string
}

export enum Type {
  Original = 'Original',
  Other = 'Other',
  Reprint = 'Reprint',
}

export enum Service {
  Bilibili = 'Bilibili',
  NicoNicoDouga = 'NicoNicoDouga',
  Piapro = 'Piapro',
  SoundCloud = 'SoundCloud',
  Youtube = 'Youtube',
}

export enum Status {
  Approved = 'Approved',
  Finished = 'Finished',
}
