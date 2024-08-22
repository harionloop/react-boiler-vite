import React from 'react';
import { Outlet } from 'react-router-dom';
import AppLayout from './AppLayout';

const ProtectedRoutes: React.FC = () => {
  // const token = window.localStorage.getItem('token');

  // if (token)
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );

  // return (
  //   <Flex justifyContent='center' alignItems='center' height='100%'>
  //     <Spin size='large' tip='Loading' className='spinner' />
  //   </Flex>
  // );
};

export default ProtectedRoutes;
