import { css } from '@emotion/react';
import { boxShadow, color } from 'src/utils/styleUtil';

export const container = css`
  width: min(92.5% - 40px, 750px);
  margin: 5% auto;
  padding: 15px 20px;
  border: 1px solid ${color.cBorder};
  box-shadow: ${boxShadow.light};
  border-radius: 4px;
`;

export const title = css`
  font-size: 16px;
  font-weight: 700;
  color: ${color.cPrimary};
  padding: 2.5px 0;
`;

export const body = css`
  font-size: 14px;
  line-height: 1.5;
  color: ${color.cBody};
  padding: 2.5px 0;
`;
