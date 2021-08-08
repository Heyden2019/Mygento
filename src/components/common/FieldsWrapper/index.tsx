import clsx from 'clsx';
import React from 'react';
import styles from './FieldsWrapper.module.scss';

interface FieldsWrapperProps {
  title?: string;
  error?: string | boolean;
  isRequired?: boolean;
  className?: string;
}

export const FieldsWrapper: React.FC<FieldsWrapperProps> = ({
  children,
  title,
  error,
  isRequired,
  className,
}) => {
  const wrapperTitle = isRequired ? `${title} *` : title;

  return (
    <div>
      {title && (
        <div className={clsx(styles.title, 'text-lg', className)}>
          {wrapperTitle}
          {error && (
            <span className={clsx('text-xs', styles.error)}>{error}</span>
          )}
        </div>
      )}
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
