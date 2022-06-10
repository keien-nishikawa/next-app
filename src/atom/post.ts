import { atom } from 'recoil';
import { POST_ATOM } from './constants';
import { Post } from '@/infrastructure/entity/post';

export const PostAtom = atom<undefined | null | Post>({
  key: POST_ATOM,
  default: undefined,
});
