import Document, { Head, Html, Main, NextScript } from 'next/document';
import NextHead from 'next/head';
import { css } from '@emotion/react';
import { color } from '@/utils/styleUtil';

const body = css`
  background: ${color.cbg};
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <NextHead>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name="robots" content="noindex" />
        </NextHead>
        <body css={body}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
