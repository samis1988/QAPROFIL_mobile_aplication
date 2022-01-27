import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber, private inAppBrowser: InAppBrowser,private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
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
  sendEmail(){
  let email = {
    to: 'info@qaprofil.com.qa',
    cc: [],
    bcc: [],
    attachments: [],
    subject: '',
    body: '',
    isHtml: true
  }
  
  // Send a text message using default options
  this.emailComposer.open(email);}

}
