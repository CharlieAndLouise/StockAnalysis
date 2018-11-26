import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as stockState from "./state/stock.state";
import { Observable } from "rxjs";
import { LoadFavoriteStockAction, QueryStockSymbolAction, SelectStockAction } from "./state/stock.action";
import * as state from "./state/stock.selector";

@Component({
    selector: "stock-list",
    templateUrl: "StockList.html"
})
export class StockListComponent implements OnInit {
    
    constructor(private store: Store<stockState.IStockState>) { 
        
    }

    favoriteStocks$: Observable<Array<string>>;
    selectedStock$: Observable<string>;

    newStockSymbol: string = "";

    ngOnInit() {
        let actionLoad = new LoadFavoriteStockAction();
        this.store.dispatch(actionLoad);   
        this.favoriteStocks$ = this.store.pipe(select(state.favoriteStocks));
        this.selectedStock$ = this.store.pipe(select(state.selectedStock));
    }

    tryAddingStockSymbol() {
        let action = new QueryStockSymbolAction(this.newStockSymbol);
        this.store.dispatch(action);
        this.newStockSymbol = "";        
    }

    selectStock(symbol: string) {
        let action = new SelectStockAction(symbol);
        this.store.dispatch(action);
    }
}