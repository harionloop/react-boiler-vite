export type TCommaFormat = 'en-IN' | 'es-US';

export type TIndustry = {
  industryTypeId: string;
  sector: string;
  industryGroup: string;
  industry: string;
  code: string;
  subIndustry: string;
  description: string;
  isMatured: boolean;
};

export type TDictionary = {
  dictionaryId: number;
  name: string;
  description: string;
};

export type TCurrency = {
  currencyId: number;
  code: string;
  name: string;
  name_plural: string;
  symbol: string;
  isMatured: boolean;
  createdAt: string;
  updatedAt: string;
  locale: string;
};

export type TAppData = {
  masterData: {
    industries: {
      established: {
        [key: string]: {
          [key: string]: {
            [key: string]: {
              [key: string]: TIndustry;
            };
          };
        };
      };
      startup: {
        [key: string]: {
          [key: string]: TIndustry;
        };
      };
    };
    currencies: TCurrency[];
    dictionary: TDictionary[];
  };
};

export type TPincode = {
  Region: string;
  Division: string;
  Office: string;
  OfficeType: string;
  District: string;
  State: string;
  Pincode: number;
};
