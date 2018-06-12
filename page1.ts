import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StartPage } from '../start/start';
import { Page2Page } from '../page2/page2';
import { CharacterPage } from '../character/character';


/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }
  GoToStart(){
		this.navCtrl.push(StartPage);
  }
  GoToCharacterPage(){
		this.navCtrl.push(CharacterPage);
	}

	GoToPage2(){
		this.navCtrl.push(Page2Page);
  }
  
  

}
