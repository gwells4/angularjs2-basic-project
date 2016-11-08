import {Component} from "@angular/core";

@Component({
	selector: 'angularjs2-basic-project-app',
	templateUrl: './templates/angularjs2-basic-project-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}