import { NextPage } from 'next';
import Link from 'next/link';
import * as style from './style';
import { useLocale } from '@/hooks/useLocale';

const Page: NextPage = () => {
  const { t } = useLocale();

  return (
    <div css={style.container}>
      <h1 css={style.code}>404</h1>
      <div css={style.message}>This page could not be found.</div>
      <Link href="/" passHref>
        <a css={style.appLink}>{t.BACK_TO_APP_URL}</a>
      </Link>
    </div>
  );
};

export default Page;
