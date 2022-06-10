import { atom } from 'recoil';
import { POSTS_ATOM } from './constants';
import { Post } from '@/infrastructure/entity/post';

export const PostsAtom = atom<Post[]>({
  key: POSTS_ATOM,
  default: [],
});
