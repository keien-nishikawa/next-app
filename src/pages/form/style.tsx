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

export const formGroup = css`
  margin-top: 1rem;
  :first-child {
    margin-top: auto;
  }
`;
