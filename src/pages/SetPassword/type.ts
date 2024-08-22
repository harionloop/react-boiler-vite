export type TSetPasswordForm = {
  password: string;
  confirmPassword: string;
  email: string;
  emailOtpToken: string;
};

export type TResetPassword = {
  email: string;
  password: string;
  emailOtpToken: string;
};

export type TResetPasswordRes = {
  message: string;
  result: {
    email: string;
  };
};
