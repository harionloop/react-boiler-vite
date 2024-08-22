import theme from '@/theme/theme';
import { Typography } from 'antd';
import CustomModal from './CustomModal';
import Flex from './Flex';

const ThankYouModal: React.FC<{ show: boolean; hide: () => void }> = ({ show, hide }) => {
  return (
    <CustomModal footer={null} open={show} onCancel={hide}>
      <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        <Typography.Title className='m0' style={{ color: theme.color.app_secondary }}>
          Thank You!
        </Typography.Title>
        <Typography.Title level={4}>We will get back to you once this feature is available.</Typography.Title>
      </Flex>
    </CustomModal>
  );
};

export default ThankYouModal;
