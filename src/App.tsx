import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Result } from 'antd';
import React from 'react';
import { Flex } from './components';
import Router from './Router';
import './styles/index.less';
import muiTheme from './theme/muiTheme';
const App: React.FC = () => {
  const matches = useMediaQuery('(min-width:700px)');

  if (!matches) {
    return (
      <Flex alignItems='center' justifyContent='center' height='100vh'>
        <Result status='warning' title='Please rotate your screen or use desktop.' />
      </Flex>
    );
  }

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
