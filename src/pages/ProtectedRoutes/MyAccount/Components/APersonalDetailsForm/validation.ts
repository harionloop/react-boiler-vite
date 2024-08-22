import { ValidationMessages as V } from '@/utils/constants';
import * as yup from 'yup';

export const PersonalValidationSchema = yup.object().shape({
  firstName: yup.string().required(V.Required('First Name')),
  lastName: yup.string().required(V.Required('Last Name')),
  phone: yup.number().required(V.Required('Phone Number')),
  designation: yup.string().required(V.Required('Designation')),
  dateOfJoining: yup.string().required(V.Required('Date of Joining')),
  adddress: yup.string().required(V.Required('Residential Address'))
});
