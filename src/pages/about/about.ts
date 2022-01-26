import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  
  startApp(page) {
    this.navCtrl.setRoot(page, {}, {
      animate: true,
      direction: 'forward'
    });
  }
  makeCall(n:string){
    window.open(`tel:${n}`, '_system');
  }
  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }
}
