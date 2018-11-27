import { IPrice } from "./stock.model";

export const STOCK_FEATURE_NAME = "Stock"; 

export interface IStockState {
    selectedStock: string;
    favoriteStocks: string[];
    selectedStockPrices: IPrice[];
    range: string;
    errorMessage: string;
}

