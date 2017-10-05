import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import baseStyles from '../styles/index'

export default class MyDocument extends Document {
  render () {
    baseStyles()
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <title>Avatar Companies</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
