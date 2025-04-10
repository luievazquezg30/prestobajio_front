import { Component } from '@angular/core';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { GlobalFunctionsService } from 'src/app/providers/global-functions.service';
import { ApiService } from 'src/app/services/api.service';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-register-payment',
  templateUrl: 'register-payment.page.html',
  styleUrls: ['register-payment.page.scss'],
})
export class RegisterPayment {
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

  async logout() {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: '¿Seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: async () => {
            await this.glbFunc.presentLoading('');
            this.api.post("auth/logout", {}).then(async (data: any) => {      
              if(data.status == "success") {
                await this.glbFunc.removeStorage("token");
                await this.glbFunc.removeStorage("user");
                this.glbFunc.dismissLoading();
                this.glbFunc.irPage("/onboarding", false); 
              } else {
                this.glbFunc.dismissLoading();
                this.glbFunc.showError(data);
              }
            });
          },
        },
      ],
    });
   
    await alert.present();
  }
}
