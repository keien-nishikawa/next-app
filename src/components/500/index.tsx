import { FC } from 'react';
import * as style from './style';

export const Error500: FC = () => {
  return (
    <div css={style.container}>
      <div>500だよ</div>
    </div>
  );
};
