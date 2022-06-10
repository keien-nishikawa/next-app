import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { DARK_MODE_ATOM } from './constants';

const { persistAtom } = recoilPersist();
export const DarkModeAtom = atom<boolean>({
  key: DARK_MODE_ATOM,
  default: false,
  effects_UNSTABLE: [persistAtom],
});
