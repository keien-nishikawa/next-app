import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { DarkModeAtom } from '@/atom/darkMode';

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useRecoilState(DarkModeAtom);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.removeAttribute('data-theme');
      setDarkMode(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDarkMode(true);
    }
  };

  return { isDarkMode, toggleDarkMode };
};
