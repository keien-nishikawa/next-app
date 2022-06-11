import React, { FC, useEffect, useRef, useState } from 'react';
import { usePost } from 'src/hooks/usePost';
import Link from 'next/link';
import * as style from '@/pages/index/style';
import { AppComponent } from '@/components/AppComponent';
import { ErrorInfo } from '@/errors/ErrorInfo';
import { useDarkMode } from '@/hooks/useDarkMode';

const Page: FC = () => {
  const isRender = useRef<boolean>(false);
  const [err, setErr] = useState<null | ErrorInfo>(null);
  const { posts, getPosts } = usePost();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log('isDarkMode', isDarkMode);

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
          {isDarkMode ? 'To white theme' : 'To dark theme'}
        </button>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
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
