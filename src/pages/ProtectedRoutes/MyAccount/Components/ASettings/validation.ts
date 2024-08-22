import { ValidationMessages as V } from '@/utils/constants';
import * as yup from 'yup';

export const SettingsValidationSchema = yup.object().shape({
  currentPassword: yup.string().required(V.Required('Current Password')),
  newPassword: yup.string().required(V.Required('New Password')),
  confirmPassword: yup
    .string()
    .required(V.Required('Confirm Password'))
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
});
