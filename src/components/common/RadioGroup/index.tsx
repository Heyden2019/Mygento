import clsx from 'clsx';
import React from 'react';
import styles from './RadioGroup.module.scss';

interface RadioGroupProps {
  values: {
    value: string;
    label: string;
  }[];
  name: string;
  setValue: any;
  checkedValue: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  values,
  setValue,
  checkedValue,
}) => {
  return (
    <div className={styles.radioWrapper}>
      {values.map(({ label, value }) => (
        <label key={value} className={styles.radio}>
          <span
            className={clsx(styles.radioOuter, {
              [styles.checked]: checkedValue === value,
            })}
          >
            <span className={styles.radioInner} />
          </span>
          <input
            type="radio"
            name={name}
            value={value}
            hidden
            onClick={() => setValue(value)}
          />
          <span className={styles.label}>{label}</span>
        </label>
      ))}
    </div>
  );
};
