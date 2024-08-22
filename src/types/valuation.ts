export enum TYearType {
  'HISTORICAL' = 'HISTORICAL',
  'PROVISIONAL' = 'PROVISIONAL',
  'PROJECTED' = 'PROJECTED'
}

export type TYearData<T> = {
  startMonth: string;
  endMonth: string;
  type: TYearType;
  sequence: number;
  isAdded: boolean;
  generatedBy: 'MANUALLY' | 'AUTO';
} & T;

export type TRowKey<D, T> = {
  label: JSX.Element;
  dataKey: D;
  render?: (d: T, index: number) => JSX.Element;
};

export enum ValuationStatus {
  INIT = 'INIT',
  INCOME_STMT_FILLED = 'INCOME_STMT_FILLED',
  BALANCE_SHEET_FILLED = 'BALANCE_SHEET_FILLED',
  FCFF_CALCULATED = 'FCFF_CALCULATED',
  WACC_CALCULATED = 'WACC_CALCULATED',
  VALUATION_COMPLETED = 'VALUATION_COMPLETED'
}

export type TValuation = {
  valuationId: string;
  companyId: string;
  valuationDate: string;
  valuaionPurpose: string;
  currency: string;
  isIncomeStmtDraft: boolean;
  isBalanceSheetDraft: boolean;
  isLatest: boolean;
  currencyDenominator: string;
  status: ValuationStatus;
  createdAt: string;
  updatedAt: string;
};
