import { TextField } from '@mui/material';
import type { SelectProps } from 'antd';
import { Select, Typography } from 'antd';
import React from 'react';
import { useController } from 'react-hook-form';

type TMultiSelectProps = {
  name: string;
  label: string;
  readOnly?: boolean;
} & SelectProps;

const FMultiSelect: React.FC<TMultiSelectProps> = ({ name, label, readOnly, ...props }) => {
  const { field, fieldState } = useController({ name, defaultValue: [] });

  const handleChange = (value: TEvent) => field.onChange(value);
  const isError = !!fieldState && fieldState.error;

  return (
    <div id='selectDiv' style={{ position: 'relative' }}>
      <Typography.Text strong type='secondary'>
        {label}
      </Typography.Text>

      {!readOnly ? (
        <Select
          {...props}
          {...field}
          mode='tags'
          style={{ width: '100%', marginTop: '10px' }}
          size='large'
          status={isError ? 'error' : ''}
          onChange={handleChange}
          getPopupContainer={() => document.getElementById('selectDiv')!}
        />
      ) : (
        <TextField
          variant='standard'
          style={{ width: '100%', marginTop: '10px' }}
          value={field.value?.join(', ')?.toString() || '-'}
          InputProps={{ readOnly, className: readOnly ? 'read-only' : undefined, disableUnderline: readOnly }}
        />
      )}
      {isError && <Typography.Text type='danger'>{fieldState?.error?.message}</Typography.Text>}
    </div>
  );
};

export default FMultiSelect;
