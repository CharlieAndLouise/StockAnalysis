import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { StockActionName } from "./stock.reducer";
import { Action } from "rxjs/internal/scheduler/Action";

@Injectable()
export class StockEffect {
    constructor(private actions$: Actions) {}
    /*
    @Effect()
    loadStockSymbols() {
        this.actions$.pipe(
            ofType(StockActionName.LOAD_INIT),
            switchMap((action:Action<any>)=>{
                window.localStorage.getItem()
            })
        );
    }
    */
}