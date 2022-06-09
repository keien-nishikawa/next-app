import { FC } from 'react';
import Head from 'next/head';

export type HeadTagProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export const HeadTag: FC<HeadTagProps> = (props) => {
  const { title, description, image, url } = props;
  return (
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@clubstack_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
  );
};
