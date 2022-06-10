import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './style.module.css';

export const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input className={styles.input} {...props} ref={ref} />;
});
