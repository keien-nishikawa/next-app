import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { POSTS_ATOM } from './constants';
import { Post } from '@/infrastructure/entity/post';

const { persistAtom } = recoilPersist();
export const PostsAtom = atom<Post[]>({
  key: POSTS_ATOM,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
