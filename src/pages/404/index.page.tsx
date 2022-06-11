import { NextPage } from 'next';
import Link from 'next/link';
import * as style from './style';

const Page: NextPage = () => (
  <div css={style.container}>
    <h1 css={style.code}>404</h1>
    <div css={style.message}>This page could not be found.</div>
    <Link href="/" passHref>
      <a css={style.appLink}>NextAppに戻る</a>
    </Link>
  </div>
);

export default Page;
