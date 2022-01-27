import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ItemserviceProvider, Product } from '../../providers/itemservice/itemservice';

/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class MyorderPage {
  info: User;
  STORAGE_VALUE: string = '';
  id: string;
  user: User;
  page: string;
  items: Product[] = [];
  products: any;
  private baseURL: string;
  isEmptyCart=true;
  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public NP: NavParams,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public userservice: UserserviceProvider,
    public itemservice: ItemserviceProvider,
    public loadingCtrl: LoadingController,
    private storage: Storage) {
      this.baseURL = this.userservice.baseURL;
      this.page=this.NP.get('p');
      console.log(this.page);
      this.getValue();
  }

  ionViewDidLoad() {
   this.getOrder();
  }
 

  sendNotification(message: string): void {
    let notification = this.toastController.create({
       message: message,
       duration: 3000,
    });
    notification.present();
 }

 saveValue(user: User) {

    console.log(user);
    

    if (user) {

       this.storage.set('ID', user.id);
       this.storage.set('NAME', user.name);

    }

 }
 getValue() {
    this.storage.get('ID').then((result) => {
       this.id=result;
       console.log('id',this.id);
    });
 }
 showAlert(msg: string, title: string)
 {
    let alert = this.alertCtrl.create({
     title: title,
     subTitle:(msg),
     buttons: ['OK']
     });
    
     alert.present();
     
 }
 goback() {
    this.navCtrl.pop();
    console.log('Click on button Test Console Log');
 }   
 getOrder() {
   let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  loading.present();
  let request = `${this.baseURL}/user/order`;
  this.http.post(request,{id: this.page}, { observe: 'response' }).subscribe(data => {
    if (data.status == 200)
       console.log(data.body);
       loading.dismiss();
       this.products= data.body;
       console.log(this.products);
       this.items = this.products;
       if (this.items.length > 0)
       {this.isEmptyCart=false;}
       else
       {this.isEmptyCart=true}
       console.log(this.items);
  }, (error) => {
    loading.dismiss();
    console.log(error);
  });
}
}
