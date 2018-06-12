import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserInfoProvider {

	public _test  : number ;
	public _audio : any ;
	public _title : string ;
	public _firstName : string ;
	public _lastName : string ;
	public _userProfilePic : any;
	public _username : any;
	public _bio : any;
	public _age : any; 
	public _gender : any;
	
	constructor(public http: Http) {
		console.log('Hello UserInfoProvider Provider');
		this._test = 2;
		this._username = "";
		this._title= '' , 
		this._firstName= '', 
		this._lastName= '', 
		this._userProfilePic= '', 
		this._bio= '', 
		this._age= '',
		this._gender = ''
	}

	
	
	Multiply(amount: number){

		if(this._test <= 0)
			this._test = amount;

		this._test *= amount;
	}

	Divide(amount: number){
		if(this._test <= 0)
			this._test = amount;

		this._test /= amount;
	}
	PlaySound1(){
		this._audio = new Audio();
		this._audio.src = 'assets/audio/main.wav';
		this._audio.load();
		this._audio.play();
	}
	PlaySound2(){
		this._audio = new Audio();
		this._audio.src = 'assets/audio/song1.wav';
		this._audio.load();
		this._audio.play();
	}

}
