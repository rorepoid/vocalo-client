import Head from 'next/head'

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

      {/* NavBar */}

      <main>
        {children}
      </main>
    </>
  )
}
