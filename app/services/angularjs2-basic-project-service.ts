import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BaseService} from "./base-service";
import {Diceware} from "../classes/angularjs2basicproject";

@Injectable()
export class angularjs2basicprojectService extends BaseService {
	constructor(protected http: Http) {
		super(http);
	}

	private angularjs2basicprojectUrl = "api/angularjs2-basic-project/";

	getAllangularjs2basicproject() : Observable<angularjs2basicproject[]> {
		return(this.http.get(this.angularjs2basicprojectUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}

	getangularjs2basicproject(roll: number) : Observable<angularjs2basicproject> {
		return(this.http.get(this.angularjs2basicprojectUrl + roll)
			.map(this.extractData)
			.catch(this.handleError));
	}
}