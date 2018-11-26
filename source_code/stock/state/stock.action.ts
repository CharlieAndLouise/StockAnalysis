import { Action } from "@ngrx/store";
import { StockActionName } from "./stock.reducer";
import * as model from "./stock.model";


export class LoadFavoriteStockAction implements Action {
    constructor() {}

    public type = StockActionName.LOAD_FAVORITE_STOCKS;
}

export class QueryStockSymbolAction implements Action {
    constructor(public symbol: string) {}
    public type = StockActionName.QUERY_STOCK_SYMBOL;
}

export class QueryStockSymbolSuccessAction implements Action {
    constructor(public company: model.ICompany) {}
    public type = StockActionName.QUERY_STOCK_SYMBOL_SUCCESS;
}

export class SelectStockAction implements Action {
    constructor(public symbol: string) {}
    public type = StockActionName.SELECT_STOCK;
}

export class QueryStockPriceAction implements Action {
    constructor(public symbol: string, public range: string) { }
    public type = StockActionName.QUERY_STOCK_PRICE;    
}

export class QueryStockPriceSuccessAction implements Action {
    constructor(public prices: model.IPrice[]) {}
    public type = StockActionName.QUERY_STOCK_PRICE_SUCCESS;
}



export type StockAction = LoadFavoriteStockAction 
    | QueryStockSymbolAction | QueryStockSymbolSuccessAction
    | SelectStockAction | QueryStockPriceSuccessAction;