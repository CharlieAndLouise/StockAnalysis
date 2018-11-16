import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        StoreModule.forFeature("Stock", {})
     ],
    exports: [],
    providers: [],
})
export class StockModule {}