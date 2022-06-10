import { FC } from 'react';
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
      <div css={style.formGroup}>
        <TextInput type="text" {...register('displayName', { required: '件名を入力してください' })} autoFocus />
      </div>
      <div css={style.formGroup}>
        <TextInput type="text" {...register('email', { required: 'メールアドレスを入力してください' })} />
      </div>
      <div css={style.formGroup}>
        <TextInput type="text" {...register('password', { required: 'パスワードを入力してください' })} />
      </div>
    </div>
  );
};
