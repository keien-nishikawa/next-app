import React, { FC, useEffect, useRef, useState } from 'react';
import { usePost } from 'src/hooks/usePost';
import Link from 'next/link';
import { AppComponent } from '@/components/AppComponent';
import { ErrorInfo } from '@/errors/ErrorInfo';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useLocale } from '@/hooks/useLocale';
import * as style from '@/pages/index/style';

const Page: FC = () => {
  const isRender = useRef<boolean>(false);
  const [err, setErr] = useState<null | ErrorInfo>(null);
  const { posts, getPosts } = usePost();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t } = useLocale();

  useEffect(() => {
    (async () => {
      if (isRender.current) return;
      isRender.current = true;

      const res = await getPosts();
      res !== undefined && setErr(err);
    })();
  }, [isRender]);

  if (posts.length === 0) return null;
  return (
    <AppComponent>
      <div css={style.container}>
        <div css={style.app}>NextApp</div>
        <button css={style.themeChangeBtn} onClick={toggleDarkMode}>
          {isDarkMode ? t.TO_LIGHT_MODE : t.TO_DARK_MODE}
        </button>
        <div css={style.lang}>
          <Link href="/" locale="en" passHref>
            <a css={style.langLink}>{t.TO_ENG}</a>
          </Link>
          <Link href="/" locale="ja" passHref>
            <a css={style.langLink}>{t.TO_JA}</a>
          </Link>
        </div>
        {posts.map((post) => (
          <Link key={post.id} href={`/article/${post.id}`}>
            <div css={style.card}>
              <div css={style.title}>
                {post.id}. {post.title}
              </div>
              <div css={style.body}>{post.body}</div>
            </div>
          </Link>
        ))}
      </div>
    </AppComponent>
  );
};
export default Page;
