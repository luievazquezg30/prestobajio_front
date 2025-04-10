import { Component } from '@angular/core';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { GlobalFunctionsService } from 'src/app/providers/global-functions.service';
import { ApiService } from 'src/app/services/api.service';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-history-notes',
  templateUrl: 'history-notes.page.html',
  styleUrls: ['history-notes.page.scss'],
})
export class HistoryNotesPage {
  isLoading = true;
  notes:any[] = [];
  constructor(public glbFunc: GlobalFunctionsService,
    private api: ApiService,
    platform: Platform,
  ) {
  }
  
  async ionViewDidEnter() { 
    this.isLoading = true;
    this.notes = [];
    this.api.get("notes", false).then(async data => {
      console.log(data);
      if(data.status == "success") {
        this.notes = data.data.data;
      } else {
        this.glbFunc.showError(data);
      }
      this.isLoading = false;
    });
  }
}
