import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { usePost } from 'src/hooks/usePost';
import * as style from './style';
import { AppComponent } from '@/components/AppComponent';

const Page: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { post, getPost } = usePost();

  useEffect(() => {
    const id = router.query.id;
    if (!router.isReady || typeof id !== 'string') return;

    (async () => {
      await getPost(id);
      setIsLoading(false);
    })();
  }, [router.isReady]);

  if (isLoading || !post) return null;
  return (
    <AppComponent>
      <div css={style.container}>
        <div css={style.title}>
          {post.id}. {post.title}
        </div>
        <div css={style.body}>{post.body}</div>
      </div>
    </AppComponent>
  );
};

export default Page;
