import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { OrderserviceProvider, Cart } from '../../providers/orderservice/orderservice';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  baseURL: string;
  orders: Cart[] = [];
  id = 0;
  isEmptyCart = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public userservice: UserserviceProvider,
    public orderservice: OrderserviceProvider,
    private storage: Storage) {
    //this.storage.clear();
    this.baseURL = this.userservice.baseURL;
    this.orders = this.orderservice.getOrder();
    this.getValue();
    if (this.orders.length > 0)
      this.isEmptyCart = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  checkOut() {
    if (this.id === null || this.id === undefined || this.id === 0) {
      console.log("error");
      this.goToPage("LoginPage");
    }
    else {
      if (this.orders.length != 0) {

        console.log(this.id);
        let request = `${this.baseURL}/order/create`;
        let order = { id: this.id, items: this.orders };
        this.http.post(request, order, { observe: 'response' }).subscribe(data => {
          let user: any
          if (data.status == 200) {
            this.orders.splice(0, this.orders.length);
            this.orderservice.clearOrder();
            this.sendNotification('your order saved successfully');
            this.navCtrl.push('TabsPage');
          }
        }, (error) => {
          this.sendNotification(error.error);
        });
      }


    }
  }
  getValue() {
    this.storage.get('ID').then((result) => {
      this.id = result;
      console.log('id', this.id);
      if (this.id == null)
        this.id = 0;
    });
  }
  // Minus Product Quantity
  minusQuantity(product, index) {
    if (product.quantity > 1) {
      this.orders[index].quantity = this.orders[index].quantity - 1;
    }
    console.log(this.orders);
  }

  // Add More Quantity
  addQuantity(product, index) {
    if (product.quantity) {
      this.orders[index].quantity = this.orders[index].quantity + 1;
    } else {
      this.orders[index].quantity = 1;
    }
    console.log(this.orders);
  }

  // Remove Product From Cart
  async removeProduct(product, index) {
    this.orders.splice(index, 1);
    console.log(this.orders);
  }

  showAlert(msg: string, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: (msg),
      buttons: ['OK']
    });

    alert.present();

  }
  sendNotification(message: string): void {
    let notification = this.toastController.create({
      message: message,
      duration: 3000
    });
    notification.present();
  }
  goToPage(page) {
    this.navCtrl.push('LoginPage',{
      p: 'CartPage',
    }); 
  }
}
