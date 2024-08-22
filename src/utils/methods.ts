import dayjs from 'dayjs';
import * as yup from 'yup';
import { ValidationMessages } from './constants';

const autoCompleteValidation = () => yup.object().shape({ label: yup.string(), value: yup.string().required() }).nullable();
const dateValidation = (field: string) => yup.date().typeError(ValidationMessages.Invalid(field)).nullable();

export const validateNumber = () => yup.number().typeError('Invalid number.').nullable();

const dateFormat = (date: string, format?: string) => dayjs(date).format(format || 'MMM YYYY');

const decimalRoundOff = (n: number) => {
  if (isNaN(n)) {
    return n;
  } else {
    const result = n - Math.floor(n) !== 0;
    if (result) return Math.round(n * 1000) / 1000;
    else return n;
  }
};

export const getInitials = (name: string, count = 3, transformUpperCase = true) => {
  const parts = name.split(' ').slice(0, count);

  let initials = '';

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== '') {
      initials += parts[i][0];
    }
  }

  return transformUpperCase ? initials.toUpperCase() : initials;
};

export const currencyFormatter = (value: number, code?: string, currency?: string, decimal?: number) =>
  new Intl.NumberFormat(code || 'en-IN', {
    style: 'currency',
    currency: currency || 'INR',
    maximumFractionDigits: decimal ?? 2
  }).format(value);

export const commaFormatter = (value: number) => {
  const output = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2
  }).format(value);
  return output;
};

export const denominatorFormatter = (d: string) => {
  return d.charAt(0);
};

export const toCardinal = (num: number) => {
  const ones = num % 10;
  const tens = num % 100;
  if (tens < 11 || tens > 13) {
    switch (ones) {
      case 1:
        return num + 'st';
      case 2:
        return num + 'nd';
      case 3:
        return num + 'rd';
    }
  }
  return num + 'th';
};

export default { autoCompleteValidation, dateFormat, validateNumber, decimalRoundOff, dateValidation };
