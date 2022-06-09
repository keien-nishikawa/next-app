import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import NextHead from 'next/head';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <NextHead>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name="robots" content="noindex" />
        </NextHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
