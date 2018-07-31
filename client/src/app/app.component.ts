import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Employees',
      url: '/employees',
      icon: 'people'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'cart'
    },
    {
      title: 'Payments',
      url: '/payments',
      icon: 'cash'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'cog'
    },
    {
      title: 'Sign Up',
      url: '/auth',
      icon: 'log-in'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
