import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ENV } from './helpers/constants';
import './styles/index.less';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>
);
