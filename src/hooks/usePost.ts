import { useRecoilState } from 'recoil';
import { PostsAtom } from '@/atom/posts';
import { PostAtom } from '@/atom/post';
import { PostRepositoryImpl } from '@/infrastructure/repository/postRepository';
import { ErrorInfo } from '@/errors/ErrorInfo';

export const usePost = () => {
  const userRepository = new PostRepositoryImpl();
  const [posts, setPosts] = useRecoilState(PostsAtom);
  const [post, setPost] = useRecoilState(PostAtom);

  const getPosts = async (): Promise<undefined | ErrorInfo> => {
    const result = await userRepository.getPosts();

    if (result instanceof ErrorInfo) return result;
    result !== null && setPosts(result);
  };

  const getPost = async (id: string): Promise<undefined | ErrorInfo> => {
    const result = await userRepository.getPost({ id: id });

    if (result instanceof ErrorInfo) return result;
    result.length !== 0 && setPost(result[0]);
  };
  return { posts, post, getPosts, getPost };
};
