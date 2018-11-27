import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { StockActionName } from "./stock.reducer";
import { Action } from "@ngrx/store";
import { StockService } from "./stock.service";
import * as stockActions from "./stock.action";
import { Observable, of } from "rxjs";
import { map, flatMap, catchError } from "rxjs/operators";
import { ICompany } from "./stock.model";


@Injectable()
export class StockEffects {
    constructor(private actions$: Actions, private stockService: StockService) {}

    @Effect()
    queryStockSymbol$(): Observable<stockActions.StockAction> {
        return this.actions$.pipe(
            ofType(StockActionName.QUERY_STOCK_SYMBOL),
            flatMap((action:stockActions.QueryStockSymbolAction)=>
                this.stockService.queryStockSymbol(action.symbol).pipe(
                    map((result:ICompany) => 
                        new stockActions.QueryStockSymbolSuccessAction(result)),
                    catchError(
                        (error)=>of(
                            new stockActions.ServiceErrorAction("An error happens on service side.")
                        )
                    )
                )       
            )
        );
    }
    /*
    @Effect()
    queryStockPrice$(): Observable<Action> {
        return this.actions$.pipe(
            ofType(StockActionName.QUERY_STOCK_PRICE),
            flatMap(
                (action:stockActions.QueryStockPriceAction) => 
                    this.stockService.queryStockPrice(action.symbol, action.range).pipe(
                        map(result=> new stockActions.QueryStockPriceSuccessAction(result))
                    )
            )
        );
    }
    */
}