import * as stockState from "./stock.state";
import * as utility from "../../Utility";
import { StockAction, SaveFavoriteStocksAction } from "./stock.action";

const initialState: stockState.IStockState = {
    selectedStock: "MSFT",
    favoriteStocks: ["MSFT", "APPL"]
}

export enum StockActionName {
    LOAD_FAVORITE_STOCKS = "[STOCK] LOAD_FAVORITE_STOCKS",
    SAVE_FAVORITE_STOCKS = "[STOCK] SAVE_FAVORITE_STOCKS"
}

export function reducer(state = initialState, action:StockAction) {    
    var result = { ...state };
    switch(action.type) {
        case StockActionName.LOAD_FAVORITE_STOCKS:
            loadFavoriteStocks(result);
        break;
        case StockActionName.SAVE_FAVORITE_STOCKS:
            saveFavoriteStocks(result, 
                (<SaveFavoriteStocksAction>action).favoriteStocks);
        break;
    }
    return result;
}

function loadFavoriteStocks(state: stockState.IStockState) {
    let json = window.localStorage.getItem(utility.LocalStorageKey.FavoriteStocks);
    state.favoriteStocks = utility.parseFromJson(json, ["SP500", "APPL"]);
    return state;
}

function saveFavoriteStocks(state: stockState.IStockState, stocks: string[]) {
    state.favoriteStocks = stocks;
    let json = JSON.stringify(stocks);
    window.localStorage.setItem(utility.LocalStorageKey.FavoriteStocks, json);
}



