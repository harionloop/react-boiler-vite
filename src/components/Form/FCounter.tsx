import Counter, { TCounter } from '@/components/General/Counter';
import { FC } from 'react';
import { useController } from 'react-hook-form';

type TFCounterProps = TCounter & { name: string };

const FCounter: FC<TFCounterProps> = ({ name, onCounterChange, ...props }) => {
  const { fieldState, field } = useController({ name, defaultValue: '' });
  const isError = !!(fieldState && fieldState.error);

  const config = {
    ...props,
    name,
    error: isError,
    value: field.value
  };

  const onChange = (value: number | null) => {
    field.onChange(value ?? null);
    onCounterChange?.(value);
  };
  return <Counter onCounterChange={onChange} errorMsg={isError && fieldState.error?.message} {...config} />;
};

export default FCounter;
