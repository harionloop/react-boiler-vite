import { Flex } from '@/components';
import theme from '@/theme/theme';
import { MailFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Tabs, TabsProps, Typography } from 'antd';
import cn from 'classnames';
import React from 'react';
import ACompanyDetailsForm from './Components/ACompanyDetailsForm/ACompanyDetailsForm';
import APersonalDetailsForm from './Components/APersonalDetailsForm/APersonalDetailsForm';
import ASettings from './Components/ASettings/ASettings';
import styles from './MyAccount.module.less';

const advisor = {
  name: 'John Doe',
  email: 'john@gmail.com'
};

const MyAccount: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      label: 'Personal Details',
      key: '1',
      children: <APersonalDetailsForm />
    },
    {
      label: 'Company Details',
      key: '2',
      children: <ACompanyDetailsForm />
    },
    {
      label: 'Settings',
      key: '3',
      children: <ASettings />
    }
  ];

  return (
    <Flex flexDirection='column' padding='20px' className={styles.container}>
      <Typography.Title level={2} style={{ color: theme.color.app_secondary }}>
        My Account
      </Typography.Title>
      <Flex flexDirection='row' height='670px' padding='20px 20px 20px 0' className={styles.mainBody}>
        <Flex flexDirection='column' alignItems='center' padding='100px 20px' width='30%' style={{ backgroundColor: '#fff8f6' }}>
          <Avatar
            size={167}
            icon={<UserOutlined />}
            style={{ color: theme.color.app_secondary, background: theme.color.background_secondary_shade, marginBottom: '40px' }}
          />
          <Typography.Text style={{ fontSize: '19px', color: theme.color.text_secondary }}>{advisor.name}</Typography.Text>
          <Flex justifyContent='center' alignItems='center' gap='15px'>
            <MailFilled />
            <Typography.Text style={{ fontSize: '18px' }}>{advisor.email}</Typography.Text>
          </Flex>
        </Flex>
        <Flex width='90%' padding='40px' style={{ backgroundColor: 'white' }}>
          <Tabs type='card' items={items} style={{ width: '100%' }} className={cn(styles.tabs, 'customTabs')} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MyAccount;
