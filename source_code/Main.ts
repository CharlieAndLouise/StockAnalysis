import { AppModule } from "AppModule";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { platformBrowser } from "@angular/platform-browser";


//platformBrowserDynamic().bootstrapModule(AppModule);

google.charts.setOnLoadCallback(()=>{
    platformBrowserDynamic().bootstrapModule(AppModule);
});

