import { NextPage } from 'next';
import { Error404 } from '@/components/404';
import { Error500 } from '@/components/500';

type Props = {
  statusCode: 404 | 500;
};

export const Error: NextPage<Props> = ({ statusCode }) => {
  if (statusCode === 404) {
    return <Error404 />;
  } else if (statusCode === 500) {
    return <Error500 />;
  } else {
    return <div>{statusCode}</div>;
  }
};
