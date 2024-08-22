import { NotFound, ProtectedRoutes, ThemeTemplate } from '@/components';
import ForgetPassword from '@/pages/ForgetPassword/ForgetPassword';
import SetPassword from '@/pages/SetPassword/SetPassword';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

import MyAccount from './pages/ProtectedRoutes/MyAccount/MyAccount';
import Register from './pages/Register/Register';
import { ROUTE } from './utils/constants';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path={ROUTE.myAccount} element={<MyAccount />} />
        </Route>

        <Route path={ROUTE.login} element={<Login />} />
        <Route path={ROUTE.register} element={<Register />} />
        <Route path={ROUTE.forgetPassword} element={<ForgetPassword />} />
        <Route path={ROUTE.resetPassword} element={<SetPassword />} />
        <Route path='*' element={<NotFound />} />
        {process.env.NODE_ENV !== 'production' && <Route path='/theme-template' element={<ThemeTemplate />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
