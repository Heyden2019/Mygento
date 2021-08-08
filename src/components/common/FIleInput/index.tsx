import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import icon from './clip-icon.svg';
import styles from './FileInput.module.scss';

const MAX_FILE_SIZE = 16 * 1024 * 1024; // 16 mb
const ERROR = 'загружайте файл размером не более 16 mb';

interface FileInputProps {
  file: null | File;
  text: string;
  className?: string;
  setError: (error?: string) => void;
  setFile: (file: File | null) => void;
  error?: string;
}

export const FileInput: React.FC<FileInputProps> = ({
  text,
  file,
  className,
  error,
  setError,
  setFile,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError();

    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];

    if (file.size > MAX_FILE_SIZE) {
      return setError(ERROR);
    }

    setFile(file);
  };

  const onDelete = () => {
    setError();
    setFile(null);
  };

  return (
    <div className={clsx(styles.container, className)}>
      {file ? (
        <div className={styles.file}>
          <label className={styles.label}>
            <div className={styles.clip}>
              <Image src={icon} alt="clip icon" />
            </div>
            <div className={styles.filename}>{file.name}</div>
            <input type="file" hidden onChange={onChange} />
          </label>
          <div className={styles.close} onClick={onDelete}>
            &#x2715;
          </div>
        </div>
      ) : (
        <>
          <label>
            <div className={clsx(styles.loader, 'text-xs')}>
              <div className={styles.startIcon}>+</div>
              {text}
            </div>
            <input type="file" hidden onChange={onChange} />
          </label>
          {error && (
            <div className={clsx(styles.error, 'text-xs')}>{error}</div>
          )}
        </>
      )}
    </div>
  );
};
