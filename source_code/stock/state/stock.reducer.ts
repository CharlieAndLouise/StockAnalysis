import { IStockState } from "./stock.state";

const initialState: IStockState = {
    selectedStock: "MSFT",
    stockSymbols: ["MSFT", "APPL"]
}

export function reducer(state = initialState, action:any) {    
    var result = { ...state };
    switch(action.type) {
        case "initialize": 
            result.stockSymbols = ["MSFT", "APPL"];
            alert(JSON.stringify(result));
        break;
    }
    return result;
}
