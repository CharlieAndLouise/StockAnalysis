import { createFeatureSelector, createSelector } from "@ngrx/store";
import { STOCK_FEATURE_NAME, IStockState } from "./stock.state";

export var stockState = createFeatureSelector<IStockState>(STOCK_FEATURE_NAME);

export var favoriteStocks = createSelector(stockState, (state)=> state.favoriteStocks);

export var selectedStock = createSelector(stockState, (state)=>state.selectedStock);

export var range = createSelector(stockState, (state)=> state.range);

