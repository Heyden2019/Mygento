import * as Yup from 'yup';

const TOO_SHORT = 'Слишком короткое значение';
const TOO_LONG = 'Слишком длинное значение';
const INVALID_NAME = 'Допускаются только буквы';
const REQUIRED = 'Обязательное поле';
const INVALID_EMAIL = 'Невалидный email';
const INVALID_GITHUB = 'Проверьте ссылку';

const onlyLetter = new RegExp('^[A-zА-яЁё]+$');
const github = new RegExp('^https://github.com/.+$');

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, TOO_SHORT)
    .max(50, TOO_LONG)
    .matches(onlyLetter, INVALID_NAME)
    .required(REQUIRED),
  lastName: Yup.string()
    .min(2, TOO_SHORT)
    .max(50, TOO_LONG)
    .matches(onlyLetter, INVALID_NAME)
    .required(REQUIRED),
  email: Yup.string().email(INVALID_EMAIL).required(REQUIRED),
  sex: Yup.string().required('укажите пол'),
  github: Yup.string().matches(github, INVALID_GITHUB),
  privacyPolicy: Yup.boolean().isTrue(),
});
