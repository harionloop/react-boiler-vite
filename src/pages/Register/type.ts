export type TUserType = 'ENTREPRENEUR' | 'INVESTOR' | 'ADVISOR' | null;

export type TRegisterFormInitVal = {
  email: string;
  name: string;
  mobileNumber: string;
  emailToken: string;
  password: string;
  isOauth: boolean;
  oAuthType: string;
  // validationTokenPhone: string;
};

export type TRegisterEmailRes = {
  message: string;
  result: {
    email: string;
    emailOtpToken: string;
  };
};
export type TRegisterPhoneRes = {
  message: string;
  result: {
    phone: string;
    phoneOtpToken: string;
  };
};
export type TValidateEMailOtp = { otp: number; email: string };
export type TValidateEmailOtpToken = {
  message: string;
  result: {
    email: string;
    validationTokenEmail: string;
  };
};
export type TValidatePhoneOtp = { otp: number; phone: string; phoneOtpToken: string };
export type TValidatePhoneOtpToken = {
  message: string;
  result: {
    validationTokenPhone: string;
    phone: string;
  };
};
export type TRegister = {
  email: string;
  name: string;
  phone: string;
  password: string;
  validationTokenEmail: string;
  isOauth: boolean;
  oAuthType: string;

  // validationTokenPhone: string;
};
export type TRegisterAdvisorAndInvestor = {
  email: string;
  name: string;
  phone: string;
};
export type TRegisterAdvisorAndInvestorRes = {
  advisorId: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};
