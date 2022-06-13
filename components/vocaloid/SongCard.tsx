import { Card, Grid, Text } from '@nextui-org/react'
import { Song } from '../../src/Song/Domain/Song'

export const SongCard: React.FunctionComponent<Song> = ({ title, thumbUrl }) => {
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={thumbUrl ?? 'https://static.vocadb.net/img/artist/mainThumb/78302.png'}
            alt={title}
            width='100%'
            height={100}
          />
        </Card.Body>
        <Card.Footer>
          <Text>{title}</Text>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
