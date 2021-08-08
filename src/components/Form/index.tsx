import { useFormik } from 'formik';
import React, { useState } from 'react';
import { PrivacyPolicyType } from '../../server/readPrivacyPolicy';
import { AcceptPrivacy } from '../AcceptPrivacy';
import { Button } from '../common/Button';
import { Checkbox } from '../common/Checkbox';
import { FieldsWrapper } from '../common/FieldsWrapper';
import { FileInput } from '../common/FIleInput';
import { RadioGroup } from '../common/RadioGroup';
import { TextInput } from '../common/TextInput';
import { Modal } from '../Modal';
import styles from './Form.module.scss';
import { validationSchema } from './validationSchema';

interface FormProps {
  privacyPolicy: PrivacyPolicyType;
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  sex: '',
  github: '',
  privacyPolicy: false,
  portfolio: null,
};

export const Form: React.FC<FormProps> = ({ privacyPolicy }) => {
  const [showModal, setShowModal] = useState(false);
  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    isInitialValid: false,
    validationSchema,
    onSubmit: () => {
      setShowModal(true);
    },
  });

  const onCloseModal = () => {
    formik.resetForm();
    formik.validateForm();
    setShowModal(false);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <FieldsWrapper title="Личные данные">
        <TextInput
          title="Имя"
          isRequired
          inputProps={formik.getFieldProps('firstName')}
          {...formik.getFieldMeta('firstName')}
        />
        <TextInput
          title="Фамилия"
          isRequired
          inputProps={formik.getFieldProps('lastName')}
          {...formik.getFieldMeta('lastName')}
        />
        <TextInput
          title="Электронная почта"
          isRequired
          type="email"
          inputProps={formik.getFieldProps('email')}
          {...formik.getFieldMeta('email')}
        />
        <FileInput
          error={formik.getFieldMeta('portfolio').error}
          text="Загрузить резюме"
          setError={(error?: string) =>
            formik.setFieldError('portfolio', error)
          }
          file={formik.getFieldProps('portfolio').value}
          setFile={(file: File | null) =>
            formik.setFieldValue('portfolio', file, false)
          }
          className={styles.upload}
        />
      </FieldsWrapper>
      <FieldsWrapper title="Пол" isRequired>
        <RadioGroup
          name="sex"
          values={sexValues}
          setValue={(value: string) => formik.setFieldValue('sex', value, true)}
          checkedValue={formik.getFieldProps('sex').value}
        />
      </FieldsWrapper>
      <FieldsWrapper title="Github">
        <TextInput
          title="Вставьте ссылку на Github"
          inputProps={formik.getFieldProps('github')}
          {...formik.getFieldMeta('github')}
        />
      </FieldsWrapper>
      <FieldsWrapper>
        <Checkbox
          checked={formik.getFieldProps('privacyPolicy').value}
          setValue={(value: boolean) =>
            formik.setFieldValue('privacyPolicy', value, true)
          }
        >
          <AcceptPrivacy showIsRequired privacyPolicy={privacyPolicy} />
        </Checkbox>
      </FieldsWrapper>
      <Button
        disabled={!formik.isValid}
        onClick={formik.handleSubmit}
        text="Отправить"
      />

      <Modal
        title={`Спасибо ${formik.getFieldProps('firstName').value}!`}
        onClose={onCloseModal}
        buttonText="Понятно"
        className={styles.modal}
        isOpen={showModal}
      >
        <div className="text-md">Мы скоро свяжемся с вами</div>
      </Modal>
    </form>
  );
};

const sexValues = [
  {
    label: 'Мужской',
    value: 'male',
  },
  {
    label: 'Женский',
    value: 'female',
  },
];
