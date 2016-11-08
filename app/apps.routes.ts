import {RouterModule, Routes} from "@angular/router";
//import {DicewareComponent} from "./components/diceware-component";
import {SplashComponent} from "./components/splash-component";


//export const allAppComponents = [DicewareComponent, SplashComponent];  // SplashComponent is Dylan's name for the first page you see on a site.

//export const routes: Routes = [
//	{path: "diceware/:roll", component: DicewareComponent},    // creates a fake URL with the path: ".../diceware/[roll number]". For example: https://bootcamp-coders.cnm.edu/~dmcdonald21/angular2-diceware/public_html/diceware/11246
//	{path: "", component: SplashComponent}  // path: "" is the empty path, which is the default path to your site.
//];

export const allAppComponents = [SplashComponent];  // SplashComponent is Dylan's name for the first page you see on a site.

export const routes: Routes = [
	{path: "", component: SplashComponent}
];


export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);