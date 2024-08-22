import { LogoSvg } from '@/assets/svg';
import { Flex } from '@/components';
import { useToggle } from '@/hooks';
import theme from '@/theme/theme';
import { ROUTE } from '@/utils/constants';
import {
  BookOutlined,
  CustomerServiceOutlined,
  DownOutlined,
  PoweroffOutlined,
  QuestionCircleOutlined,
  SettingOutlined
} from '@ant-design/icons/lib/icons';
import { Avatar, Dropdown, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppMenu from './AppMenu';
import ContactUs from './ContactUs';
import HelpMenu from './HelpMenu';
import style from './styles/App.module.less';

interface IAppLayout {
  children: React.ReactNode;
}
const AppLayout: React.FC<IAppLayout> = (props) => {
  const { children } = props;
  const navigation = useNavigate();

  const [showHelpMenu, toggleHelpMenu] = useToggle(false);
  const [showContactModal, toggleContactUsModal] = useToggle(false);

  const logout = () => {
    navigation(ROUTE.login);
  };
  const menu = {
    items: [
      {
        label: (
          <Space className='pl1' onClick={() => navigation(ROUTE.myAccount)}>
            <SettingOutlined /> My Account
          </Space>
        ),
        key: '0',
        onClick: () => navigation(ROUTE.myAccount)
      },
      {
        label: (
          <Space className='pl1' onClick={logout}>
            <PoweroffOutlined /> Logout
          </Space>
        ),
        key: '1',
        onClick: logout
      }
    ]
  };

  const helpMenu = {
    items: [
      {
        label: (
          <Space className='pl1'>
            <BookOutlined /> Dictonary
          </Space>
        ),
        key: '0',
        onClick: toggleHelpMenu
      },
      {
        label: (
          <Space className='pl1'>
            <CustomerServiceOutlined /> Contact Us
          </Space>
        ),
        key: '1',
        onClick: toggleContactUsModal
      }
    ]
  };

  return (
    <div className={style.appLayout}>
      <header className={style.appHeader}>
        <div>
          <LogoSvg />
        </div>

        <Flex className='m2' gap='25px'>
          <Dropdown menu={helpMenu} className='pointer' trigger={['click']}>
            <Flex alignItems='center'>
              <QuestionCircleOutlined />
              <span style={{ fontSize: theme.font.lg }}>Help</span>
            </Flex>
          </Dropdown>

          <Dropdown menu={menu} className='pointer' trigger={['click']}>
            <Space>
              <Avatar style={{ color: theme.color.app_primary_shade, background: theme.color.app_primary_shade + '22' }}>user img</Avatar>
              <Typography.Paragraph
                style={{ minWidth: '100px', maxWidth: '200px', marginBottom: '0px', textTransform: 'capitalize' }}
                ellipsis={true}
              >
                user name
              </Typography.Paragraph>
              <DownOutlined />
            </Space>
          </Dropdown>
        </Flex>
      </header>
      <div className={style.appContainer}>
        <AppMenu />
        <div className={style.content}>{children}</div>
        <HelpMenu showHelpMenu={showHelpMenu} toggleHelpMenu={toggleHelpMenu} />
        <ContactUs handleClose={toggleContactUsModal} showModal={showContactModal} />
      </div>
    </div>
  );
};

export default AppLayout;
