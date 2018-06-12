import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CharacterInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharacterInfoProvider {

	public _genders: any[];
	public _colors: any[];
	public _eyes: any[];
	public _selectedColors: any[];
	public _selectedEyes: any[];
	public _gender: any;
	public _color: any;
	public _hide : boolean = true;
	public _eye : any;

	constructor(public http: Http) {
		console.log('Hello CharacterInfoProvider Provider');
	}




}
