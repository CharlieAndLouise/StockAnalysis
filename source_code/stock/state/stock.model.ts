export interface ICompany {
    symbol: string;
    companyName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    CEO: string;
    issueType: string;
    sector: string;
    tags: string[];
}

export interface IPrice {
    minute: string;
    marketAverage: number;
    marketNotional: number;
    marketNumberOfTrades: number;
    marketOpen: number;
    marketClose: number;
    marketHigh: number;
    marketLow: number;
    marketVolume: number;
    marketChangeOverTime: number;
    average: number;
    notional: number;
    numberOfTrades: number;
    simplifyFactor: Array<any>;
    high: number;
    low: number;
    volume: number;
    label: number;
    changeOverTime: number;
    date: string;
    open: number;
    close: number;
    unadjustedVolume: number;
    changePercent: number;
    vwap: number;
}