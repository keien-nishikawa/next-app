import { FC } from 'react';
import Link from 'next/link';
import * as style from './style';
import { useDefaultForm } from '@/hooks/useDefaultForm';
import { TextInput } from '@/components/TextInput';
import { useLocale } from '@/hooks/useLocale';

type Form = {
  displayName: string;
  email: string;
  password: string;
};
export const Presenter: FC = () => {
  const { t } = useLocale();
  const signup = t.signup;
  const required = signup.required;
  const { register } = useDefaultForm<Form>({
    defaultValues: { displayName: '', email: '', password: '' },
  });

  return (
    <div css={style.container}>
      <Link href="/">
        <h1 css={style.contact}>{signup.title}</h1>
      </Link>
      <div css={style.form}>
        <div css={style.formGroup}>
          <TextInput type="text" {...register('displayName', { required: required.displayName })} autoFocus />
        </div>
        <div css={style.formGroup}>
          <TextInput type="text" {...register('email', { required: required.email })} />
        </div>
        <div css={style.formGroup}>
          <TextInput type="text" {...register('password', { required: required.password })} />
        </div>
        <div css={style.formGroup}>
          <button css={style.button} type="submit">
            {signup.submit}
          </button>
        </div>
      </div>
    </div>
  );
};
