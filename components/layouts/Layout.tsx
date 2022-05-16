import Head from 'next/head'
import { Navbar } from '../ui'

interface Song {
  title?: string
  children: React.ReactNode
}

export const Layout: React.FC<Song> = ({ children, title }): React.ReactElement => {
  title = title ?? 'Vocaloid song list'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='rorepoid' />
        <meta name='description' content={`Information about ${title}`} />
        <meta name='keywords' content={`vocaloid, vocaloid app, ${title}`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}
      >
        {children}
      </main>
    </>
  )
}
