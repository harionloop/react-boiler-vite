import { useController } from 'react-hook-form';
import CustomSwitch, { CustomSwitchProps } from '../General/CustomSwitch';

const FCustomSwitch = ({ name, ...props }: CustomSwitchProps & { name: string }) => {
  const { field, fieldState } = useController({ name, defaultValue: false });
  const onCheck = (checked: boolean) => field.onChange(checked);

  const config = {
    ...field,
    onChange: onCheck
  };

  const configFormControl = {
    error: false
  };

  if (fieldState && fieldState.isTouched && fieldState.error) {
    configFormControl.error = true;
  }

  return <CustomSwitch onCheck={onCheck} {...config} {...props} />;
};

export default FCustomSwitch;
