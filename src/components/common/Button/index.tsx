import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  text: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(className, styles.button, 'text-sm', {
        [styles.disabled]: disabled,
      })}
    >
      {text}
    </button>
  );
};
