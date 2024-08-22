import NumberInput, { NumberInputProps } from '@/components/General/NumberInput';
import { TextFieldProps } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';

type TFNumberInput = { name: string; readOnly?: boolean } & NumberInputProps & TextFieldProps;

const FNumberInput: React.FC<TFNumberInput> = React.forwardRef(({ name, ...props }, ref) => {
  const { field, fieldState } = useController({ name, defaultValue: '' });
  const isError = !!(fieldState && fieldState.error);
  const config = {
    ...props,
    ...field,
    fullWidth: true,
    error: isError,
    ref: ref,
    helperText: isError && fieldState.error?.message
  };

  return <NumberInput {...config} />;
});

FNumberInput.displayName = 'FNumberInput';
export default FNumberInput;
