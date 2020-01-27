import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { Deeplinks } from '@ionic-native/deeplinks';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild(Nav) navChild:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public deeplinks: Deeplinks) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      deeplinks.routeWithNavController(this.navChild, {
        '/about': AboutPage,
        '/contact': ContactPage
      }).subscribe( (match) => {
        console.log('Successfully match', match);
      }, (nomatch) => {
        console.log('Unmatched route', nomatch);
      });
    });
  }
}
