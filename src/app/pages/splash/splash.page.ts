import { Component } from '@angular/core';
import { GlobalFunctionsService } from 'src/app/providers/global-functions.service';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage {

  constructor(public glbFunc: GlobalFunctionsService) {}

  async ionViewDidEnter() { 
    let $this = this;
    let token = await $this.glbFunc.getStorage("token");
    let user = await $this.glbFunc.getStorage("user");
    setTimeout(async () => {
      try {
        if(token && user) {
          this.glbFunc.irPage("/home", false);
        } else {
          $this.glbFunc.irPage("/onboarding", false);
        }
      } catch (error) {
        await this.glbFunc.removeStorage("token");
        await this.glbFunc.removeStorage("user");
        $this.glbFunc.irPage("/onboarding", false);
      }      
    }, 3000);
  }
}
