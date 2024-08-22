export type TResetPassSendOtpRes = {
  message: string;
  result: {
    email: string;
    emailOtpToken: string;
  };
};

export type TResetPassVerifyOtp = {
  otp: number;
  email: string;
  emailOtpToken: string;
};
export type TResetPassVerifyOtpRes = {
  message: string;
  result: {
    emailOtpToken: string;
  };
};
