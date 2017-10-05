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
          <meta name="description" content="We are focused on making equity investments in both emerging and established companies which offer proprietary, branded and scalable solutions to the mental health and wellness crisis affecting our world." />
          <meta name="keywords" content="Addiction, Anxiety and Depression , Fitness and Nutrition, Meditation and Mindfulness, Shame and Trauma, Spirituality" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
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
