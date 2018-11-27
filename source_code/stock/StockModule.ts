import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { StockListComponent } from "./StockList";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/stock.reducer";
import { STOCK_FEATURE_NAME } from "./state/stock.state";
import { EffectsModule } from "@ngrx/effects";
import { StockEffects } from "./state/stock.effect";
import { HttpClientModule, HttpClientJsonpModule  } from "@angular/common/http";
import { StockChartComponent } from "./StockChart";

@NgModule({
    declarations: [
        StockListComponent,
        StockChartComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        StoreModule.forFeature(STOCK_FEATURE_NAME, reducer),
        EffectsModule.forFeature([StockEffects])
     ],
    exports: [
        StockListComponent,
        StockChartComponent
    ],
    providers: [
        
    ],
})
export class StockModule {
    
}

