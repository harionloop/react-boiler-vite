import { ValidationMessages as V } from '@/utils/constants';
import * as yup from 'yup';

export const CompanyValidationSchema = yup.object().shape({
  companyDescription: yup.string().required(V.Required('Company Description')),
  companyAddress: yup.string().required(V.Required('Company Address')),
  companyServices: yup.string().required(V.Required('Company Services')),
  companyLocation: yup
    .object()
    .shape({ label: yup.string(), value: yup.string().required(V.Required('Company Location')) })
    .nullable(),
  contactNumber: yup.number().required(V.Required('Contact Number')),
  websiteURL: yup.string().required(V.Required('Website URL'))
});
