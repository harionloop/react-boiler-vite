import theme from '@/theme/theme';
import { Modal, Typography } from 'antd';
import Flex from './Flex';

export type CustomModalProps = {
  headerTitle?: React.ReactNode | string;
  headerTitleStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode | string;
  modifyTitle?: boolean;
  modifyDescription?: boolean;
} & React.ComponentProps<typeof Modal>;

const CustomModal = (props: CustomModalProps) => {
  const { icon, headerTitle, description, children, headerTitleStyle } = props;

  return (
    <Modal {...props}>
      <div>
        <Flex style={{ padding: '5px' }} alignItems={'center'} gap={'20px'}>
          {icon && <div>{icon}</div>}
          {headerTitle && (
            <div>
              {!props.modifyTitle ? (
                <Typography.Title level={4} style={{ ...headerTitleStyle, color: theme.color.app_secondary }}>
                  {headerTitle}
                </Typography.Title>
              ) : (
                headerTitle
              )}
            </div>
          )}
        </Flex>
        {description && (
          <div className='mt1'>
            {props.modifyDescription ? <Typography.Text type='secondary'>{description}</Typography.Text> : description}
          </div>
        )}
        <div className='mt1'>{children}</div>
      </div>
    </Modal>
  );
};

export default CustomModal;
