import { css } from '@emotion/react';
import { boxShadow, color } from '@/utils/styleUtil';

export const container = css`
  width: min(92.5% - 20px, 750px);
  margin: 15px auto;
  padding: 10px;
`;

export const app = css`
  font-size: 18px;
  font-weight: 700;
  color: ${color.cPrimary};
  margin-bottom: 15px;
`;

export const card = css`
  margin: 15px auto;
  padding: 10px;
  border: 1px solid ${color.cBorder};
  box-shadow: ${boxShadow.def};
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

export const title = css`
  font-size: 16px;
  font-weight: 700;
  color: ${color.cBody2};
`;

export const body = css`
  font-size: 14px;
  color: ${color.cBody2};
`;

export const themeChangeBtn = css`
  color: ${color.cWhite};
  background: ${color.cPrimaryDark};
  padding: 7.5px 10px;
  border: none;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;
