import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { GlobalFunctionsService } from 'src/app/providers/global-functions.service';
import { ApiService } from 'src/app/services/api.service';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-add-note',
  templateUrl: 'add-note.page.html',
  styleUrls: ['add-note.page.scss'],
})
export class AddNotePage {
  isLoading = true;
  tab = 1;
  cars:any[] = [];
  carSelect:any;
  name = "";
  arrival_date = null;
  service_date = null;
  price = 0;
  description = "";
  constructor(public glbFunc: GlobalFunctionsService,
    private api: ApiService
  ) {
  }
  
  async ionViewDidEnter() { 
    this.isLoading = true;
    this.cars = [];
    this.tab = 1;
    this.carSelect = null;
    this.api.get("cars", false).then(async data => {
      console.log(data);
      if(data.status == "success") {
        this.cars = data.data.data;
      } else {
        this.glbFunc.showError(data);
      }
      this.isLoading = false;
    });
  }

  save() {
    this.api.post("notes", {name: this.name, arrival_date: this.arrival_date, service_date: this.service_date, price: this.price, description: this.description, photo: "https://img.freepik.com/fotos-premium/descarga-imagen-fondo-hd_555090-60427.jpg", car_id: this.carSelect.id}).then(async data => {
      console.log(data);
      if(data.status == "success") {
        this.glbFunc.irPage('history-notes')
      } else {
        this.glbFunc.showError(data);
      }
      this.isLoading = false;
    });
    
  }
}
