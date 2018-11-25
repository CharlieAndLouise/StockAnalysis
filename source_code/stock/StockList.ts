import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as stockState from "./state/stock.state";
import { Observable } from "rxjs";
import { LoadFavoriteStockAction } from "./state/stock.action";
import * as state from "./state/stock.selector";

@Component({
    selector: "stock-list",
    templateUrl: "StockList.html"
})
export class StockListComponent implements OnInit {
    
    constructor(private store: Store<stockState.IStockState>) { 
        
    }

    stockState: stockState.IStockState;

    favoriteStocks$: Observable<Array<string>>;

    ngOnInit() {
        let actionLoad = new LoadFavoriteStockAction();
        this.store.dispatch(actionLoad);   
        this.favoriteStocks$ = this.store.pipe(select(state.favoriteStocks));
            
    }
}