import { Component } from '@angular/core';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { GlobalFunctionsService } from 'src/app/providers/global-functions.service';
import { ApiService } from 'src/app/services/api.service';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-generated-sale',
  templateUrl: 'generated-sale.page.html',
  styleUrls: ['generated-sale.page.scss'],
})
export class GeneratedSale {
  user:any;
  constructor(public glbFunc: GlobalFunctionsService,
    private api: ApiService,
    platform: Platform,
    private menuController: MenuController,
    private alertController: AlertController
  ) {
  }
  
  async ionViewDidEnter() { 
    this.user = await this.glbFunc.getStorage("user");
    /*this.api.get("cars", false).then(async data => {
      if(data.status == "success") {
      } else {
        this.glbFunc.showError(data);
      }
      this.glbFunc.dismissLoading();
    });*/
  }

  openMenu() {
    this.menuController.open();
  }

  closeMenu() {
    this.menuController.close();
  }

}
