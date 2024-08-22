import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/NotFound.module.less';

const NotFound: React.FC = () => {
  const navigation = useNavigate();

  const back = () => {
    navigation('/');
  };

  return (
    <div className={styles.notFoundContainer}>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={back}>
            Back
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
