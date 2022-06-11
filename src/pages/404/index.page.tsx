import { NextPage } from 'next';
import * as style from './style';

const Page: NextPage = () => (
  <div css={style.container}>
    <div css={style.error}>
      <h1 css={style.code}>404</h1>
      <div css={style.message}>This page could not be found.</div>
    </div>
  </div>
);

export default Page;
