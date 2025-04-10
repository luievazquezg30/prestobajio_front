import { EventEmitter, Injectable, Injector } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import {Location} from '@angular/common';
import { RegisterAccPage } from '../pages/register-acc/register-acc.page';
import { CommissionsPage } from '../pages/commissions/commissions.page';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {
  cart = 0;
  backCustomEvent: EventEmitter<any> = new EventEmitter();

  constructor(private loadingCtrl: LoadingController,
              private modalCtrl: ModalController,
              private toastCtlr: ToastController,
              private storage: Storage,
              private router: Router,
              private location: Location) { 
    this.storage.create();
    this.getStorage("cart").then(cart => {
      if(!cart) {
        this.cart = 0;
      } else {
        this.cart = cart.length;
      }
    });
  }

  /*Funcion que presenta mensaje de carga*/
  presentLoading(msj: string = 'Cargando...') {
    const promise = new Promise<any>(resolve => {
      this.loadingCtrl.create({
      message: msj,
      cssClass: msj ? '' : 'alertvacio',
      }).then((res) => {
        res.present();
        resolve(true);
      });
    });
    return promise;
  }

  /*Funcion que remueve mensaje de carga*/
  dismissLoading() {
    const promise = new Promise<any>(async resolve => {
      const loaders:any = await this.loadingCtrl.getTop();
      if (loaders && loaders.length > 0) {
        console.log(loaders);
        loaders.forEach(async (loader:any, i:number) => {
          await loader.dismiss();
          if(loaders.length == (i + 1)) {
            resolve(true);
          }
        });
      } else if(loaders) {
        await loaders.dismiss();
        resolve(true);
      } else {
        resolve(true);
      }
    
    });
    return promise;
    
  }

  /* Abre el modal de detalles de reservas */
  /*async openDetalleReservas(evento) {
    const promise = new Promise<any>(async resolve => {
      const modal = await this.modalCtrl.create({
        cssClass: "modal-no-100",
        component: DetallesReservasComponent,
        componentProps: {
          evento    : evento
        }
      });

      modal.onDidDismiss().then(data => {
        resolve(data.data);
      });

      await modal.present();
    });
    return promise;
  }*/

  /* Obtiene el formateo de fecha */
  getHours(date: Date){
    var hora:any    = date.getHours(),
        minutos:any = date.getMinutes(),
        time = "a.m.";
    if(hora == 0) {
      hora = 12;
    } else if(hora > 12) {
      hora = hora - 12;
      time = "p.m.";
    } else if(hora == 12) {
      time = "p.m.";
    }

    if(minutos < 10) {
      minutos = "0" + minutos;
    }

    return hora+":"+minutos+" "+time;
  }

  /*Funcion general para presentar mensajes tipo toast */
  async presentToast(type: string, message: string, duration = 2000, position = 1) {
    const toast = await this.toastCtlr.create({
      message: message,
      duration: duration,
      animated: true,
      color: type,
      position: position == 1 ? "top" : position == 2 ? 'bottom' : 'middle'
    });
    toast.present();
  }

  /* Función para guardar en storage */
  async setStorage(key: string, value: any) {
    if(key == "user") {
      if(value && !value.settings) {
        value.settings = {
          notifications: true,
          see_recommendations: true,
          see_price_list: true,
          see_spare_parts: true,
          see_reasons_choose: true,
          see_calculator: true,
          see_technical_files: true
        }
      }
    }
    await this.storage.set(key, value);
    return value;
  }

  /* Función para obtener datos en storage */
  async getStorage(key: string) {
    const item = await this.storage.get(key);
    if(key == "user") {
      if(item && !item.settings) {
        item.settings = {
          notifications: true,
          see_recommendations: true,
          see_price_list: true,
          see_spare_parts: true,
          see_reasons_choose: true,
          see_calculator: true,
          see_technical_files: true
        }
      }
    }
    return item;
  }

  /* Función para remover un dato del storage */
  async removeStorage(key: string) {
    await this.storage.remove(key);
  }

  /* Función para limpiar storage */
  async clearStorage() {
    await this.storage.clear();
  }

  /* Función para obtener las llaves de los datos de storage */
  async getKeys() {
    let keys = await this.storage.keys();
    return keys;
  }

  /* Función que regresa cadena para una fecha */
  dateFormatFromDate(date:any, format:string = "1") {    
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fecha = "";
    let months = ["Enero", "Febrero", "Marzo", "Abrrl", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    if(format == "1") {
      fecha = day + " de " + months[month] + " - " + this.timeFormatFromDate(date);
    } else if(format == "2") {
      if(day < 10) {
        day = "0" + day;
      }
      month = month + 1;
      if(month < 10) {
        month = "0" + month;
      }
      fecha = year + "-" +  month + "-" + day;
    } else {
      fecha = day + "/" + month + "/" + year + " " + this.timeFormatFromDate(date);
    }

    return fecha;
  }

  /* Formato de 12 horas */
  timeFormatFromDate(date:any, format:string = "1") {
    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = hours < 12 ? 'a.m.' : 'p.m.';
    if(minutes < 10) {
      minutes = "0" + minutes;
    }
    let hora = "";
    if(format == "1") {
      hours = (hours + 24) % 12 || 12;
      if(hours < 10) {
        hours = "0" + hours;
      }

      hora = hours + ":" + minutes + " " + period;
    }    
    return hora; 
  }
  /* Agrega días a fecha */
  addDays(date: any, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }


  /* Función que regresa date a partir de un string */
  dateFormatFromString(datetime:any, format:string = "1") {   
    if(format == "1") {
      let date = datetime.split(" ")[0].split("-"),
          time = datetime.split(" ")[1].split(":");
      return new Date(date[0], parseInt(date[1]) - 1, date[2], time[0], time[1], time[2]);
    } 

    return '';
  }

  parseInt(num: any) {
    return parseInt(num);
  }

  irPage(page:string, withBack = true) {
    if(withBack) {
      this.router.navigateByUrl(page);
    } else {
      this.router.navigateByUrl(page,{replaceUrl:true});
    }
  }


  async sendPdf() {
   /* const promise = new Promise<any>(async resolve => {
      const modal4 = await this.modalCtrl.create({
        backdropDismiss: true,
        component: SendPdfComponent,
        id: 'send-pdf-modal',
        componentProps: {
        }
      });
      modal4.onDidDismiss().then(data => {
        resolve(data.data);
      });
      await modal4.present();
    });
    return promise;*/
  }

  getType(link: any) {
    let aux = "";
    let auxArr = link.split(".")[link.split(".").length - 1];
    if(auxArr){ 
      aux = auxArr;
    }
    return aux;
  }

  removeDays(date: Date, days: number) {
    date.setDate(date.getDate() - days);
    return date;
  }

  back() {
    this.location.back();
    this.backCustomEvent.emit(true);
  }

  numberOnlyValidation(event: any, maxLength:any = false) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    } else {
      if(maxLength != false) {
        if(event.target.value.length == maxLength) {
          event.preventDefault();
        }
      }
    }
  }

  showError(data:any) {
    if(data.data && data.data.error && data.data.error.errors && Object.keys(data.data.error.errors).length > 0) {
      let key = Object.keys(data.data.error.errors)[0];
      this.presentToast("danger", data.data.error.errors[key], 3000, 3);
    } else if(data.data && data.data.error && data.data.error.message) {
      this.presentToast("danger", data.data.error.message, 3000, 3);
    } else if(data.msg) {
      this.presentToast("danger", data.msg, 3000, 3);
    }
  }

  formatAdrressByGeocoder(address:any, type = 1) {
    let text = "";
    if(type == 1) {
      text += address.thoroughfare.replace("Avenida", "Av.")+" "+address.subThoroughfare;
    } else {
      text += address.thoroughfare.replace("Avenida", "Av.")+" "+address.subThoroughfare + ", " + address.subLocality + ", " + address.postalCode + " " + address.locality + ", " + address.administrativeArea + ", " + address.countryName;
    }
    
    return text;
  }

  call(phone:any) {
    //this.callNumber.callNumber(phone, true);
  }

  searchGlobal($event:any, page = 'tabs/barberias', princPage = '') {
    if(!princPage) {
      princPage = page;
    }
    if($event.detail.value && $event.detail.value.trim() || this.router.url.indexOf(princPage) > -1) {
      if(page.indexOf("?") > -1) {
        this.irPage(page+"&search="+($event.detail.value ? $event.detail.value : ''));
      } else {
        this.irPage(page+"?search="+($event.detail.value ? $event.detail.value : ''));
      }      
    }    
  }

  async generateEmailFromJwt(idToken: string): Promise<any> {

    let base64Url = idToken.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const response = JSON.parse(jsonPayload);
    return response;
  }

  validateEmail(email:any) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  encodeB64(text:any) {
    text = text+"";
    return btoa(text);
  }

  decodeB64(text:any) {
    text = text+"";
    return atob(text);
  }

  async openRegisterAcc(item:any = null) {
    const promise = new Promise<any>(async resolve => {
      const modal = await this.modalCtrl.create({
        backdropDismiss: true,
        component: RegisterAccPage,
        mode: 'ios',
        componentProps: {
          item: item
        }
      });

      modal.onDidDismiss().then(data => {
        resolve(data.data);
      });

      await modal.present();
    });
    return promise;
  }


}
