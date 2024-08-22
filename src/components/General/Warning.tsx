import theme from '@/theme/theme';
import { AiFillInfoCircle } from 'react-icons/ai';
import CustomModal from './CustomModal';

type WarningProps = {
  message: string;
  handleYes: () => void;
  handleNo: () => void;
  show: boolean;
};

const Warning = ({ message, handleYes, handleNo, show }: WarningProps) => {
  return (
    <CustomModal
      headerTitle={message}
      headerTitleStyle={{ color: theme.color.error_color }}
      open={show}
      okText='Yes'
      cancelText='No'
      onCancel={handleNo}
      onOk={handleYes}
      icon={<AiFillInfoCircle size={52} color={theme.color.warning_color} />}
    />
  );
};

export default Warning;
