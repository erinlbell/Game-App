import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';
import { Page1Page } from '../page1/page1';
import { CharacterPage } from '../character/character';
import { UserInfoProvider } from '../../providers/user-info/user-info';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-start',
	templateUrl: 'start.html',
})
export class StartPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public _userInfo : UserInfoProvider) {
	}

	ngOnInit() {
		console.log('ionViewDidLoad StartPage');
		this._userInfo.PlaySound1();
	}
	
	GoToUserPage(){
		this.navCtrl.push(UserPage);
	}

	GoToPage1(){
		this.navCtrl.push(Page1Page);
	}
	GoToCharacter(){
		this.navCtrl.push(CharacterPage);
	}
	Multiply(){
		this._userInfo.Multiply(3);
	}
	
	Divide(){
		this._userInfo.Divide(3);
	}
}
