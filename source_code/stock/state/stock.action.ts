import { Action } from "@ngrx/store";
import { StockActionName } from "./stock.reducer"
import { fromEventPattern } from "rxjs";

export class SaveFavoriteStocksAction implements Action {

    constructor(public favoriteStocks: string[]) {
        
    }

    public type = StockActionName.SAVE_FAVORITE_STOCKS;
}

export class LoadFavoriteStockAction implements Action {
    constructor() {}

    public type = StockActionName.LOAD_FAVORITE_STOCKS;
}

export type StockAction = LoadFavoriteStockAction | SaveFavoriteStocksAction;