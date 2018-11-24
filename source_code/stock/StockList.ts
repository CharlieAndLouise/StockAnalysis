import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IStockState } from "./state/stock.state";

@Component({
    selector: "stock-list",
    templateUrl: "StockList.html"
})
export class StockListComponent implements OnInit, OnDestroy {
    
    constructor(private store: Store<IStockState>) { 

    }

    stockState: IStockState;

    ngOnInit() {
        
        this.store.pipe(select("Stock")).subscribe((stockState: IStockState)=> {
            alert("State updated");
            if (stockState) {
                this.stockState = stockState;
                window["state"] = stockState;
            }
            else {
                this.stockState = {
                    selectedStock: "MSFT",
                    stockSymbols: ["MSFT", "APPL", "SP500"]
                };
            }
        });

        
    }

    setState() {
        this.store.dispatch({
            type: "initialize",
            payload: {}
        });
    }

    ngOnDestroy() {
        
    }
}