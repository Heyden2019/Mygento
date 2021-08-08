import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Button } from '../common/Button';
import styles from './Modal.module.scss';

const variants = {
  open: { opacity: 1, transform: 'scale(1)' },
  closed: { opacity: 0, transform: 'scale(0.1)' },
};

interface ModalProps {
  title: string;
  isCenteredTitle?: boolean;
  onClose: () => void;
  buttonText: string;
  className?: string;
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  buttonText,
  isCenteredTitle,
  title,
  onClose,
  children,
  className,
  isOpen,
}) => {
  const onModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <div className={styles.modalWrapper} onClick={onClose}>
          <motion.div
            className={clsx(styles.modal, className)}
            onClick={onModalClick}
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, transform: 'scale(0.1)' }}
            exit={{ opacity: 0, transform: 'scale(0.1)' }}
          >
            <div className={styles.close} onClick={onClose}>
              &#x2715;
            </div>
            <div
              className={clsx('text-xl weight-bold', styles.title, {
                [styles.centered]: isCenteredTitle,
              })}
            >
              {title}
            </div>
            <div className={styles.content}>{children}</div>
            <Button
              onClick={onClose}
              text={buttonText}
              className={styles.button}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
