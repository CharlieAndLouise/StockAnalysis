import { Component, OnInit, OnDestroy } from "@angular/core";
import * as stockState from "./state/stock.state";
import * as state from "./state/stock.selector";
import { Store, select } from "@ngrx/store";
import { takeUntil, takeWhile } from "rxjs/operators";
import { of } from "rxjs";

@Component({
    templateUrl: "StockChart.html",
    selector: "stock-chart"
})
export class StockChartComponent implements OnInit, OnDestroy {
    constructor(private store: Store<stockState.IStockState>) {

    }

    private readyToDestroy = false;

    ngOnInit() {
        this.store.pipe(
            select(state.selectedStock),
            takeWhile(()=> !this.readyToDestroy)
        ).subscribe(

        );
    }

    private drawChart(
        let chartData = new window["google"].visualization.DataTable();
        chartData.addColumn("string", "date");
        chartData.addColumn("number", "low");
        chartData.addColumn("number", "open");
        chartData.addColumn("number", "close");
        chartData.addColumn("number", "high");

        chartData.addRows(this.__data, true);
        
        if (!this.__chart) {
            this.__chart = new window["google"].visualization.CandlestickChart(this.container.nativeElement);
        }

        this.__chart.draw(chartData, this.__option);
    );

    ngOnDestroy() {
        this.readyToDestroy = true;
    }    
}