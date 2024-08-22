import { TEntrepreneur } from '@/types/entrepreneur';

export type TLogin = {
  email: string;
  password: string;
};

export type TLoginRes = TResponse<TEntrepreneur>;

export type TLoginSendOtpRes = {
  message: string;
  result: {
    email: string;
    emailOtpToken: string;
  };
};

export type TLoginVerifyOtp = { email: string; otp: number; emailOtpToken: string };
export type TLoginVerifyOtpRes = TLoginRes;
