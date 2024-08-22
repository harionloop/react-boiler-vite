import { TEntrepreneurCompany } from './company';

export type TEntrepreneur = {
  entrepreneurId: string;
  name: string;
  email: string;
  phone: string;
  entrepreneurCompany: TEntrepreneurCompany[];
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
  maxCompanyCount: number;
  createdAt: string;
  updatedAt: string;
  accessToken: string;
  refreshToken: string;
  isAccessGranted: boolean;
  isAccessRequested: boolean;
  isAccessed: boolean;
  asAdvisorySubscribed: boolean;
  asInvestorSubscribed: boolean;
  isPremiumSubscribed: boolean;
};

export type TAccessKeys = {
  isAccessGranted: boolean;
  isAccessRequested: boolean;
  isAccessed: boolean;
};
