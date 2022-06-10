import { useRecoilState } from 'recoil';
import { DarkModeAtom } from '@/atom/darkMode';

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useRecoilState(DarkModeAtom);

  const toggleDarkMode = () => {
    !isDarkMode
      ? document.documentElement.removeAttribute('data-theme')
      : document.documentElement.setAttribute('data-theme', 'dark');
    setDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};
