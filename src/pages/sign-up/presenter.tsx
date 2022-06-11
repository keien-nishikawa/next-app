import { FC } from 'react';
import Link from 'next/link';
import * as style from './style';
import { useDefaultForm } from '@/hooks/useDefaultForm';
import { TextInput } from '@/components/TextInput';

type Form = {
  displayName: string;
  email: string;
  password: string;
};
export const Presenter: FC = () => {
  const { register } = useDefaultForm<Form>({
    defaultValues: { displayName: '', email: '', password: '' },
  });

  return (
    <div css={style.container}>
      <Link href="/">
        <h1 css={style.contact}>アカウント登録</h1>
      </Link>
      <div css={style.form}>
        <div css={style.formGroup}>
          <TextInput type="text" {...register('displayName', { required: '名前を入力してください' })} autoFocus />
        </div>
        <div css={style.formGroup}>
          <TextInput type="text" {...register('email', { required: 'メールアドレスを入力してください' })} />
        </div>
        <div css={style.formGroup}>
          <TextInput type="text" {...register('password', { required: 'パスワードを入力してください' })} />
        </div>
        <div css={style.formGroup}>
          <button css={style.button} type="submit">
            アカウントを作成する
          </button>
        </div>
      </div>
    </div>
  );
};
