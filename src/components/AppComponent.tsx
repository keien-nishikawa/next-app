import React, { FC } from 'react';
import { HeadTag, HeadTagProps } from '@/components/HeadTag';

type Props = {
  headTagProps?: HeadTagProps;
};
export const AppComponent: FC<Props> = (props) => {
  const { children, headTagProps } = props;
  return (
    <>
      {headTagProps && (
        <HeadTag
          title={headTagProps.title}
          description={headTagProps.title}
          image={headTagProps.image}
          url={headTagProps.url}
        />
      )}
      {children}
    </>
  );
};
