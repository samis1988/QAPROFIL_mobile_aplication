import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {  AlertController} from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
   @ViewChild(Slides) slides: Slides;
   constructor(public navCtrl    : NavController,
               public http       : HttpClient,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public alertCtrl: AlertController,
               public toastCtrl  : ToastController,
               private inAppBrowser: InAppBrowser)   {
               
      
             
               }
 
   ngAfterViewInit() {
        
        this.slides.autoplayDisableOnInteraction = true;
        
   }
   products: any[] = [
      { title: 'Gypsum Ceilings', component: 'GypsumPage',image: 'assets/img/qaprofil/new_gypsum.jpg' },
      { title: 'Indoor Aluminum', component: 'IndooralumPage',image: 'assets/img/qaprofil/aluminum.jpg' },
      { title: 'Light Gauge Steel', component: 'LightgaugesteelPage' ,image: 'assets/img/qaprofil/cabins.jpg'},
      { title: 'Roof Panels', component: 'RoofpanelsPage',image: 'assets/img/qaprofil/roof.jpg' },
      { title: 'Slitting Line', component: 'SlittingPage',image: 'assets/img/qaprofil/new_slitting.jpg' },
      { title: 'Buildings Accessories', component: 'LintelPage',image: 'assets/img/qaprofil/lintel.jpg' },
      {title: 'Catalogue pdf', component: 'VedioqaprofilPage',image: 'assets/img/pdf.jpg'}
   ]
 

 addEntry() : void
   {
      this.navCtrl.push('MessagePage');
   }
 
   
 cart() : void
   {
      this.navCtrl.push('CartPage');
   }
   goToSecond(page){
      if(page=='Youtube Video')
      this.navCtrl.push('VedioqaprofilPage');
      else if(page=='about')
      this.navCtrl.push('AboutPage');
      else if(page=='VedioqaprofilPage')
      this.openExternalUrl('https://www.qaprofil.com.qa/full_catalogue/mobile/index.html');
      else
      this.navCtrl.push(page);
   }
   openExternalUrl(url: string) {
      this.inAppBrowser.create(
        url,
        '_blank'
      );
    }
}
