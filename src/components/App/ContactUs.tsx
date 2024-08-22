import theme from '@/theme/theme';
import { ApiMessages } from '@/utils/constants';
import { TextField } from '@mui/material';
import { notification } from 'antd';
import React, { useRef } from 'react';
import { RiCustomerService2Line } from 'react-icons/ri';
import CustomModal from '../General/CustomModal';

type ContactUsProps = {
  showModal: boolean;
  handleClose: () => void;
};
const ContactUs: React.FC<ContactUsProps> = ({ showModal, handleClose }) => {
  const inputRef: any = useRef();
  const [message, setMessage] = React.useState<string>('');

  const handleOk = () => {
    const sendMessage = async (message: string) => {
      try {
        notification.success({ message: 'We have recived your query. Our team will connect with you very soon.' });
        handleClose();
      } catch (err: any) {
        notification.error({
          message: ApiMessages.Error.common
        });
      }
    };
    if (message) sendMessage(message);
  };
  return (
    <CustomModal
      icon={<RiCustomerService2Line size={40} style={{ color: theme.color.app_secondary }} />}
      headerTitle={'How can we help you?'}
      description={
        <span>
          Send message to us with any questions or inquiries or send Email to
          <span style={{ color: theme.color.app_secondary, marginLeft: '5px' }}>support@valunaire.ai</span> We would be happy to answer your
          questions and set up a meeting with you.
        </span>
      }
      width={'700px'}
      open={showModal}
      onOk={handleOk}
      onCancel={handleClose}
      destroyOnClose
      okText={'Send'}
      maskClosable={false}
    >
      <>
        <TextField
          label={'Message'}
          ref={inputRef}
          placeholder='Write us messages'
          multiline
          rows={4}
          className='mt3'
          onChange={(e: TEvent) => setMessage(e.target.value)}
          fullWidth
          inputProps={{ maxLength: '1000' }}
          InputLabelProps={{ shrink: true }}
        />
      </>
    </CustomModal>
  );
};

export default ContactUs;
