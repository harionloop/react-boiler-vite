import theme from '@/theme/theme';
import { CheckCircleFilled } from '@ant-design/icons/lib/icons';
import { Button, ButtonProps, Typography } from 'antd';
import React, { ReactNode } from 'react';
import InfoBox from '../App/InfoBox';
import Flex from './Flex';

const { Title } = Typography;

type SubscribeProps = {
  icon: string | ReactNode;
  isSubscribed: boolean;
  onClick: () => void;
  buttonProps?: ButtonProps;
  isLoading?: boolean;
};
const Subscribe: React.FC<SubscribeProps> = ({ icon, isSubscribed, onClick, buttonProps, isLoading }) => {
  return (
    <Flex alignItems='center' justifyContent='center' flexDirection='column' gap='40px'>
      <InfoBox>
        <Title level={5} style={{ color: theme.color.app_secondary }}>
          This feature is not available yet please subscribe to get notified when it is available.
        </Title>
      </InfoBox>
      {icon}
      <Button
        {...buttonProps}
        onClick={onClick}
        className='main-btn'
        type={isSubscribed ? 'text' : 'primary'}
        style={{ width: '300px' }}
        size='large'
        disabled={isSubscribed}
        loading={isLoading}
        icon={isSubscribed && <CheckCircleFilled style={{ color: theme.color.app_primary }} />}
      >
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </Button>
    </Flex>
  );
};

export default Subscribe;
