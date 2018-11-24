import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StockListComponent } from "./StockList";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/stock.reducer";

@NgModule({
    declarations: [
        StockListComponent
    ],
    imports: [ 
        CommonModule,
        StoreModule.forFeature("Stock", reducer)
     ],
    exports: [
        StockListComponent
    ],
    providers: [],
})
export class StockModule {
    
}

