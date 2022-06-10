import { css } from '@emotion/react';
import { borderColor, boxShadow, fontColor } from '@/utils/style';

export const container = css`
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

export const card = css`
  width: min(92.5% - 20px, 750px);
  margin: 15px auto;
  padding: 10px;
  border: 1px solid ${borderColor.def};
  box-shadow: ${boxShadow.def};
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

export const title = css`
  font-size: 16px;
  font-weight: 700;
  color: ${fontColor.red};
`;

export const body = css`
  font-size: 14px;
  color: ${fontColor.def};
`;
