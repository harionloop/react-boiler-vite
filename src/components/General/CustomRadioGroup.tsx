import { Radio, RadioGroupProps } from 'antd';
import cn from 'classnames';
import React from 'react';
import { FieldError } from 'react-hook-form';
import Flex from './Flex';

type TItem = { value: string | number | boolean; children: React.ReactNode | string };
export type CustomRadioGroupProps = {
  buttonClassName?: string;
  radioBtnStyle?: React.CSSProperties;
  items: TItem[];
  children?: React.ReactNode;
  readOnly?: boolean;
  label?: React.ReactNode | string;
  showError?: boolean;
  error?: FieldError;
  required?: boolean;
} & RadioGroupProps;

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  items,
  buttonClassName,
  radioBtnStyle,
  readOnly,
  value,
  showError,
  error,
  required,
  ...props
}) => {
  return (
    <>
      <Flex flexDirection='column'>
        {props.label && (
          <div className={cn('radio-label', 'sub-title font-weight-600', error && 'error')}>
            {props.label}
            {required && <span className='required ml1'>*</span>}
          </div>
        )}
        {error && showError && <div className='error-sub-msg'>{error?.message}</div>}
      </Flex>

      <Radio.Group {...props} value={value} className={cn('custom-radio', props.className)}>
        {items.map((item: TItem, index: number) => {
          if (item.value === value || !readOnly) {
            return (
              <Radio.Button value={item.value} key={index} className={cn(buttonClassName)} style={{ ...radioBtnStyle }}>
                {item.children}
              </Radio.Button>
            );
          }
        })}
        {props.children}
      </Radio.Group>
    </>
  );
};

export default CustomRadioGroup;
