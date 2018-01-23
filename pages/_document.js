import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import baseStyles from '../styles/index';

export default class HTMLDocument extends Document {
  render() {
    baseStyles();
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Avatar Companies is a private partnership focused on making equity investments in the emerging fields of mental health and wellness."
          />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
