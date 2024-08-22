import { getAppENV } from './utils';

export const API_CONSTANTS = {
  LOCAL: import.meta.env.VITE_BASE_URL || 'http://localhost:3030/api/',
  DEV: 'https://dev.valuenaire.ai/api/',
  QA: 'https://qa.valuenaire.ai/api/',
  STAGE: 'http://localhost:8080/api/',
  PRODUCTION: 'https://app.valuenaire.ai/api/'
};

const APP_ENV = getAppENV();

export const ENV = {
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  LINKEDIN_CLIENT_ID: import.meta.env.VITE_LINKEDIN_CLIENT_ID
};

export const APP_URL = {
  PRIVACY_POLICY: 'https://valuenaire.ai/privacy-policy-2/',
  TERMS_AND_CONDITIONS: 'https://valuenaire.ai/terms-of-use/',
  BASE_URL: API_CONSTANTS[APP_ENV],
  GOOGLE_AUTH_SCOPE: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  LINKEDIN_BASE_URL: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
  LINKEDIN_AUTH_SCOPE: 'r_liteprofile%20r_emailaddress'
};
