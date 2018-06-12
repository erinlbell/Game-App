import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {
	selectedMessage: any;
	icons: string[];
	messages: Array<{messageCount: number, note: string, icon: string}>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		// If we navigated to this page, we will have an item available as a nav param
		this.messages = [];
		this.selectedMessage = navParams.get('message');

		// Let's populate this page with some filler content
		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
		'american-football', 'boat', 'bluetooth', 'build'];

		for (let i = 1; i < 11; i++) {
			this.messages.push({
				messageCount:  i,
				note:  i + ' New Messages',
				icon: this.icons[Math.floor(Math.random() * this.icons.length)]
			});
		}
	}
	
	itemTapped(event, message) {
		this.navCtrl.push(InboxPage, {
			message: message
		});
	}

	GoToProfile(){
		this.navCtrl.push(HomePage);
		
	}
}
