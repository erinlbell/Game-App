import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterInfoProvider } from '../../providers/character-info/character-info';


/**
 * Generated class for the CharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})
export class CharacterPage {		
	
	public genders: any[];
	public colors: any[];
	public eyes: any[];
	public selectedColors: any[];
	public selectedEyes: any[];
	public gender: any;
	public color: any;
	hide : boolean = true;
	constructor(public navCtrl: NavController, public navParams: NavParams, public _characterInfo : CharacterInfoProvider) {
		
	
		this.initializeGenders();
		this.initializeColor();
		this.initializeEyes();

	}

	
	hideCtrl() {
		this.hide=!this.hide;
		this.setColorValues(this.gender);
	}

	initializeGenders(){
		this.genders = [
		  {id: 1, name: 'Male'},
		  {id: 2, name: 'Female'}
		];
	  }

	initializeColor(){
		this.colors = [
		  {id: 1, name: 'Brown', gender_id: 1},
		  {id: 2, name: 'Black', gender_id: 1},
		  {id: 3, name: 'Black', gender_id: 2},
		  {id: 4, name: 'Blonde', gender_id: 2}
		];
	  }

	initializeEyes(){
		this.eyes = [
		  {id: 1, name: 'Black Eyes', gender_id: 1, color_id: 1},
		  {id: 2, name: 'Green Eyes', gender_id: 1, color_id: 2},
		  {id: 3, name: 'Black Eyes', gender_id: 2, color_id: 3},
		  {id: 4, name: 'Brown Eyes', gender_id: 2, color_id: 4}
		];
	}  

	setColorValues(gender) {
		this.selectedColors = this.colors.filter(color => color.gender_id == gender.id)
	}
   
	setEyesValues(color) {
		 this.selectedEyes = this.eyes.filter(eye => eye.color_id == color.id);
	}
}
