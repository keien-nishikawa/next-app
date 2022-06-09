import React, { FC, useEffect, useRef, useState } from 'react';
import { usePost } from 'src/hooks/usePost';
import Link from 'next/link';
import * as style from '@/pages/index/style';
import { AppComponent } from '@/components/AppComponent';
import { ErrorInfo } from '@/errors/ErrorInfo';

const Page: FC = () => {
  const isRender = useRef<boolean>(false);
  const [err, setErr] = useState<null | ErrorInfo>(null);
  const { posts, getPosts } = usePost();

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
      <div className={style.container}>NextApp</div>
      {posts.map((post) => (
        <Link href={`${post.id}`}>
          <div className={style.card} key={post.id}>
            <div className={style.title}>
              {post.id}. {post.title}
            </div>
            <div className={style.body}>{post.body}</div>
          </div>
        </Link>
      ))}
    </AppComponent>
  );
};
export default Page;
