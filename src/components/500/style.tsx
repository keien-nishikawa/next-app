import { css } from '@emotion/react';
import { boxShadow, color } from '@/utils/styleUtil';

export const container = css`
  position: relative;
  width: min(95% - 20px, 500px);
  margin: 5% auto;
  padding: 10px;
  border: 1px solid ${color.cBorder};
  box-shadow: ${boxShadow.def};
  border-radius: 4px;
`;
