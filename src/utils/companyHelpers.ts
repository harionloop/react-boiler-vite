import { TCompany } from './../types/company';

export const companyStatus = (c: TCompany) => {
  // validation
  const status = { step: 0, isCompeleted: false };

  if (!c.businessDescription) {
    status.step = 1;
    return status;
  }

  if (!c.teamProfile) {
    status.step = 2;
    return status;
  }
  if (!c.marketSizing && !c.capTable) {
    status.step = 3;
    return status;
  }

  if (!c.competitorLandscaping && !c.capTable) {
    status.step = 4;
    return status;
  }

  if (!c.capTable) {
    status.step = 5;
    return status;
  }

  status.isCompeleted = true;

  return status;
};
