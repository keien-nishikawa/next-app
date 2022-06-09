import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { POST_ATOM } from './constants';
import { Post } from '@/infrastructure/entity/post';

const { persistAtom } = recoilPersist();
export const PostAtom = atom<undefined | null | Post>({
  key: POST_ATOM,
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
