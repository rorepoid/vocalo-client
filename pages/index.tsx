import { GetStaticProps, NextPage } from 'next'
import { Grid } from '@nextui-org/react'
import { Layout } from '../components/layouts'
import { SongCard } from '../components/vocaloid'

import { VocaDBRatedSongsByUserRepository } from '../src/Song/Infrastructure/vocadb'
import { RatedSongsByUserSearcher } from '../src/Song/Application'
import { Song } from '../src/Song/Domain'
import { EnvUserId } from '../src/User/Infrastructure'

interface SongsByUserProps {
  songs: Song[]
}

const HomePage: NextPage<SongsByUserProps> = ({ songs }) => (
  <Layout title='Vocaloid song list'>
    <Grid.Container gap={2} justify='flex-start'>
      {songs.map((song: Song) => (
        <SongCard key={song.id} {...song} />
      ))}
    </Grid.Container>
  </Layout>
)

// You should use getStaticProps when:
// - The data required to render the page is available at build time ahead of a user’s request.
// - The data comes from a headless CMS.
// - The data can be publicly cached (not user-specific).
// - The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps<SongsByUserProps> = async (_) => {
  const userId = new EnvUserId().value

  const repository = new VocaDBRatedSongsByUserRepository()
  const songs = await new RatedSongsByUserSearcher(repository).search(userId)

  return {
    props: {
      songs
    }
  }
}

export default HomePage
