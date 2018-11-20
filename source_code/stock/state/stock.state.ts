export const STOCK_FEATURE_NAME = "Stock"; 

export interface IStockState {
    selectedStock: string;
    stockSymbols: Array<string>;
}

export class 