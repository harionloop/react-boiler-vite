import { TCommaFormat } from '@/types/app';
import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
export interface HTMLNumericElement extends Omit<HTMLInputElement, 'value' | 'name'> {
  value: number | null | '';
  name?: string;
}

export type NumberInputProps = Omit<TextFieldProps, 'onChange'> & {
  value?: number | string | null;
  allowFloat?: boolean;
  maxFloatNumber?: number;
  maxLength?: number;
  onChange?(e: React.ChangeEvent<HTMLNumericElement>): void;
  isAllowNegative?: boolean;
  commaFormat?: TCommaFormat;
  readOnly?: boolean;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};
function NumberInput(props: NumberInputProps) {
  const {
    isAllowNegative = false,
    allowFloat = false,
    value,
    commaFormat,
    maxFloatNumber = 3,
    readOnly,
    InputProps,
    onKeyDown,
    InputLabelProps,
    ...rest
  } = props;

  const defaultValue: any = value === null ? NaN : value;

  const formatter = (number?: number) => {
    if (!number?.toString()) {
      return '';
    }

    if (isAllowNegative && number.toString() === '-') {
      return number;
    }

    const validNumber = Number(number?.toString().replaceAll(',', ''));

    if (allowFloat) {
      const [newNumber, float = 0] = number?.toString().split('.') || [number];
      const isDot = number?.toString().includes('.');

      const floatFormatted = Number(newNumber)?.toLocaleString(commaFormat);

      return isDot ? (float ? floatFormatted + '.' + float : floatFormatted + '.') : floatFormatted;
    }

    if (validNumber && commaFormat) {
      const formattedNumber = Number(validNumber)?.toLocaleString(commaFormat);
      return formattedNumber;
    }

    return number;
  };

  function handleKeyDown(e: any): void {
    const key = e.key;
    const value = !commaFormat ? e.target.value : e.target.value.replaceAll(',', '');

    const negativeKey = isAllowNegative && key === '-';
    const negativeValue = negativeKey && value?.length && !isNaN(Number(key + value));

    const negative = negativeKey && negativeValue;

    if (
      key === 'ArrowRight' ||
      key === 'ArrowUp' ||
      key === 'ArrowLeft' ||
      key === 'ArrowDown' ||
      key === 'Backspace' ||
      key === 'Enter' ||
      key === 'Tab' ||
      key === 'Delete' ||
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true) ||
      (negative && key === '-')
    ) {
      onKeyDown?.(e);
      return;
    }
    if (key === ' ') e.preventDefault();

    if (key === '.' && !allowFloat) e.preventDefault();
    if (e.ctrlKey || e.shiftKey) e.preventDefault();
    if (isNaN(Number(value + key))) e.preventDefault();
  }

  function handleChange(e: TEvent<any>): void {
    const newEvent: any = {
      ...e,
      currentTarget: {
        ...e.currentTarget,
        name: props.name,
        value: ''
      },
      target: {
        ...e.target,
        name: props.name,
        value: ''
      }
    };
    const inputValue = e.target.value;

    if (inputValue === '') {
      e.target.value = '';
      newEvent.target.value = null;
      newEvent.currentTarget.value = null;
      return props.onChange && props.onChange(newEvent);
    } else {
      let newValue = inputValue;
      if (commaFormat) {
        newValue = newValue.replaceAll(',', '');
      }
      if (isAllowNegative) {
        const negative = newValue === '-';
        const negativeValue = newValue.includes('-') && '-' + newValue.replace('-', '');
        if (negative) newValue = '-';
        if (negativeValue) newValue = negativeValue;
      }

      if (allowFloat && maxFloatNumber > 0) {
        const checkDecimal = Number(newValue)?.toString().split('.');

        if (checkDecimal[1]?.length > maxFloatNumber) {
          newValue = checkDecimal[0] + '.' + checkDecimal[1].slice(0, -1);
        }
      }

      newEvent.target.value = newValue;
      newEvent.currentTarget.value = newValue;
      e.target.value = newValue;
      return props.onChange && props.onChange(newEvent);
    }
  }

  const hasValue = value !== undefined;
  let inputDefaultValue;
  let inputValue;

  if (hasValue) {
    if (isNaN(defaultValue) || value === '') {
      inputValue = '';
    } else {
      inputValue = defaultValue;
    }
  }

  if (!hasValue && !isNaN(defaultValue)) {
    inputDefaultValue = defaultValue;
  }

  const InputPropsValue = {
    ...InputProps,
    readOnly,
    className: readOnly ? 'read-only' : undefined,
    disableUnderline: readOnly
  };

  const onPaste = (e: React.ClipboardEvent<HTMLInputElement> & any) => {
    e.preventDefault();
    const val = e.clipboardData.getData('text');
    let newValue = val;

    if (!newValue) {
      return;
    }

    if (commaFormat) {
      newValue = newValue.replaceAll(',', '');
    }

    const isNeg = newValue[0] === '-';
    if (!isAllowNegative && isNeg) {
      return;
    }
    const isFloat = newValue.split('.').length === 2;

    if (!allowFloat && isFloat) {
      return;
    }
    if (!Number(newValue)) {
      return;
    }

    if (allowFloat && maxFloatNumber > 0) {
      const checkDecimal = Number(newValue)?.toString().split('.');
      if (checkDecimal[1]?.length > maxFloatNumber) {
        newValue = checkDecimal[0] + '.' + checkDecimal[1].slice(checkDecimal[1].length - 1 - maxFloatNumber, -1);
      }
    }

    const newEvent: any = {
      ...e,
      currentTarget: {
        ...e.currentTarget,
        name: props.name,
        value: newValue
      },
      target: {
        ...e.target,
        name: props.name,
        value: newValue
      }
    };
    e.target.value = newValue;
    e.currentTarget.value = newValue;
    props.onChange && props.onChange(newEvent);
  };

  const _InputLabelProps = { shrink: true, ...InputLabelProps, style: { fontSize: '20px', ...InputLabelProps?.style } };

  const _inputProps = {
    ...props.inputProps,
    name: rest.name,
    onPaste,
    maxLength: props.maxLength || 150,
    placeholder: readOnly ? '-' : props.inputProps?.placeholder
  };

  return (
    <TextField
      // defaultValue={inputDefaultValue}

      {...rest}
      variant={props.variant || 'standard'}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={formatter(inputValue || value)}
      InputProps={InputPropsValue}
      inputProps={_inputProps}
      InputLabelProps={_InputLabelProps}
    />
  );
}

export default NumberInput;
