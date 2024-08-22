import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import React from 'react';
import { useController } from 'react-hook-form';
import CheckboxGroup, { TCheckboxGroupProps } from '../General/CheckboxGroup';

type FCheckboxGroupProps = {
  name: string;
} & TCheckboxGroupProps;

const FCheckboxGroup: React.FC<FCheckboxGroupProps> = React.forwardRef(({ name, ...props }, ref) => {
  const { field } = useController({ name, defaultValue: false });
  const config = {
    ...props,
    ...field,
    ref: ref,
    onChange: (e: CheckboxValueType[]) => {
      field.onChange(e);
      props?.onChange?.(e);
    }
  };

  return <CheckboxGroup {...config} />;
});

FCheckboxGroup.displayName = 'FCheckboxGroup';
export default FCheckboxGroup;
