import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalFunctionsService } from '../providers/global-functions.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private navCtrl: NavController,
    private glbFunc: GlobalFunctionsService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return await this.checkAuth(state);
  }

  private async checkAuth(state:any) {
    let token = await this.glbFunc.getStorage("token");
    if(token) {
      return true;
    } else {
      return this.routeToLogin();
    }
    //return (token) || this.routeToLogin();
  }

  private routeToLogin(): boolean {
    this.glbFunc.irPage('/login', false);
    return false;
  }
}