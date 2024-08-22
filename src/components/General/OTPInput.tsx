import theme from '@/theme/theme';
import OtpInput from 'react-otp-input';

interface IProps {
  value: string;
  onChange: (otp: string) => void;
}

const OTPInput = ({ value, onChange }: IProps) => {
  return (
    <OtpInput
      containerStyle={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      inputStyle={{
        border: 'none',
        borderBottom: '2px solid black',
        width: '50px'
      }}
      focusStyle={{
        borderColor: theme.color.app_primary
      }}
      isInputNum
      shouldAutoFocus
      value={value}
      onChange={onChange}
      numInputs={6}
    />
  );
};

export default OTPInput;
