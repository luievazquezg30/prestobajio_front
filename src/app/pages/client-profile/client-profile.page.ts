import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GlobalFunctionsService } from 'src/app/providers/global-functions.service';
import { ApiService } from 'src/app/services/api.service';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-client-profile',
  templateUrl: 'client-profile.page.html',
  styleUrls: ['client-profile.page.scss'],
})
export class ClientProfilePage {
  showPass = false;
  user = {
    email: '',    
    password: '',
  }
  player_id = '';
  router: any;
showSearch: any;
  constructor(public glbFunc: GlobalFunctionsService,
    private api: ApiService,
    platform: Platform
  ) {
    platform.ready().then(() => {
      this.init();
    });
  }

  init() {
    let $this = this;
    OneSignal.getDeviceState(function (identity:any){
      $this.player_id = identity.userId;
    });     
  }

  

  async login() {
    if(!this.glbFunc.validateEmail(this.user.email)) {
      this.glbFunc.presentToast("danger", "Correo Electrónico inválido", 3000, 3);
      return;
    }
    
    let dataSend:any = {
      email: this.user.email,
      password: this.user.password,
      //player_id: this.player_id
    }

    await this.glbFunc.presentLoading('');
    this.api.post("auth/login", dataSend, false).then(async data => {
      if(data.status == "success") {
        await this.glbFunc.setStorage("token", data.data.token);
        await this.glbFunc.setStorage("user", data.data.data);
        this.glbFunc.irPage("/home", false);
      } else {
        this.glbFunc.showError(data);
      }
      this.glbFunc.dismissLoading();
    });
  }
  goToHome() {
    this.router.navigate(['/pages/home']);
  }

  
}
