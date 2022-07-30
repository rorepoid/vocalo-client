import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Layout } from '../../components/layouts'
import { Song } from '../../src/Song/Domain'
import { VocaDBSongRepository, VocaDBRatedSongsByUserRepository } from '../../src/Song/Infrastructure/vocadb'
import { RatedSongsByUserSearcher } from '../../src/Song/Application/RatedSongs'
import { EnvUserId } from '../../src/User/Infrastructure'

interface Props {
  song: Song
}

const SongPage: NextPage<Props> = ({ song }) => {
  return (
    <Layout title='Some song'>
      <h1>{song.id} - {song.title}</h1>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (_) => {
  const userId = new EnvUserId().value

  const repository = new VocaDBRatedSongsByUserRepository()
  const songs: Song[] = await new RatedSongsByUserSearcher(repository).search(userId)

  const paths = songs.map((song: Song) => ({
    params: {
      id: song.id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

// You should use getStaticProps when:
// - The data required to render the page is available at build time ahead of a user’s request.
// - The data comes from a headless CMS.
// - The data can be publicly cached (not user-specific).
// - The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = Number.parseInt(params?.id as string)
  if (isNaN(id)) {
    throw new Error('Invalid song id')
  }
  const repository = new VocaDBSongRepository()
  const song = await repository.search(id)

  return {
    props: {
      song
    }
  }
}

export default SongPage
