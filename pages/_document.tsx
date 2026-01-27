import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="CaviteWisdom - Your trusted source for local news and information in Cavite" />
        <meta name="keywords" content="Cavite, news, newspaper, local news, Philippines" />
        <meta name="author" content="CaviteWisdom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}