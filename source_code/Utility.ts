
export function parseFromJson(jsonString: string, defaultResult: any) {
    if (jsonString) {
        return JSON.parse(jsonString);
    }
    else {
        return defaultResult;
    }
}

export enum LocalStorageKey {
    FavoriteStocks = "favoriteStocks"
}