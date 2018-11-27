import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import * as stockState from "./state/stock.state";
import * as stockAction from "./state/stock.action";
import * as state from "./state/stock.selector";
import { Store, select } from "@ngrx/store";
import { takeWhile, tap, flatMap, catchError } from "rxjs/operators";
import { StockService } from "./state/stock.service";
import { IPrice } from "./state/stock.model";
import { of } from "rxjs";

@Component({
    templateUrl: "StockChart.html",
    selector: "stock-chart"
})
export class StockChartComponent implements OnInit, OnDestroy {
    constructor(private store: Store<stockState.IStockState>, private stockService: StockService) {

    }

    private readyToDestroy = false;
    range: string = "1d";
    selectedStock: string = "";
    @ViewChild("chart") container: ElementRef<HTMLDivElement>;

    __chart: any;
    
    __option: any = {
        //width: this.width,
        height: 350,
        legend: { position: "none" },
        candlestick: {
            risingColor: { stroke: "#ed093a", fill: "#ed093a" },
            fallingColor: { stroke: "#079618", fill: "#079618" }
        }
    };

    ngOnInit() {
        this.store.pipe(
            select(state.selectedStock),
            takeWhile(()=> !this.readyToDestroy)
        ).pipe(
            tap((symbol) => this.selectedStock = symbol),
            flatMap(
                (symbol) => this.stockService.queryStockPrice(symbol, this.range)),
            catchError((error)=> of([]))
        ).subscribe(
            (prices)=>this.drawChart(prices),
            (error)=> { alert("Cannot retrieve price chart for this symbol!"); }
        );

        this.store.pipe(
            select(state.range),
            takeWhile(()=> !this.readyToDestroy)
        ).pipe(
            tap((range) => this.range = range),
            flatMap((range) => this.stockService.queryStockPrice(this.selectedStock, range)),
            catchError((error)=> of([]))
        ).subscribe(
            (prices)=>this.drawChart(prices),
            (error)=> { alert("Cannot retrieve price chart for this symbol!"); }
        );

        this.store.pipe(
            select(state.errorMessage),
            takeWhile(()=> !this.readyToDestroy)
        ).subscribe(
            (errorMessage) => {
                if (errorMessage) { alert(errorMessage); }
            }
        );
    }

    changeRange(event) {
        let action = new stockAction.SelectRangeAction(event.target.value);
        this.store.dispatch(action);
    }


    private drawChart(prices: IPrice[]) {
        window["data"] = prices;
    //private drawChart(
        let chartData = new window["google"].visualization.DataTable();
        chartData.addColumn("string", "date");
        chartData.addColumn("number", "low");
        chartData.addColumn("number", "open");
        chartData.addColumn("number", "close");
        chartData.addColumn("number", "high");

        chartData.addRows(
            prices.map((price)=>[price.label, price.low, 
                price.open, price.close, price.high]), true);
        
        if (!this.__chart) {
            this.__chart = new window["google"].visualization.CandlestickChart(this.container.nativeElement);
        }

        this.__chart.draw(chartData, this.__option);

    }
    
    ngOnDestroy() {
        this.readyToDestroy = true;
    }    
}