import { Component } from '@angular/core';
import { GlobalFunctionsService } from 'src/app/providers/global-functions.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: 'onboarding.page.html',
  styleUrls: ['onboarding.page.scss'],
})
export class OnboardingPage {

  constructor(public glbFunc: GlobalFunctionsService) {}

  async ionViewDidEnter() { 
    await this.glbFunc.removeStorage("user");
    await this.glbFunc.removeStorage("token");
  }
}
