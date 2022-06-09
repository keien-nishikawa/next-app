import { css } from '@emotion/react';

export const container = css`
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

export const card = css`
  width: min(100%, 750px);
  margin: 15px auto;
  padding: 10px;
  border: 1px solid #5c93bb2b;
  box-shadow: rgb(0 0 0 / 8%) 0px 6px 16px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

export const title = css`
  font-size: 16px;
  font-weight: 700;
  color: red;
`;

export const body = css`
  font-size: 14px;
  color: #333;
`;
