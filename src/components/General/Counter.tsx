import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IconButton, TextFieldProps } from '@mui/material';
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import NumberInput, { HTMLNumericElement, NumberInputProps } from './NumberInput';

export type TCounter = {
  errorMsg?: string | boolean;
  increaseBy?: number;
  decreaseBy?: number;
  onCounterChange?: (value: number | null) => void;
  maxLength?: number;
  minLength?: number;
} & TextFieldProps &
  NumberInputProps;

const Counter: FC<TCounter> = ({
  increaseBy = 1,
  decreaseBy,
  value = null,
  maxLength = 100,
  minLength = 0,
  errorMsg,
  readOnly,
  onCounterChange,
  ...props
}) => {
  const [showMinLimit, setShowMinLimit] = useState(false);
  const [showMaxLimit, setShowMaxLimit] = useState(false);

  const onIncrease = () => {
    const newValue = +(value || 0) + (decreaseBy || increaseBy);
    if (newValue <= maxLength) {
      setShowMinLimit(false);

      onCounterChange?.(newValue);
    } else {
      setShowMaxLimit(true);

      onCounterChange?.(maxLength);
    }
  };

  const onDecrease = () => {
    const newValue = +(value || 0) - (decreaseBy || increaseBy);
    if (newValue >= minLength) {
      setShowMinLimit(false);

      onCounterChange?.(newValue);
    } else {
      setShowMinLimit(true);
      onCounterChange?.(minLength);
    }
  };

  const onChange = (e: ChangeEvent<HTMLNumericElement>) => {
    const value = !e.target.value ? null : Number(e.target.value);
    if (value) {
      if (value >= maxLength) {
        onCounterChange?.(maxLength);
        setShowMaxLimit(true);
      } else if (value <= minLength) {
        onCounterChange?.(minLength);
        setShowMinLimit(true);
      } else {
        onCounterChange?.(value);
        setShowMaxLimit(false);
      }
    } else {
      onCounterChange?.(value);
    }
  };

  const showWarning = (msg: 'min' | 'max') => {
    const timer = setTimeout(() => {
      if (msg === 'min') {
        setShowMinLimit(false);
      } else {
        setShowMaxLimit(false);
      }
      clearTimeout(timer);
    }, 3000);

    return (
      timer && (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {msg === 'min' ? `${minLength} is minimum limit.` : `${maxLength} is maximum limit.`}
        </span>
      )
    );
  };

  const InputProps = {
    ...props.InputProps,
    endAdornment: !readOnly && (
      <IconButton className={(props.disabled && 'inActiveLink') || ''} onClick={onIncrease}>
        <PlusOutlined />
      </IconButton>
    ),
    startAdornment: !readOnly && (
      <IconButton className={(props.disabled && 'inActiveLink') || ''} onClick={onDecrease}>
        <MinusOutlined />
      </IconButton>
    )
  };

  const config = {
    ...props,
    helperText: errorMsg || (showMinLimit && showWarning('min')) || (showMaxLimit && showWarning('max'))
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const key = e.key;
    if (key === 'ArrowRight' || key === 'ArrowUp') {
      onIncrease();
    }
    if (key === 'ArrowLeft' || key === 'ArrowDown') {
      onDecrease();
    }
  };

  return (
    <NumberInput
      {...config}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      InputProps={InputProps}
      readOnly={readOnly}
      name={props.name}
      inputProps={{ ...props.inputProps, style: { textAlign: readOnly ? 'left' : 'center', padding: '13px', ...props?.inputProps?.style } }}
    />
  );
};

export default Counter;
