import { Checkbox } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import cn from 'classnames';
import React from 'react';

type TItem = { value: string | number | boolean; children: React.ReactNode | string };
export type TCheckboxGroupProps = {
  checkboxClassName?: string;
  checkboxStyle?: React.CSSProperties;
  items: TItem[];
  children?: React.ReactNode;
  readOnly?: boolean;
  onItemChange?: (e: CheckboxChangeEvent, index: number) => void;
} & CheckboxGroupProps;

const CheckboxGroup: React.FC<TCheckboxGroupProps> = ({
  items,
  checkboxClassName,
  checkboxStyle = {},
  value,
  readOnly,
  onItemChange,
  ...props
}) => {
  const configProps = {
    ...props,
    onClick: (e: any) => {
      readOnly && e.preventDefault();
    }
  };
  return (
    <Checkbox.Group {...configProps} value={value}>
      <>
        {items.map((item: TItem, index: number) => {
          if (value?.includes(item.value) || !readOnly) {
            return (
              <Checkbox
                onChange={(e) => onItemChange?.(e, index)}
                value={item.value}
                key={index}
                className={cn('custom-checkbox', checkboxClassName)}
                style={{ ...checkboxStyle }}
              >
                {item.children}
              </Checkbox>
            );
          }
        })}

        {props.children}
      </>
    </Checkbox.Group>
  );
};

export default CheckboxGroup;
