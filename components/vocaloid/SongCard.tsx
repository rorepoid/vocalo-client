import { Card, Grid, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { Song } from '../../src/Song/Domain/Song/Song'
import { ImageWithFallback } from '../ui/ImageWithFallback'

export const SongCard: React.FunctionComponent<Song> = ({ id, title, thumbUrl }): React.ReactElement => {
  const router = useRouter()

  const onClick = async (): Promise<void> => {
    await router.push(`/songs/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2}>
      <Card
        hoverable
        clickable
        onClick={() => { void onClick() }}
      >
        <Card.Body css={{ p: 0 }}>
          <ImageWithFallback
            src={thumbUrl ?? '/public/img/placeholder.png'}
            fallbackSrc='https://static.vocadb.net/img/artist/mainThumb/78302.png'
            alt={title}
            width='100%'
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Text>{title}</Text>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
