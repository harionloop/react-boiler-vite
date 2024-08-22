import theme from '@/theme/theme';
import { Switch, Typography } from 'antd';
import { useState } from 'react';
import Flex from './Flex';

export type CustomSwitchProps = {
  startLabel: string;
  endLabel: string;
  isChecked?: boolean;
  label: string;
  onCheck?: (value: boolean) => void;
};
const CustomSwitch = (props: CustomSwitchProps) => {
  const { startLabel, endLabel, isChecked = false, label, onCheck } = props;
  const [value, setValue] = useState(isChecked);

  const onChange = (checked: boolean) => {
    setValue(checked);
    onCheck?.(checked);
  };

  return (
    <Flex flexDirection='column'>
      <Typography.Text type='secondary'>{label}</Typography.Text>
      <Flex alignItems='center' gap='10px'>
        <Typography.Text strong type='secondary' style={{ color: value === false ? theme.color.app_secondary : '' }}>
          {startLabel}
        </Typography.Text>
        <Switch checked={value} onChange={onChange} />
        <Typography.Text strong type='secondary' style={{ color: value ? theme.color.app_secondary : '' }}>
          {endLabel}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

export default CustomSwitch;
