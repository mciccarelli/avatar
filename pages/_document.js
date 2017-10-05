import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from 'styles/index.scss'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charset='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
