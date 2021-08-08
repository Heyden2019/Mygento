import clsx from 'clsx';
import React, { FocusEventHandler } from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps {
  title: string;
  error?: string;
  touched?: boolean;
  type?: 'text' | 'email';
  isRequired?: boolean;
  inputProps: {
    value: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: FocusEventHandler<HTMLInputElement>;
    name: string;
  };
}

export const TextInput: React.FC<TextInputProps> = ({
  title,
  error,
  type = 'text',
  isRequired,
  inputProps,
  touched,
}) => {
  const fieldTitle = isRequired ? `${title} *` : title;

  return (
    <div className={styles.container}>
      <label className={clsx('text-xs')} htmlFor={inputProps.name}>
        {fieldTitle}
      </label>
      <input
        {...inputProps}
        id={inputProps.name}
        type={type}
        placeholder={title}
        className={clsx(styles.input, 'text-sm', {
          [styles.error]: touched && error,
        })}
      />
      {touched && error && (
        <div className={clsx(styles.error, 'text-xs')}>{error}</div>
      )}
    </div>
  );
};
