import { css } from '@emotion/react';
import { boxShadow, color } from '@/utils/styleUtil';

export const container = css`
  position: relative;
  width: min(95% - 20px, 500px);
  margin: 5% auto;
  padding: 10px;
  border: 1px solid ${color.cBorder};
  box-shadow: ${boxShadow.light};
  border-radius: 4px;
`;

export const contact = css`
  font-size: 24px;
  line-height: 1.3333;
  word-break: break-word;
  padding-top: 16px;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-top: 0;
  color: ${color.cBody};
  :hover {
    cursor: pointer;
  }
`;

export const form = css`
  margin: 20px auto;
`;

export const formGroup = css`
  margin-top: 25px;
  :first-child {
    margin-top: auto;
  }
`;

export const button = css`
  color: ${color.cWhite};
  background: ${color.cPrimary};
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;
