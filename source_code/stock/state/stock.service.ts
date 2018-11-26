import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, of } from "rxjs";
import * as model from "./stock.model";


@Injectable({
    providedIn: 'root',
})
//@Injectable()
export class StockService {
    constructor(private http: HttpClient) {

    }

    private readonly serviceUrl: string = "https://api.iextrading.com/1.0";

    queryStockSymbol(symbol: string): Observable<model.ICompany> {
        if (symbol) {
            symbol = encodeURIComponent(symbol);
            return <Observable<model.ICompany>>this.http.jsonp(
                this.serviceUrl + `/stock/${symbol}/company`, "callback");
        }
        else {
            return of(null);
        }
    }

    queryStockPrice(symbol: string, range: string): Observable<model.IPrice[]> {
        return <Observable<model.IPrice[]>>this.http.jsonp(this.serviceUrl + `/stock/${symbol}/chart/${range}`, "callback");
    }
}