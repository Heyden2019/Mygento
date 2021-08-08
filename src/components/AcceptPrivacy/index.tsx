import clsx from 'clsx';
import React, { useState } from 'react';
import { PrivacyPolicyType } from '../../server/readPrivacyPolicy';
import { Modal } from '../Modal';
import styles from './AcceptPrivacy.module.scss';

interface AcceptPrivacyProps {
  showIsRequired?: boolean;
  privacyPolicy: PrivacyPolicyType;
}

export const AcceptPrivacy: React.FC<AcceptPrivacyProps> = ({
  showIsRequired,
  privacyPolicy,
}) => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const onClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    setShowPrivacy(true);
  };

  return (
    <div className={clsx(styles.wrapper, 'text-xs')}>
      <span>{showIsRequired && '* '}Я согласен с&nbsp;</span>
      <span className={styles.link} onClick={onClick}>
        политикой конфиденциальности
      </span>
      <Modal
        buttonText="Я согласен"
        title="Политика конфиденциальности"
        onClose={() => setShowPrivacy(false)}
        isOpen={showPrivacy}
      >
        {privacyPolicy?.map((block) => (
          <React.Fragment key={block.title}>
            <p className={clsx(styles.text, 'text-md weight-bold')}>
              {block.title}
            </p>
            {block.body.map((text) => (
              <p key={text} className={clsx(styles.text, 'text-md')}>
                {text}
              </p>
            ))}
          </React.Fragment>
        ))}
      </Modal>
    </div>
  );
};
