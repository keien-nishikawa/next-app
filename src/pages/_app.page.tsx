import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Notistack } from '@/components/Notistack';
import '@/styles/reset.css';

//NOTE: 共通処理
const AppInit: React.FC = () => {
  useEffect(() => {
    console.log('AppInit');
  }, []);

  return null;
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  // NOTE: Warning: Expected server HTML to contain a matching <div> in <div>.
  if (!render) return <></>;
  return (
    <RecoilRoot>
      <AppInit />
      <Notistack />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
