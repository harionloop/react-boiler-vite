export type TEntrepreneurCompany = TCompany;

export type TBusinessDescription = {
  businessDescriptionId: string;
  foundingYear: number;
  launchYear: number;
  aboutCompany: string;
  // businessModelType: TBusinessModel;
  uspDescription: string;
  problemStatement: string;
  solutionStatement: string;
  // barrierType: TBarriers;
  entryBarrierStatement: string;
  transactionBasedRevenue: number;
  serviceRevenue: number;
  projectRevenue: number;
  recurringRevenue: number;
  companyId: string;
  createdAt: string;
  updatedAt: string;
};

export type TShareHolder = {
  shareHolderId: string;
  capTableId: string;
  name: string;
  typeOfShare: string;
  investorType: string;
  remark: string;
  numberOfShares: number;
  faceValue: number;
  dilutedNumber: number;
  dilutedHolding: number;
  createdAt: string;
  updatedAt: string;
};

export type TCapTable = {
  capTableId: string;
  companyId: string;
  createdAt: string;
  updatedAt: string;
  shareHolder?: TShareHolder[];
};

export type TIndustryType = {
  industryTypeId: string;
  code: string;
  sector: string;
  industryGroup: string;
  industry: string;
  subIndustry: string;
  description: string;
  isMatured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TMarketSizing = {
  marketSizingId: string;
  TAM: number;
  SAM: number;
  SOM: number;
  industryGrowthRate: number;
  currencyDenominator: string;
  source: string;
  // currency: TCurrency;
  currencyId: number;
  companyId: string;
  createdAt: string;
  updatedAt: string;
};

export type TTeamMember = {
  teamMemberId: string;
  firstName: string;
  lastName: string;
  isFounder: boolean;
  isPartTime: boolean;
  yearsOfExperience: number;
  contactNumber: string;
  areaOfExpertise: string;
  url: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type TTeamProfile = {
  teamProfileId: string;
  noOfFounders: number;
  foundersAverageAge: number;
  aboutTeam: string;
  noOfEmployees: number;
  companyId: string;
  createdAt: string;
  updatedAt: string;
  teamMember?: TTeamMember[];
};

export type TCompetitorLandscaping = {
  competitorLandscapingId: string;
  // listedCompetitor: TListedCompany[];
  // unlistedCompetitor: TUnlistedCompany[];
};

export type TCompany = {
  companyId: string;
  nameOfEntity: string;
  // pincode: TPincode;
  website?: string;
  position: string;
  isStartup: boolean;
  // stageOfInvestment: TStageOfInformation;
  // legalType: TLegalType;
  panNumber: string;
  nameOfBrand: string[];
  createdAt: string;
  updatedAt: string;
  industryTypes: TIndustryType[];
  businessDescription?: TBusinessDescription;
  capTable?: TCapTable;
  marketSizing?: TMarketSizing;
  teamProfile?: TTeamProfile;
  competitorLandscaping?: TCompetitorLandscaping;
  isKeyMatrixDraft: boolean;
  latestValuation: any; //Todo: set types once get from apis
  draftedValuation: {
    valuationId: string;
    companyId: string;
    valuationDate: string;
    valuaionPurpose: string;
    currency: string;
    isIncomeStmtDraft: boolean;
    isBalanceSheetDraft: boolean;
    isKeyMatrixDraft: boolean;
    isCrspAdded: boolean;
    isLatest: boolean;
    currencyDenominator: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
};
