import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'

export const Navbar = (): React.ReactElement => {
  const { theme } = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0x 20px',
      backgroundColor: theme?.colors.gray100.value
    }}
    >
      <Image
        src='https://static.vocadb.net/img/artist/mainThumb/78302.png'
        alt='app icon'
        width={70}
        height={70}
      />

      <Spacer />

      <Text color='white' h2>V</Text>
      <Text color='white' h3>ocaloid</Text>

      <Spacer css={{ flex: 1 }} />

      <Text color='white'>Favorites</Text>
    </div>
  )
}
