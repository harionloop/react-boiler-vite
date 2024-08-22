import theme from '@/theme/theme';
import { Typography } from 'antd';
import Flex from './Flex';

const { Title, Text } = Typography;

const styles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: 99,
  transform: 'translate(-50%, -50%)',
  padding: '60px'
};

type CommonFormateProps = {
  children?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
};

const CommonFormat: React.FC<CommonFormateProps> = ({ children, title, description, icon }) => {
  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center' style={styles} className='formWrapper' gap='30px'>
      {icon}
      <>
        <Title level={3} style={{ color: theme.color.app_secondary, margin: 0, textAlign: 'center' }}>
          {title}
        </Title>
        <Text type='secondary'>{description}</Text>
      </>
      {children}
    </Flex>
  );
};

export default CommonFormat;
