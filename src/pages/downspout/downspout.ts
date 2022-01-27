import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { OrderserviceProvider, Cart } from '../../providers/orderservice/orderservice';
import { ImageViewerController } from 'ionic-img-viewer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { renderDetachView } from '@angular/core/src/view/view_attach';

/**
 * Generated class for the StripsjointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-downspout',
   templateUrl: 'downspout.html',
 })
 export class DownspoutPage {
 
  colors: any[] = [];
  widths: any[] = [];
  thinkness: any[] = [];
  quantity: number =1;
  color: any;
  width: any;
  thicknes: any;
  baseURL: string;
  res: any;
  product1 = false;
  product2 = false;
  title = "DownSpout";
  p1 = "";
  p2 = "";
  cart: Cart;
  orders: Cart[] = [];
  _imageViewerCtrl: ImageViewerController;
  info: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController, public platform: Platform, public userservice: UserserviceProvider, public orderservice: OrderserviceProvider, public http: HttpClient, public toastController: ToastController) {
    this.baseURL = this.userservice.baseURL;
    this._imageViewerCtrl = imageViewerCtrl;

    let backAction = platform.registerBackButtonAction(() => {
      console.log("contact");
      this.navCtrl.pop();
      backAction();
    }, 2)

  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StripsjointPage');
    let request = `${this.baseURL}/product/${this.title}`;
    console.log(request);
    this.http.get(`${this.baseURL}/product/${this.title}`, { observe: 'response' }).subscribe(data => {

      if (data.status == 200)
        this.res = data.body;
      console.log(this.res);
      this.colors = this.res.colors;
      this.widths = this.res.widths;
      this.thinkness = this.res.thinkness;

    }, (error) => {
      console.log(error);
    });
  }

  goToSecond(page) {
    this.navCtrl.push(page);
  }

  producOne(e) {
    console.log(this.product1);
    if (this.product1 == true)
      this.p1 = "DownSpout";
    else
      this.p1 = "";
    console.log(this.p1);
  }

  producTwo(e) {
    console.log(this.p1 + this.product2);
    if (this.product2 == true)
      this.p2 = "Downspout Elbow";
    else
      this.p2 = "";
    console.log(this.p2);
  }
  addToCart() {
    if (this.product1 == false && this.product2 == false)
      this.sendNotification("Please choose a product to add to the cart");
    else {

      if (this.color == null || this.width == null || this.thicknes == null || this.quantity== null || this.quantity < 1) {
        this.sendNotification("Please choose the characteristics of the product");
      }
      else {
        if (this.product1 == true) {
            let data: Cart = {
              product: this.p1,
              color: this.color,
              width: this.width,
              thickness: this.thicknes,
              image:"assets/img/qaprofil/roof_pannel/downspot1.png",
              quantity: this.quantity,
            };
            this.orderservice.setOrder(data);
          
        }
        if (this.product2 == true) {
            let data: Cart = {
              product: this.p2,
              color: this.color,
              width: this.width,
              thickness: this.thicknes,
              image:"assets/img/qaprofil/roof_pannel/downspot1.png",
              quantity: 1,
            };
            console.log(data);
            this.orderservice.setOrder(data);
        }
        this.sendNotification('Product added to the cart');
      }
    }

  }

  sendNotification(message: string): void {
    let notification = this.toastController.create({
      message: message,
      duration: 3000
    });
    notification.present();
  }



}
