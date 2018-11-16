import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'AppComponent';
import { StoreModule } from "@ngrx/store";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [ 
        BrowserModule,
        StoreModule.forRoot({})    
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [],
    providers: [],
})
export class AppModule {
    
}


