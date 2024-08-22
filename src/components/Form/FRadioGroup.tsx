import { RadioChangeEvent } from 'antd';
import React from 'react';
import { useController } from 'react-hook-form';
import CustomRadioGroup, { CustomRadioGroupProps } from '../General/CustomRadioGroup';

type FRadioGroupProps = {
  name: string;
} & CustomRadioGroupProps;

const FRadioGroup: React.FC<FRadioGroupProps> = React.forwardRef(({ name, showError, ...props }, ref) => {
  const { field, fieldState } = useController({ name, defaultValue: '' });
  const { error } = fieldState;

  const config = {
    ...props,
    ...field,
    error,
    showError,
    ref: ref,
    onChange: (e: RadioChangeEvent) => {
      props?.onChange?.(e);
      field.onChange(e.target.value);
    }
  };
  return <CustomRadioGroup {...config} />;
});

FRadioGroup.displayName = 'FRadioGroup';
export default FRadioGroup;
