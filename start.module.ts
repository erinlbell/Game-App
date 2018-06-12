import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartPage } from './start';
import { CharacterPage } from '../character/character';


@NgModule({
  declarations: [
    StartPage,
    CharacterPage
  ],
  imports: [
    CharacterPage,
    IonicPageModule.forChild(StartPage),
  ],
})
export class StartPageModule {}
