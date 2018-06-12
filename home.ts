import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InboxPage } from '../inbox/inbox';
import { StartPage } from '../start/start';
import { Page1Page } from '../page1/page1';
import { UserInfoProvider } from '../../providers/user-info/user-info';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  CurrentUser: Array<{username: string, title: string, firstName: string, lastName: string,  userProfilePic: any, bio: string, age: any, gender: any}>;
	username: string;
	constructor(public navCtrl: NavController, public navParams: NavParams,public _userInfo : UserInfoProvider) {
			this.CurrentUser = [{ 	username       : navParams.get('username'), 
											title					 : navParams.get('title'), 
											firstName			 : navParams.get('firstName'), 
											lastName       : navParams.get('lastName'), 
											userProfilePic : '/assets/images/1.jpg', 
											bio            : navParams.get('bio'), 
											age            : navParams.get('age'),
											gender         : navParams.get('gender')}];
	}
		
	GoToInbox(){
		this.navCtrl.push(InboxPage);
		
	}
	
	GoToStart(){
		this.navCtrl.push(StartPage);
	}

	GoToPage1(){
		this.navCtrl.push(Page1Page);
	}
}