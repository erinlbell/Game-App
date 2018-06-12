import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoProvider } from '../../providers/user-info/user-info';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
	selector: 'page-user',
	templateUrl: 'user.html',
})
export class UserPage {

	username: string;
	title: any;
	firstName: any;
	lastName       : any;
	userProfilePic : any; 
	bio            : any;
	age            : any;
	gender         : any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public _userInfo : UserInfoProvider) {
		this.username       = this._userInfo._username;
		this.title          = this._userInfo._title;
		this.firstName      = this._userInfo._firstName;
		this.lastName       = this._userInfo._lastName;
		this.userProfilePic = this._userInfo._userProfilePic;
		this.bio            = this._userInfo._bio;
		this.age            = this._userInfo._age;
		this.gender			= this._userInfo._gender;
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter User Page');
		this._userInfo.PlaySound2();
	}

	SaveProfile(){
		this.navCtrl.push(HomePage,{'username': this.username, 'title': this.title, 'firstName': this.firstName, 'lastName': this.lastName,
		'userProfilePic': this.userProfilePic, 'bio': this.bio, 'age': this.age, 'gender': this.gender})
		alert('Profile saved');
	}

	GoToHome(){
		this.navCtrl.push(HomePage);
	}

	Multiply(){
		this._userInfo.Multiply(2);
	}

	Divide(){
		this._userInfo.Divide(2);
	}
}
