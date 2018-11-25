import { createFeatureSelector, createSelector } from "@ngrx/store";
import { STOCK_FEATURE_NAME, IStockState } from "./stock.state";

export var stockBranch = createFeatureSelector<IStockState>(STOCK_FEATURE_NAME);

export var favoriteStocks = createSelector(stockBranch, (state)=> state.favoriteStocks);

export var selectedStock = createSelector(stockBranch, (state)=>state.selectedStock);