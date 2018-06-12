import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InboxPage } from '../pages/inbox/inbox';
import { StartPage } from '../pages/start/start';
import { UserPage } from '../pages/user/user';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page4Page } from '../pages/page4/page4';
import { Page5Page } from '../pages/page5/page5';
import { CharacterPage } from '../pages/character/character';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserInfoProvider } from '../providers/user-info/user-info';
import { HttpModule } from '@angular/http';
import { CharacterInfoProvider } from '../providers/character-info/character-info';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InboxPage,
    UserPage,
    StartPage,
    CharacterPage,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InboxPage,
    UserPage,
    StartPage,
    CharacterPage,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserInfoProvider,
    CharacterInfoProvider
  ]
})
export class AppModule {}
