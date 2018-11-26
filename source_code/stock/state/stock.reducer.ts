import * as stockState from "./stock.state";
import * as utility from "../../Utility";
import { StockAction, QueryStockSymbolAction, QueryStockSymbolSuccessAction, SelectStockAction, QueryStockPriceSuccessAction } from "./stock.action";
import { ICompany, IPrice } from "./stock.model";

const initialState: stockState.IStockState = {
    selectedStock: "",
    favoriteStocks: [],
    selectedStockPrices: []
}

export enum StockActionName {
    LOAD_FAVORITE_STOCKS = "[STOCK] LOAD_FAVORITE_STOCKS",
    SAVE_FAVORITE_STOCKS = "[STOCK] SAVE_FAVORITE_STOCKS",
    QUERY_STOCK_SYMBOL = "[STOCK] QUERY_STOCK_SYMBOL",
    QUERY_STOCK_SYMBOL_SUCCESS = "[STOCK] QUERY_STOCK_SYMBOL_SUCCESS",
    SELECT_STOCK = "[STOCK] SELECT_STOCK",
    QUERY_STOCK_PRICE = "[STOCK] QUERY_STOCK_PRICE",
    QUERY_STOCK_PRICE_SUCCESS = "[STOCK] QUERY_STOCK_PRICE_SUCCESS"
}

export function reducer(state = initialState, action:StockAction) {    
    var result = { ...state };
    switch(action.type) {
        case StockActionName.LOAD_FAVORITE_STOCKS:
            loadFavoriteStocks(result);
        break;
        case StockActionName.QUERY_STOCK_SYMBOL_SUCCESS:
            ON_SUCCESS_queryStockSymbol(result, 
                (<QueryStockSymbolSuccessAction>action).company);
        break;
        case StockActionName.SELECT_STOCK:
            selectStock(result, (<SelectStockAction>action).symbol);
        break;
        case StockActionName.QUERY_STOCK_PRICE_SUCCESS:
            ON_SUCCESS_queryStockPrice(result, (<QueryStockPriceSuccessAction>action).prices);
        break;
    }
    return result;
}

function loadFavoriteStocks(state: stockState.IStockState) {
    let json = window.localStorage.getItem(utility.LocalStorageKey.FavoriteStocks);
    state.favoriteStocks = utility.parseFromJson(json, ["SP500"]);
    state.selectedStock = state.favoriteStocks[0];
    return state;
}
/*
function saveFavoriteStocks(state: stockState.IStockState, stocks: string[]) {
    state.favoriteStocks = stocks;
    let json = JSON.stringify(stocks);
    window.localStorage.setItem(utility.LocalStorageKey.FavoriteStocks, json);
}
*/
function ON_SUCCESS_queryStockSymbol(state: stockState.IStockState, company: ICompany) {
    state.favoriteStocks = state.favoriteStocks || [];

    if (state.favoriteStocks.find( a => a === company.symbol )) {
        this.selectedStock = company.symbol;
    }
    else {
        state.favoriteStocks.push(company.symbol);
        state.favoriteStocks = state.favoriteStocks.sort((a,b)=> a>b?1:-1);
        state.selectedStock = company.symbol;
        let json = JSON.stringify(state.favoriteStocks);
        window.localStorage.setItem(utility.LocalStorageKey.FavoriteStocks, json);
    }    
}

function selectStock(state:stockState.IStockState, symbol: string) {
    state.selectedStock = symbol;
}

function ON_SUCCESS_queryStockPrice(state: stockState.IStockState, prices: IPrice[]) {
    state.selectedStockPrices = prices;
}



