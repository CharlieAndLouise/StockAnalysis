import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as model from "./stock.model";

@Injectable()
export class StockService {
    constructor(private http: HttpClient) {

    }

    private readonly serviceUrl: string = "https://api.iextrading.com/1.0";

    queryStockSymbol(symbol: string): Observable<model.ICompany> {
        if (symbol) {
            symbol = encodeURIComponent(symbol);
            return this.http.jsonp(this.serviceUrl + `/stock/${symbol}/company`, "callback");
        }
        else {
            return 
        }
    }
}