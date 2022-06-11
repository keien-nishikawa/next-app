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
`;

export const form = css`
  margin: 20px auto;
`;

export const formGroup = css`
  margin-top: 1rem;
  :first-child {
    margin-top: auto;
  }
`;
