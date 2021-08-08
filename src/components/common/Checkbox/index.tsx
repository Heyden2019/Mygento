import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import icon from './check-icon.svg';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  setValue: any;
  checked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  setValue,
  checked,
}) => {
  return (
    <div className={styles.checkboxWrapper}>
      <label>
        <span
          className={clsx(styles.checkboxOuter, {
            [styles.checked]: checked,
          })}
        >
          <Image src={icon} alt="check-icon" />
        </span>
        <input
          type="checkbox"
          checked={checked}
          hidden
          onChange={() => setValue(!checked)}
        />
      </label>
      {children}
    </div>
  );
};
