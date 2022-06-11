import { css } from '@emotion/react';
import { color } from '@/utils/styleUtil';

export const container = css`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const error = css`
  color: ${color.cBody};
`;

export const code = css`
  font-size: 24px;
  font-weight: bold;
`;

export const message = css`
  margin-top: 12px;
  font-size: 16px;
`;
