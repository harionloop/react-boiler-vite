import { useToggle } from '@/hooks';
import { Button, Layout, Menu, MenuProps, Switch } from 'antd';
import cn from 'classnames';
import { ReactNode, useState } from 'react';
import { AiOutlineCalculator, AiOutlineDashboard } from 'react-icons/ai';
import Flex from '../General/Flex';
import style from './styles/AppMenu.module.less';
const { Sider } = Layout;

type TMainMenuKeys = 'summary' | 'questionnaire' | 'assumptions' | 'valuation' | 'planning';
type TSideMenuProps = { activeBtn: TMainMenuKeys };

const SideMenu: React.FC<TSideMenuProps> = ({ activeBtn }) => {
  const [isCollapsible, toggleIsCollapsible] = useToggle(false);
  const drawerMenuData: { key: TMainMenuKeys; children: MenuProps['items'] }[] = [
    {
      key: 'summary',
      children: []
    },
    {
      key: 'questionnaire',
      children: [
        {
          key: 'questionnaire-sub-1',
          label: 'Business Details',
          icon: <AiOutlineCalculator />
        },
        {
          key: 'questionnaire-sub-2',
          label: 'Competitors',
          icon: <AiOutlineCalculator />
        },
        {
          key: 'questionnaire-sub-3',
          label: 'Financial Information',
          icon: <AiOutlineCalculator />,
          children: [
            {
              key: 'questionnaire-sub-3-1',
              label: 'Income Statement',
              onClick: () => console.log('from questionnaire-sub-3-1')
            },
            {
              key: 'questionnaire-sub-3-2',
              label: 'Balance Sheet',
              onClick: () => console.log('from questionnaire-sub-3-2')
            },
            {
              key: 'questionnaire-sub-3-3',
              label: 'CAP Table',
              onClick: () => console.log('from questionnaire-sub-3-3')
            },
            {
              key: 'questionnaire-sub-3-4',
              label: 'Contingent Liabilities',
              onClick: () => console.log('from questionnaire-sub-3-4')
            },
            {
              key: 'questionnaire-sub-3-5',
              label: 'CF',
              onClick: () => console.log('from questionnaire-sub-3-5')
            },
            {
              key: 'questionnaire-sub-3-6',
              label: 'NWC',
              onClick: () => console.log('from questionnaire-sub-3-6')
            },
            {
              key: 'questionnaire-sub-3-7',
              label: 'Surplus Assets',
              onClick: () => console.log('from questionnaire-sub-3-7')
            }
          ]
        },
        {
          key: 'questionnaire-sub-4',
          label: 'Forensic Signals',
          icon: <AiOutlineCalculator />
        }
      ]
    },
    {
      key: 'valuation',
      children: [
        {
          key: 'valuation-1',
          label: 'Market Approach',
          icon: <AiOutlineCalculator />
        },
        {
          key: 'valuation-2',
          label: 'Income Approach',
          icon: <AiOutlineCalculator />,
          children: [
            {
              key: 'valuation-sub-1',
              label: 'WACC',
              icon: <AiOutlineCalculator />
            },
            {
              key: 'valuation-sub-2',
              label: 'FCFF',
              icon: <AiOutlineCalculator />
            },
            {
              key: 'valuation-sub-3',
              label: 'Report',
              icon: <AiOutlineCalculator />
            }
          ]
        }
      ]
    },
    {
      key: 'planning',
      children: [
        {
          key: 'planning-sub-1',
          label: 'Case Status',
          icon: <AiOutlineCalculator />
        },
        {
          key: 'planning-sub-2',
          label: 'Notifications',
          icon: <AiOutlineCalculator />
        },
        {
          key: 'planning-sub-3',
          label: 'My To Do list',
          icon: <AiOutlineCalculator />
        },
        {
          key: 'planning-sub-4',
          label: 'Client Comminucation',
          icon: <AiOutlineCalculator />
        },
        {
          key: 'planning-sub-5',
          label: 'Members',
          icon: <AiOutlineCalculator />
        },
        {
          key: 'planning-sub-6',
          label: 'Summary',
          icon: <AiOutlineCalculator />
        }
      ]
    },
    {
      key: 'assumptions',
      children: []
    }
  ];

  const data = drawerMenuData.find((item) => item.key === activeBtn);

  if (data?.children && data.children.length === 0) return null;

  return (
    <Sider className={cn(style.sideMenu, 'ant-layout-sider')} collapsible collapsed={!isCollapsible} trigger={null}>
      <Switch size='small' className={cn(style.toggleMenuSwitch, 'ant-switch')} onClick={toggleIsCollapsible} />
      <Menu style={{ paddingTop: '40px' }} mode='inline' items={data?.children && data.children} />
    </Sider>
  );
};

const AppMenu = () => {
  const [showSideMenu, toggleSideMenu] = useToggle(false);
  const [activeBtn, setActiveBtn] = useState<TMainMenuKeys>('summary');

  const menuItem: { key: TMainMenuKeys; icon: ReactNode; onClick: () => void }[] = [
    {
      key: 'summary',
      icon: <AiOutlineDashboard style={{ height: '35px', width: '35px' }} />,
      onClick: () => console.log('summary')
    },
    {
      key: 'questionnaire',
      icon: <AiOutlineCalculator style={{ height: '35px', width: '35px' }} />,
      onClick: () => onMainMenuBtnClick('questionnaire')
    },
    {
      key: 'assumptions',
      icon: <AiOutlineCalculator style={{ height: '35px', width: '35px' }} />,
      onClick: () => console.log('assumptions')
    },
    {
      key: 'valuation',
      icon: <AiOutlineCalculator style={{ height: '35px', width: '35px' }} />,
      onClick: () => onMainMenuBtnClick('valuation')
    },
    {
      key: 'planning',
      icon: <AiOutlineDashboard style={{ height: '35px', width: '35px' }} />,
      onClick: () => onMainMenuBtnClick('planning')
    }
  ];

  const onMainMenuBtnClick = (btnKey: TMainMenuKeys) => {
    toggleSideMenu();
    setActiveBtn(btnKey);
  };

  return (
    <Flex>
      <Sider className={cn(style.appMenu, 'ant-layout-sider')} style={{ maxWidth: '80px !important' }}>
        {menuItem.map((item, ind: number) => (
          <div key={ind} className={cn(style.menuItem, 'ant-menu-item')}>
            <Button type='primary' onClick={item.onClick} className={cn(style.appMenuItem, 'ant-btn')}>
              {item.icon}
            </Button>
          </div>
        ))}
      </Sider>
      {showSideMenu && <SideMenu activeBtn={activeBtn} />}
    </Flex>
  );
};

export default AppMenu;
