import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { StockListComponent } from "./StockList";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/stock.reducer";
import { STOCK_FEATURE_NAME } from "./state/stock.state";
import { EffectsModule } from "@ngrx/effects";
import { StockEffect } from "./state/stock.effect";

@NgModule({
    declarations: [
        StockListComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        StoreModule.forFeature(STOCK_FEATURE_NAME, reducer),
        //EffectsModule.forFeature([StockEffect])
     ],
    exports: [
        StockListComponent
    ],
    providers: [],
})
export class StockModule {
    
}

