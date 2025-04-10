import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { GlobalFunctionsService } from 'src/app/providers/global-functions.service';
import { ApiService } from 'src/app/services/api.service';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.page.html',
  styleUrls: ['my-profile.page.scss'],
})
export class MyProfilePage {
  
  constructor(public glbFunc: GlobalFunctionsService,
  ) {
  }
  
  async ionViewDidEnter() { 
  }
}
